// selected appliances from builder
selectedApplianceList = new Array();

// array of groups
groupList = new Array();
groupNum = 0;
// minimum number of appliances to run simulation
minAppliances = 5;

/*
	Removes a group from the group list
*/
function removeGroup(){
	// get the element id
	var id = document.getElementById("group-id").value;

	// get the element
	var elem = document.getElementById("group-"+id);

	// delete the element
	elem.remove();
	
	// remove the element from the array
	groupList.splice(id, 1);
	
	// clear the description pane
	clearGroupDescForm();
	
	// reprint the selected appliances list with the updated ids
	printGroupList();
}


/*
	Creates a group object and adds it to the group array
*/
function openGroupDesc(elem){
	var groupId = -1, name = "Group "+groupList.length , wattage = 0, water = 0, gas = 0, oil = 0;

	// show the description dialog
	document.getElementById("group-description").style.display = "block";
	
	// check if there is an element that has been selected
	if(elem !== undefined){
		groupId = elem.getAttribute("group-id");
		name = groupList[groupId].name;
		wattage = groupList[groupId].energyLimit.wattage;
		
		document.getElementById("add-group").value = "Save Changes";
	}else{
		document.getElementById("add-group").value = "Add Group";
	}
	
	// populate fields
	document.getElementById("group-id").value = groupId;
	document.getElementById("group-name").value = name;
	document.getElementById("group-wattage-limit").value = wattage;
}

/*
	Clears the group description form
*/
function clearGroupDescForm(){
	// hide the description form
	document.getElementById("group-description").style.display = "none";
	
	// populate fields
	document.getElementById("group-id").value = -1;
	document.getElementById("group-name").value = "";
	document.getElementById("group-wattage-limit").value = 0;
}

/*
	Adds the specified group to the group array
*/
function addGroup(){
	// create a group object and add it to the group array
	var groupId = document.getElementById("group-id").value;
	var name = document.getElementById("group-name").value;
	var wattage = document.getElementById("group-wattage-limit").value;
	
	var newGroup = new Group(name, {wattage: +wattage});
	console.log(newGroup);
	groupNum++;
	if(groupId == -1){
		groupList.push(newGroup);
		openGroupDesc();
	}else{
		groupList[groupId] = newGroup;
	}

	printGroupList();
}

/*
	Prints the group list the same way printSelectedAppliances does
*/
function printGroupList(){
	var list = document.getElementById("groups");
	list.innerHTML = "";
	
	var listItem;
	
	for(var i = 0; i<groupList.length; i++){
		listItem = document.createElement("li");
		listItem.innerHTML = groupList[i].name;
		listItem.setAttribute("group-id", i);
		listItem.setAttribute("id", "group-"+i);
		listItem.onclick = function(){openGroupDesc(this);}
		
		list.appendChild(listItem);
	}
	saveLists();
}

/*
	Clears all groups
*/
function clearGroups(){
	// delete the group array by setting its length to 0
	groupList.length = 0;
	
	// delete the local storage variable
	localStorage.removeItem('groupList');
	
	// clear the group description form
	clearGroupDescForm();
	
	// reprint groups
	printGroupList();
	
}

/*
	Clear the entire selected appliance list
*/
function clearSelectedAppliances(){
	// clear the array
	selectedApplianceList.length = 0;
	
	// remove local storage variable
	localStorage.removeItem('selectedApplianceList');
	
	// clear the description form
	clearApplianceDescForm();
	
	// reprint the empty list
	printSelectedAppliances();
}

/*
	clear the description form
*/
function clearApplianceDescForm(){
	document.getElementById("selected-appliance-id").value = -1;
	document.getElementById("appliance-type").innerHTML = "";
	document.getElementById("appliance-name").value = "";
	document.getElementById("appliance-wattage").value = 0;
	document.getElementById("appliance-priority").value = 0;
	
	document.getElementById("appliance-description").style.display = "none";
}

/*
	print selected appliances in the appliance list
	this also updates the local storage with the selected appliances list
*/
function printSelectedAppliances(){
	// clear the list
	var list = document.getElementById("selected-appliances");
	list.innerHTML = "";
	var listItem;
	
	// print the list
	for(var i = 0; i<selectedApplianceList.length; i++){
		listItem = document.createElement("li");
		
		listItem.innerHTML = selectedApplianceList[i].name;
		listItem.setAttribute("appliance-id", i);
		listItem.setAttribute("id", "selected-"+i);
		listItem.onclick = function(){openApplianceDesc(this);}
		
		list.appendChild(listItem);
	}
	
	saveLists();
}

