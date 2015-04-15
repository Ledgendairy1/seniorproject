// use this function to output strings to a console on the webpage
consoleMessage = function(str){
	message = str + "\n";
	document.getElementById("console-textbox").value = message;
	document.getElementById("console-textbox").scrollTop = document.getElementById("console-textbox").scrollHeight;
}
// this will take simulator events and append them to a list which will output on the webpage for the user
eventMessage = function(str, day){
	var list;
	var listItem;
	
	list = document.getElementById(dayOfTheWeek+"-event");
	listItem = document.createElement("li");
	listItem.appendChild(document.createTextNode(str));
	list.appendChild(listItem);
}
// clear the text in the console-textbox
clearText = function(){
	document.getElementById("console-textbox").value = "";
}

function Scheduler(apps){
    var sched = this;
    sched.time;
    sched.formatTime = function(time){
    	time = time/60/60;
        if(typeof time !== 'undefined'){
            var hours = Math.floor(time);
            var decimal = time-hours;
            var minutes = Math.floor(decimal*60); 
            // add 0 padding
            if(minutes.toString().length < 2){
                minutes = "0"+minutes;
            }
            
            // handle times of 0 when it is 12 o'clock
            if(hours == 0){
                return "12:"+minutes+" AM";
            }
            if(hours-12 == 0){
                return "12:"+minutes+" PM";
            }
            
            // convert the hours into a 12 hour timestamp
            if(hours >= 1 && hours <= 11){
                return hours+":"+minutes+" AM";
            }else{
                return hours-12+":"+minutes+" PM";
            }
        }else{
            console.log("Please supply a time to be formatted.");
			consoleMessage("Please supply a time to be formatted.");
            return false;
        }
    }
    sched.Run = function(elapsedTime){ // in seconds //everything in this function happens each tick
        sched.time = elapsedTime;
       // console.log("Running at time: "+sched.formatTime(sched.time)+" hours on day "+dayOfTheWeek);
       console.log("Time: "+sched.formatTime(elapsedTime));
	   consoleMessage("Time: "+sched.formatTime(elapsedTime));
        /*
            check for
                interrupts
                if it can run during the given schedule
                home hours and quiet hours
        */
        
        for(var i = 0; i<apps.length; i++){
            // check for turning an appliance on
            if(!apps[i].on // appliance is not on
            && sched.applianceCanStart(apps[i]) // check if the appliances schedule works with the current date
           	&& apps[i].timesRun < apps[i].timesToRun // check if it has been run the correct number of times
        	){
                sched.runInGroupPriority(apps[i], elapsedTime);
            }
            // check for turning appliance off
            if(apps[i].on
            && apps[i].currentRuntime >= apps[i].cycleDuration){
                apps[i].on = false;
                apps[i].timesRun += 1;
                console.log("Stopping appliance "+apps[i].name);
				consoleMessage("Stopping appliance " + apps[i].name);
				eventMessage(apps[i].name + " stopped at: " + sched.formatTime(elapsedTime), dayOfTheWeek);
                apps[i].currentRuntime = 0;
            }
            // update appliances that are on
            if(apps[i].on){
                apps[i].currentRuntime++;
                console.log("Time remaining for "+apps[i].name+": "+Math.floor((apps[i].cycleDuration-apps[i].currentRuntime)/60) +" minutes");
				consoleMessage("Time remaining for " + apps[i].name+": "+Math.floor((apps[i].cycleDuration-apps[i].currentRuntime)/60)+ " minutes");
            }
        }
    }
    sched.countRunningAppliancesInGroup = function(group){
    	var count = 0;
    	for(var i = 0; i<apps.length; i++){
    		if(apps[i].on && group == apps[i].group){
    			count++;
    		}
    	}
    	return count;
    }
    sched.runInGroupPriority = function(appliance, elapsedTime){
    	if(sched.countRunningAppliancesInGroup(appliance.group) == 0){
    		console.log("Running appliance "+appliance.name);
			consoleMessage("Running appliance "+appliance.name);
			eventMessage(appliance.name + " started at: "+sched.formatTime(elapsedTime), dayOfTheWeek); // throws error if using sched.formatTime(elapsedTime);
    		appliance.on = true;
    		return;
    	}
        var totalEnergy = 0;
        var lowestPriority = Infinity, lowestPriorityId;
        for(var i = 0; i<apps.length; i++){
            if(appliance.group == apps[i].group && apps[i].on){ // if appliance is in the same group and is on
                totalEnergy += apps[i].energyUsage.wattage;
            }
        }
        
        // add energy of the current appliance
        totalEnergy += appliance.energyUsage.wattage;
        
        console.log("Group "+appliance.group+" total wattage: "+totalEnergy);
		consoleMessage("Group "+appliance.group+" total wattage: "+totalEnergy);
		eventMessage("Group "+appliance.group+" total wattage: "+totalEnergy, dayOfTheWeek);
		
        if(groups[appliance.group].energyLimit.wattage < totalEnergy){ // the energy has reached its limit
            for(var i = 0; i<apps.length; i++){ // check each appliances priority in the group
                if(appliance.group === apps[i].group && apps[i].on){
                      if(lowestPriority > apps[i].priority){
                          lowestPriority = apps[i].priority;
                          lowestPriorityId = i;
                      }
                }
                // check if the current appliance has a higher priority than the one with the lowest.
				if(appliance.priority > lowestPriority){
					appliance.on = true;
					console.log("Interrupting appliance "+apps[lowestPriorityId].name);
					console.log("Running appliance "+appliance.name);
					consoleMessage("Interrupting appliance "+apps[lowestPriorityId].name);
					consoleMessage("Running appliance "+appliance.name);
					eventMessage("Interrupting appliance "+apps[lowestPriorityId].name, dayOfTheWeek);
					eventMessage("Running appliance "+appliance.name, dayOfTheWeek);
					apps[lowestPriorityId].on = false;
				}
            }
        }else{
        	console.log("Running appliance "+appliance.name);
			consoleMessage("Running appliance "+appliance.name);
			eventMessage("Running appliance "+appliance.name);
    		appliance.on = true;
        }             
    }
    sched.priority = function(appliance){
    
    }
    sched.applianceCanStart = function(appliance){
        var currDay = appliance.schedule[dayOfTheWeek];
        for(var i = 0; i<currDay.length; i++){
            if(currDay[i].hasOwnProperty('from') && currDay[i].hasOwnProperty('to')){
                // check if the appliance is within its schedule
                if(currDay[i].from <= sched.time && sched.time <= currDay[i].to){
                    if(sched.isQuietHours() && appliance.noisy){ // check if the appliance can run at this time
                        return false
                    }
                    appliance.lastCycle = currDay[i];
                    return true;
                }
            }else{
                console.log("Must supply to and from for schedules.");
				consoleMessage("Must supply to and from for schedules.");
                return false;
            }
        }
    }
    sched.isQuietHours = function(){
        for(var i = 0; i<homeSchedule[dayOfTheWeek].length; i++){
            if(homeSchedule[dayOfTheWeek][i].hasOwnProperty('quiet') && homeSchedule[dayOfTheWeek][i].quiet == true){
                if(homeSchedule[dayOfTheWeek][i].from <= sched.time && homeSchedule[dayOfTheWeek][i].to >= sched.time){
                    return true;
                }
            }
        }
        return false;
    }
}

