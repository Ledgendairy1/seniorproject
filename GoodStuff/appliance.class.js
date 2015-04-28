(function(){
	Appliance = function(obj){
		
		var app = this; // define this
	
		/*
			Appliance obj must contain all members
			
			Set appliance members below
		*/
		
		app.energyCost = .12; // Cost of Energy per kilowatt hour
		app.totalCost = 0; // track application cost
		app.totalEnergyUsed = 0; // total energy used by this appliance
		app.dailyEnergyUsed = 0;
		app.completedCycles = 0; // total number of completed cycles
		app.todaysCompletedCycles = 0; // completed cycles during the current day
		app.currentRunTime = obj.hasOwnProperty('cycleDuration') ? obj.cycleDuration : 0; // count down to zero
		
		app.on = false; // is the appliance on
		
		app.currentTime = false; // the curent time of day in minutes
		app.currentDay = false; // the current day
		
		app.noisy = obj.hasOwnProperty('noisy') ? obj.noisy : false; // can the appliance run during quiet hours
		app.cycleDuration = obj.hasOwnProperty('cycleDuration') ? obj.cycleDuration : 0; // 0 means run for entire scheduled period
		app.cyclesPerDay = obj.hasOwnProperty('cyclesPerDay') ? obj.cyclesPerDay : 0; // 0 means run every scheduled period
		
		if(obj.hasOwnProperty('name')
		&& obj.hasOwnProperty('type')
		&& obj.hasOwnProperty('energyUsage')
		&& obj.hasOwnProperty('group')
		&& obj.hasOwnProperty('runSchedule')
		&& obj.hasOwnProperty('runPriority')){
		
			app.name = obj.name;
			app.type = obj.type;
			app.energyUsage = obj.energyUsage/1000; // KWH kilowatt hours
			app.runSchedule = obj.runSchedule;
			app.group = obj.group;
			app.runPriority = obj.runPriority;
		
		}else{
			throw 'Usage: Appliance({name,type,energyUsage,cycleDuration,runSchedule,group,runPriority,cyclesPerDay})';
			return false;
		}
		
		app.setEnergyCost = function(e){
			app.energyCost = e;
		}
		app.costPerMinute = function(){
			return app.energyCost/60;
		}
		
		app.kilowattMinutes = function(){
			return app.energyUsage/60;
		}
		
		app.finish = function(){
			app.resetCurrentRunTime();
			app.completedCycles++;
			app.todaysCompletedCycles++;
		}
		
		app.getTotalCost = function(){
			return app.totalCost;
		}
		
		app.getTotalEnergyUsage = function(){
			return app.totalEnergyUsage;
		}
		
		app.getCurrentSchedule = function(){ // returns the current schedule block for this appliance false if its out of its block
			if(app.currentTime === false || app.currentDay === false){
				throw 'Must be preceded by setDate';
				return false;
			}
			var currentDay = app.runSchedule[app.currentDay];
			for(var i = 0; i<currentDay.length; i++){ // loop through the current day and see if we are within one of the current schedules
				// make sure our schedule has a to and from member
				if(currentDay[i].hasOwnProperty('from') && currentDay[i].hasOwnProperty('to')){
					// check if the appliance is within its schedule
					if(currentDay[i].from <= app.currentTime && app.currentTime <= currentDay[i].to){
						return currentDay[i];
					}
				}else{
					throw "To and from not specified for appliance schedule.";
					return false;
				}
			}
			
			// return false if we break from the loop. because we didn't return true...
			return false;
		}
		
		app.getCurrentRunTime = function(){ // returns how long the appliance has been running
			if(app.cycleDuration === null){
				if(!app.currentTime || !app.currentDay){
					throw 'Must be preceded by setDate';
					return false;
				}
				var now = app.getCurrentSchedule();
				return app.currentTime-now.from;
			}else{
				return app.cycleDuration-app.currentRunTime;
			}
		}
		
		app.getTimeRemaining = function(){
			if(app.cycleDuration === null){
				if(!app.currentTime || !app.currentDay){
					throw 'Must be preceded by setDate';
					return false;
				}
				var now = app.getCurrentSchedule();
				return now.to-app.currentTime;
			}else{
				return app.currentRunTime;
			}
		}
		
		app.done = function(){
			if(app.currentRunTime <= 0.0){
				app.resetCurrentRunTime();
				return true;
			}
			return false;
		}
		
		app.resetCurrentRunTime = function(){
			app.currentRunTime = app.cycleDuration;
		}
		
		app.cost = function(c){ // takes the cost of electricity per kilowatt-minute
			app.totalCost += c;
		}
		
		app.tick = function(){ // every tick the appliance should tick as well
			app.currentRunTime--;
			app.cost(app.costPerMinute());
			app.totalEnergyUsed += app.kilowattMinutes();
			app.dailyEnergyUsed += app.kilowattMinutes();

			//console.log(app.name + " total energy used: " + app.totalEnergyUsed);
			return app;
		}
		
		app.isNoisy = function(){
			return app.noisy;
		}
		
		app.setDate = function(date){ // time of day in minutes and day of the week
			app.currentTime = date.hasOwnProperty('time') ? date.time : false;
			app.currentDay = date.hasOwnProperty('day') ? date.day : false;
			return app;
		}
		
		app.finishedTodaysCycles = function(){ // returns whether it has completed todays cycles or not
			if(app.cyclesPerDay == null){
				return false;
			}
			if(app.todaysCompletedCycles >= app.cyclesPerDay){
				return true;
			}
			return false;
		}
		
		app.isWithinSchedule = function(){
			
			if(app.currentTime === false || app.currentDay === false){
				throw 'Must be preceded by setDate';
				return false;
			}
			var currentDay = app.runSchedule[app.currentDay];
			for(var i = 0; i<currentDay.length; i++){ // loop through the current day and see if we are within one of the current schedules
				// make sure our schedule has a to and from member
				if(currentDay[i].hasOwnProperty('from') && currentDay[i].hasOwnProperty('to')){
					// check if the appliance is within its schedule
					if(currentDay[i].from <= app.currentTime && app.currentTime <= currentDay[i].to){
						return true;
					}
				}else{
					throw "To and from not specified for appliance schedule.";
					return false;
				}
			}
			
			// return false if we break from the loop. because we didn't return true...
			return false;
		}
		app.turnOn = function(){
			app.on = true;
		}
	
		app.turnOff = function(){
			app.on = false;
		}
	}
	return Appliance;
})();