/*
	Saves lists to local storage
*/
function saveLists(){
	if(typeof Storage !== undefined){
		console.log("Saving appliance list: " + selectedApplianceList);
		localStorage.selectedApplianceList = JSON.stringify(selectedApplianceList);
		localStorage.groupList = JSON.stringify(groupList);
	}else{
		alert("This browser does not support local storage.");
	}
}
/*
	remove appliance
	takes the element to be removed
*/
function removeAppliance(){
	// get the element id
	var id = document.getElementById("selected-appliance-id").value;

	// get the element
	var elem = document.getElementById("selected-"+id);

	// delete the element
	elem.remove();
	
	// remove the element from the array
	selectedApplianceList.splice(id, 1);
	
	// clear the description pane
	clearApplianceDescForm();
	
	// reprint the selected appliances list with the updated ids
	printSelectedAppliances();
}

/*
	add an appliance to the selected appliance list
*/
function addAppliance(){
	var selectedListElem = document.getElementById("selected-appliances");
	
	// get all the data from the form
	var type = document.getElementById("appliance-type").innerHTML;
	var name = document.getElementById("appliance-name").value;
	var wattage = document.getElementById("appliance-wattage").value;
	var cycleDuration = document.getElementById("appliance-duration").value;
	var cyclesPerDay = document.getElementById("appliance-cyclesPerDay").value;
	var groupNumber = document.getElementById("appliance-groupNumber").value;
	var priority = document.getElementById("appliance-priority").value;
	
	var newAppliance = new Appliance({
							name: name, 
							type: type, 
							energyUsage: +wattage, 
							cycleDuration: +cycleDuration,  
							group: +groupNumber, 
							runPriority: +priority, 
							cyclesPerDay: +cyclesPerDay
						});
	
	console.log(newAppliance);
	// add new element to selected list
	if(document.getElementById("selected-appliance-id").value == -1){
		// CREATE APPLIANCE OBJECTS AND ADD THEM TO SELECTED APPLIANCE LIST
		selectedApplianceList.push(newAppliance);
		
	}else{
		selectedApplianceList[document.getElementById("selected-appliance-id").value] = newAppliance;
	}
	
	/*
		duplicate ids are used between both lists *FIXED
	*/
	var appId = document.getElementById("appliance-id").value;
	if(appId != -1){
		openApplianceDesc(document.getElementById("available-"+appId));
	}
	console.log(selectedApplianceList);
	printSelectedAppliances();
}

/*
	OnClick function for appliances in the available-appliances list
*/
function openApplianceDesc(elem)
{
	var name = "", type, wattage = 0, cycleDuration = 0, cyclesPerDay = 0, groupNumber = 0, priority = 0;
	// get the parent element to check for the available appliances or selected appliances
	var parent = elem.parentNode;
	
	// display the appliance description div
	document.getElementById("appliance-description").style.display = "block";
	
	// check which list has been clicked. selected appliances or available ones
	if(parent.id === "available-appliances"){
		// appliance information
		appId = elem.getAttribute("appliance-id");
		type = availableApplianceList[appId].type;
		name = availableApplianceList[appId].type+" "+typeCount(type);
		wattage = availableApplianceList[appId].energyUsage;
		cycleDuration = availableApplianceList[appId].cycleDuration;
		cyclesPerDay = availableApplianceList[appId].cyclesPerDay;
		groupNumber = availableApplianceList[appId].groupNumber;
		priority = availableApplianceList[appId].priority;
		
		if(availableApplianceList[appId].energyUsage !== undefined){
			wattage = availableApplianceList[appId].energyUsage;
		}
		if(availableApplianceList[appId].cycleDuration !== undefined){
			cycleDuration = availableApplianceList[appId].cycleDuration;
		}
		if(availableApplianceList[appId].cyclesPerDay !== undefined){
			cyclesPerDay = availableApplianceList[appId].cyclesPerDay;
		}
		if(availableApplianceList[appId].groupNumber !== undefined){
			groupNumber = availableApplianceList[appId].groupNumber;
		}
		if(availableApplianceList[appId].priority !== undefined){
			priority = availableApplianceList[appId].priority;
		}
		// make sure the selected appliance hidden input is set to -1
		document.getElementById("selected-appliance-id").value = -1;
		document.getElementById("appliance-id").value = appId;
				
		// only show the desired buttons
		document.getElementById("add-appliance").value = "Add Appliance";
		document.getElementById("remove-appliance").style.display = "none";	
	}else{
		// appliance information
		appId = elem.getAttribute("appliance-id");
		type = selectedApplianceList[appId].type;
		name = selectedApplianceList[appId].name;
		wattage = availableApplianceList[appId].energyUsage;
		cycleDuration = availableApplianceList[appId].cycleDuration;
		cyclesPerDay = availableApplianceList[appId].cyclesPerDay;
		groupNumber = availableApplianceList[appId].groupNumber;
		priority = selectedApplianceList[appId].priority;
		if(selectedApplianceList[appId].energyUsage !== undefined){
			wattage = selectedApplianceList[appId].energyUsage;
		}
		
		// make sure the selected appliance hidden input is set to -1
		document.getElementById("selected-appliance-id").value = appId;
		document.getElementById("appliance-id").value = -1;
		
		// only show the desired buttons
		document.getElementById("add-appliance").value = "Save Changes";
		document.getElementById("remove-appliance").style.display = "inline";	
	}
	
	// set the appliance information
	document.getElementById("appliance-type").innerHTML = type;
	document.getElementById("appliance-name").value = name;
	document.getElementById("appliance-wattage").value = wattage;
	document.getElementById("appliance-duration").value = cycleDuration;
	document.getElementById("appliance-cyclesPerDay").value = cyclesPerDay;
	document.getElementById("appliance-groupNumber").value = groupNumber;
	document.getElementById("appliance-priority").value = priority;
	
	console.log(type);
	console.log(name);
	console.log(wattage);
	console.log(cycleDuration);
	console.log(cyclesPerDay);
	console.log(groupNumber);
	console.log(priority);
}