var seconds = 1;    // start from 1 to 86400;
var days = 0; // number of days passed
var dayOfTheWeek = 'm';
var simInterval = 1; // interval in ms the simulation will run
var running = false;    // simulation started ?
var s = new Scheduler(selectedAppliances); // new scheduler object

// run the simulation
function startSimulation(){
    inter = setInterval(function(){
            s.Run(seconds);
            seconds++;
            if(seconds > 86400){
            	for(var i = 0; i<selectedAppliances.length; i++){
            		selectedAppliances[i].timesRun = 0; // reset the number of times it has run that day
            	}
                seconds = 1;
                days++;
                switch(dayOfTheWeek){ // set the correct day of the week
                    case 'm':
                        dayOfTheWeek = 't';
                        break; 
                    case 't':
                        dayOfTheWeek = 'w';
                        break; 
                    case 'w':
                        dayOfTheWeek = 'th';
                        break; 
                    case 'th':
                        dayOfTheWeek = 'f';
                        break; 
                    case 'f':
                        dayOfTheWeek = 's';
                        break; 
                    case 's':
                        dayOfTheWeek = 'su';
                        break; 
                    case 'su':
                        dayOfTheWeek = 'm';
                        break;
                }
            }
        }, simInterval);
}

function stopSimulation(){
    clearInterval(inter);
}

document.getElementById('run-simulation').onclick = function(){
    if(running){
        stopSimulation();
        running = false;
    }else{
        startSimulation();
        running = true;
    }
}
