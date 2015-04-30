(function(){ // Automatically Executing Function
	Simulator = function(obj){
		var sim = this; // define this
		
		sim.startTime = obj.hasOwnProperty('startTime') ? obj.startTime : 0; // 0 minutes
		sim.startDay = obj.hasOwnProperty('startDay') ? obj.startDay : 'MONDAY'; // start on monday
		sim.appliances = obj.hasOwnProperty('appliances') ? obj.appliances : [];
		sim.homeSchedule = obj.hasOwnProperty('homeSchedule') ? obj.homeSchedule : [];
		sim.simDuration = obj.hasOwnProperty('simDuration') ? obj.simDuration : 7*24*60; // defaults to one week
		
		sim.events = []; // array of events that have occurred
		sim.energyData = []; // data to be loaded into d3
		
		sim.time = sim.startTime; // the current time of day in minutes
		sim.runTime = 0; // total run time
		sim.runDays = 0; // number of days the simulation has run
		
		sim.day = sim.startDay; // set the start day
		sim.week = 0; // number of weeks
		
		sim.dailyEnergyArray = [];
		sim.weeklyEnergyArray = [];
		sim.energyToday = 0;
		sim.energyWeek = 0;
		
		sim.running = false // is it running
		sim.msgs = [];
		
		sim.groups = obj.hasOwnProperty('groups') ? obj.groups : []; // holds all of the appliance groups properties
		sim.runTimeSlack = 20.0; // 20 minutes of time to go over schedule.

		sim.start = function(){ // method starts the simulation
			sim.running = true;
			while(sim.running){ // run until we stop
				sim.msgs = [];
				sim.tick();
				sim.addEvent({msg: sim.msgs});
				sim.updateDate();
			}
			return {events: sim.events, energyData: sim.energyData};
		}
		
		sim.getEvents = function(){
			return sim.events;
		}
		
		sim.updateDate = function(){ // updates the number of minutes and the day if need be
			sim.time++; // increment the time
			sim.runTime++;
			if(sim.time >= 24*60){
				sim.time = 0;
				sim.runDays++;
				
				for(var i = 0; i < sim.appliances.length; i++){
					sim.energyToday += sim.appliances[i].dailyEnergyUsed;
					sim.appliances[i].dailyEnergyUsed = 0;
					sim.appliances[i].todaysCompletedCycles = 0;
				}
				if(typeof sim.dailyEnergyArray["WEEK " + sim.week] === "undefined"){
					sim.dailyEnergyArray["WEEK " + sim.week] = []
				}
				sim.dailyEnergyArray["WEEK " + sim.week][sim.day] = sim.energyToday;
				
				sim.energyWeek += sim.energyToday;
				sim.energyToday = 0;
				switch(sim.day){ // set the correct day of the week
					case 'MONDAY':
						sim.day = 'TUESDAY';
						break; 
					case 'TUESDAY':
						sim.day = 'WEDNESDAY';
						break; 
					case 'WEDNESDAY':
						sim.day = 'THURSDAY';
						break; 
					case 'THURSDAY':
						sim.day = 'FRIDAY';
						break; 
					case 'FRIDAY':
						sim.day = 'SATURDAY';
						break; 
					case 'SATURDAY':
						sim.day = 'SUNDAY';
						break; 
					case 'SUNDAY':
						sim.day = 'MONDAY';
						break;
				}
				if(!(sim.runDays%7) || sim.runTime >= sim.simDuration){ // if we have run for a week
					sim.week++;
					sim.weeklyEnergyArray.push(sim.energyWeek);
					sim.energyWeek = 0;
				}
				if(sim.runTime >= sim.simDuration){
					sim.stop();
				}
			}
		}
		
		sim.stop = function(){ // method stops the simulation
			sim.running = false;
			return sim.events;
		}
		
		sim.tick = function(){ // executes a tick in the simulation
			for(var i = 0; i < sim.appliances.length; i++){
				/*
					Look for appliances to turn on!
				*/
				if(sim.appliances[i].setDate({time: sim.time, day: sim.day}).isWithinSchedule()
				   && !(sim.isQuietHours() && sim.appliances[i].isNoisy)
				   && !sim.appliances[i].finishedTodaysCycles()
				   && !sim.appliances[i].on
				){ // check if we are within schedule and if we are noisy
					// check if the current appliance is going to exceed the energy limit and that it uses less energy than the group allows for
					if(sim.exceedsGroupEnergyLimit(sim.appliances[i])){
						if(sim.removeLowerPriorityAppliances(sim.appliances[i])){ // check if we can remove other appliances to lower the total energy used. and do so
							sim.appliances[i].turnOn();
							sim.msgs.push("Adding appliance "+sim.appliances[i].name+".");
							sim.totalWeeklyEnergyUsed += sim.appliances[i].totalEnergyUsed;
						}else{
							// fill in gaps in energy and run appliances!
						}
					}else{
						sim.appliances[i].turnOn();
						sim.msgs.push("Adding appliance "+sim.appliances[i].name+".");
						sim.totalWeeklyEnergyUsed += sim.appliances[i].totalEnergyUsed;
					}
				}else{
					// debug
				}
				
				/*
					Remove appliances
				*/
				
				if(sim.appliances[i].on
					&& (!sim.appliances[i].setDate({time: sim.time, day: sim.day}).isWithinSchedule()
					|| sim.appliances[i].done())
				){
					sim.msgs.push("Removing appliance "+sim.appliances[i].name+".");
					sim.appliances[i].finish();
					sim.appliances[i].turnOff();
				}
				if(sim.appliances[i].on){
					sim.appliances[i].tick();
				}
			}
			if(sim.msgs.length == 0){
				sim.msgs = null;
			}
		}
		
		sim.removeLowerPriorityAppliances = function(appliance){
			var turnOffableAppliances = []; // appliances that can be removed
			var appliancesToTurnOff = []; // appliances that will be removed
			var group = appliance.group;
			var groupELimit = sim.groups[appliance.group].energyLimit;
			var groupTotalE = sim.totalGroupEnergy(appliance.group) + appliance.energyUsage;
			for(var i = 0; i<sim.appliances.length; i++){
				if(sim.appliances[i].on 
				&& appliance.group == sim.appliances[i].group
				&& appliance.runPriority > sim.appliances[i].runPriority){
					turnOffableAppliances.push(sim.appliances[i]);
				}
			}
			if(turnOffableAppliances.length == 0){
				return false;
			}
			turnOffableAppliances.sort(function(a,b){
				return a.runPriority-b.runPriority;
			});
			
			for(var i = 0; i<turnOffableAppliances.length && groupTotalE > groupELimit; i++){
				groupTotalE -= turnOffableAppliances[i].energyUsage;
				appliancesToTurnOff.push(turnOffableAppliances[i]);
			}
			if(groupTotalE <= groupELimit){
				// turn off those appliances
				for(var i = 0; i<appliancesToTurnOff.length; i++){
					sim.msgs.push("Removing appliance "+appliancesToTurnOff[i].name+".");
					appliancesToTurnOff[i].turnOff();
				}
				return true;
			}else{
				return false;
			}
		}
		
		
		sim.totalEnergyUsage = function(){
			var totalE = 0;
			for(var i in sim.groups){
				totalE += sim.totalGroupEnergy(i);
			}
			//console.log("total usage: " + totalE);
			return totalE;
		}
		
		sim.totalGroupEnergy = function(groupId){
			var totalE = 0;
			for(var i = 0; i<sim.appliances.length; i++){
				if(sim.appliances[i].on && sim.appliances[i].group == groupId){
					totalE += sim.appliances[i].kilowattMinutes();
					//console.log("!!!!!!!!!!!!!!!!!!!!!Total E: " + totalE);
				}
			}
			return totalE;
		}
		
		sim.exceedsGroupEnergyLimit = function(appliance){
			var energy = sim.totalGroupEnergy(appliance.group) + appliance.energyUsage;
			if(energy > sim.groups[appliance.group].energyLimit){ // check if we are over the energy limit
				return true;
			}
			return false;
		}
		
		sim.isQuietHours = function(){
			if(!(sim.day in sim.homeSchedule)){
				throw "Day does not exist in home schedule!";
				return false;
			}
			var currentDay = sim.homeSchedule[sim.day]; // current schedule for today
			for(var i = 0; i<currentDay.length; i++){
				if(currentDay[i].hasOwnProperty('from') && currentDay[i].hasOwnProperty('to')){
					// check if the appliance is within its schedule
					if(currentDay[i].from <= sim.time && sim.time <= currentDay[i].to){
						if(currentDay[i].quiet){
							return true;
						}else{
							return false;
						}
					}
				}else{
					throw "To and from not specified for appliance schedule.";
					return false;
				}
			}
			return false;
		}
		
		sim.convertTo12Hour = function(time){
			var hour = Math.floor(time/60.0); // the hour of day 24 hour time
			var minute = "00"+Math.floor(time % 60);
			minute = minute.slice(-2);
			var time;
			
			// minutes to 12 hour time
			if(hour == 0){ // if we are at minute 0 then it is 12:00 am
				time = "12:"+minute+"AM";
			}else if(hour == 12){
				time = hour+":"+minute+"PM";
			}else if(hour > 12){ // if its after 12 then we subtract 12
				 time = (hour-12)+":"+minute+"PM";
			}else{
				time = hour+":"+minute+"AM";
			}
			return time;
		}
		
		sim.shortenDay = function(d){
			return d.substr(0,3);
		}
		
		sim.addEvent = function(obj){ // creates a new event object
			sim.events.push({timestamp: {day: sim.day, time: sim.convertTo12Hour(sim.time), week: sim.week}, time:sim.runTime, msg: obj.msg, energy: sim.totalEnergyUsage()});
		}
	}
	
	return Simulator;
})();