/*
	sets actions for buttons on page
*/
function setButtonActions(){
	/*
		set the onclick actions for the description section buttons
	*/
	document.getElementById("add-appliance").onclick = function(){addAppliance();}
	document.getElementById("remove-appliance").onclick = function(){removeAppliance();}
		
	// not included on every page
	if(document.getElementById("clear-appliances") !== null){
		document.getElementById("clear-appliances").onclick = function(){clearSelectedAppliances();}
	}
	
	// not included on every page
	if(document.getElementById("goto-simulation") !== null){
		document.getElementById("goto-simulation").onclick = function(){gotoSimulation();}
	}
	
	// not included on every page
	if(document.getElementById("add-group") !== null){
		document.getElementById("add-group").onclick = function(){addGroup();}
	}
	
	// not included on every page
	if(document.getElementById("remove-group") !== null){
		document.getElementById("remove-group").onclick = function(){removeGroup();}
	}
	
	// not included on every page
	if(document.getElementById("create-group") !== null){
		document.getElementById("create-group").onclick = function(){openGroupDesc();}
	}
	
	// not included on every page
	if(document.getElementById("clear-groups") !== null){
		document.getElementById("clear-groups").onclick = function(){clearGroups();}
	}
}

/*
 	brings user to the simulation page
*/
function gotoSimulation(){
	// check if there are any appliances in the list
	if(selectedApplianceList.length >= minAppliances){
		document.body.innerHTML = "";
	}else{
		alert("Please add at least "+minAppliances+" appliances to run the simulation!");
	}
}

/*
	set up the initial builder page
*/
function homeBuilderInit(){
	setButtonActions();
	/*
		Load default appliances
	*/
	var appListElem = document.getElementById("available-appliances");
	var node;
	
	for(var i = 0; i<availableApplianceList.length; i++)
	{	
		node = document.createElement("li");
		node.innerHTML = availableApplianceList[i].type;
		node.setAttribute("appliance-id", i);
		node.setAttribute("id", "available-"+i);
		node.onclick = function(){openApplianceDesc(this);}
		
		appListElem.appendChild(node);
	}
	
	/*
		Load local storage
	*/
	
	if(typeof localStorage.selectedApplianceList !== undefined){
		selectedApplianceList = JSON.parse(localStorage.selectedApplianceList);
		groupList = JSON.parse(localStorage.groupList);
		
		// print the selected appliance list
		printSelectedAppliances();
		printGroupList();
	}
	
	/*
		Add dollar sign functionality to price inputs
	*/
	var priceInputs = document.getElementsByClassName("price");
	for(var i = 0; i<priceInputs.length; i++){
		priceInputs[i].onblur = function(){addDollarSign(this);}
		priceInputs[i].onfocus = function(){removeDollarSign(this);};
	}
}

/*
	initializes simulation page
*/
function initSimulator(){
	setButtonActions();

	/*
		Load local storage
	*/
	
	if(typeof localStorage.selectedApplianceList !== undefined && typeof localStorage.groupList !== undefined){
		selectedApplianceList = JSON.parse(localStorage.selectedApplianceList);
		groupList = JSON.parse(localStorage.groupList);
		
		// print the selected appliance list
		printSelectedAppliances();
		
		// print groups
		printGroupList();
	}else{
		alert("Error loading appliances from local storage!");
	}
}

/*
	counts the number of occurrences of a certain type of appliance in the selected appliance array
*/
function typeCount(type){
	var count = 0;
	for(var i = 0; i < selectedApplianceList.length; i++){
		if(selectedApplianceList[i].type == type){
			count++;
		}
	}
	
	return count;
}

function addDollarSign(elem){
	var str = elem.value;
	str = str.replace(/[^\d.-]/g, '');
	str += " $";
	elem.value = str;
}

function removeDollarSign(elem){
	var str = elem.value;
	str = str.replace(/[^\d.-]/g, '');
	elem.value = str;
}

function searchAppliances(term){
	var bestMatch = null;
	var bestDistance = null;
	var resultsList = document.getElementById("search-results");
	for(var i = 0; i<availableApplianceList.length; i++){
		var l = new Levenshtein(term, availableApplianceList[i].type);
		if(l.distance < bestDistance || bestDistance === null){
			bestDistance = l.distance;
			bestMatch = i;
		}
	}
	return bestMatch;
}
