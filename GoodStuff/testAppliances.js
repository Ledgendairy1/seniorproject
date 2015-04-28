/*// test appliances
var groups = [
	new Group({
	name: 'Upstairs', 
	energyLimit:3000
	}),
	new Group({
	name: 'Downstairs', 
	energyLimit:4000
	})
];
var homeSchedule = { // when the user is home... if their not home then their asleep
		MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
		TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
		SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
};
var selectedAppliances = [
	new Appliance({
		name: 'Dishwasher', 
		type: 'Dishwasher', 
		energyUsage:1200, 
		cycleDuration: 60*1.2, 
		runSchedule: {
			MONDAY:[{from:60*0, to:60*15.5},{from:60*19.5, to:60*21.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 0, 
		runPriority: 5, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Oven', 
		type: 'Oven', 
		energyUsage:2900, 
		cycleDuration: 60*1.2, 
		runSchedule: {
			MONDAY:[{from:60*0.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 0, 
		runPriority: 10, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Shower', 
		type: 'Shower', 
		energyUsage:101, 
		cycleDuration: 60*.5, 
		runSchedule: {
			MONDAY:[{from:60*.25, to:60*2.5}],
			TUESDAY:[{from:60*8, to:60*8.5}],
			WEDNESDAY:[{from:60*8, to:60*8.5}],
			THURSDAY:[{from:60*8, to:60*8.5}],
			FRIDAY:[{from:60*8, to:60*8.5}],
			SATURDAY:[{from:60*12, to:60*12.5}],
			SUNDAY:[{from:60*12, to:60*12.5}]
		}, 
		group: 0, 
		runPriority: 2, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Upstairs Lights', 
		type: 'Lights', 
		energyUsage:1200, 
		cycleDuration: Infinity, 
		runSchedule: homeSchedule, 
		group: 0, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
];*/
// test appliances
var groups = [
	new Group({
	name: 'Kitchen', 
	energyLimit:3000
	}),
	new Group({
	name: 'Living Room', 
	energyLimit:4000
	}),
	new Group({
	name: 'Bedroom', 
	energyLimit:3000
	}),
	new Group({
	name: 'Bathroom', 
	energyLimit:3000
	}),
	new Group({
	name: 'Basement', 
	energyLimit:3000
	})
];
var homeSchedule = { // when the user is home... if their not home then their asleep
		MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
		TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
		SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
		SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
};
var selectedAppliances = [
	new Appliance({
		name: 'Dishwasher', 
		type: 'Dishwasher', 
		energyUsage: 1200,
		cycleDuration: 60*1.2, 
		runSchedule: {
			MONDAY:[{from:60*0, to:60*15.5},{from:60*19.5, to:60*21.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 0, 
		runPriority: 5, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Oven', 
		type: 'Oven', 
		energyUsage:2900, 
		cycleDuration: 60*1.2, 
		runSchedule: {
			MONDAY:[{from:60*0.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 0, 
		runPriority: 10, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Shower', 
		type: 'Shower', 
		energyUsage:101, 
		cycleDuration: 60*.5, 
		runSchedule: {
			MONDAY:[{from:60*.25, to:60*2.5}],
			TUESDAY:[{from:60*8, to:60*8.5}],
			WEDNESDAY:[{from:60*8, to:60*8.5}],
			THURSDAY:[{from:60*8, to:60*8.5}],
			FRIDAY:[{from:60*8, to:60*8.5}],
			SATURDAY:[{from:60*12, to:60*12.5}],
			SUNDAY:[{from:60*12, to:60*12.5}]
		}, 
		group: 3, 
		runPriority: 2, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Bedroom Lights', 
		type: 'Lights', 
		energyUsage: 60, 
		cycleDuration: Infinity, 
		runSchedule: homeSchedule, 
		group: 2, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Kitchen Lights', 
		type: 'Lights', 
		energyUsage: 60, 
		cycleDuration: Infinity, 
		runSchedule: homeSchedule, //not sure what each room's light schedule should be..? or these people just leave them when home 
		group: 0, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Livingroom Lights', 
		type: 'Lights', 
		energyUsage: 60, 
		cycleDuration: Infinity, 
		runSchedule: homeSchedule, 
		group: 1, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Bathroom Lights', 
		type: 'Lights', 
		energyUsage: 60, 
		cycleDuration: Infinity, 
		runSchedule: homeSchedule,
		group: 3, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Basement Lights', 
		type: 'Lights', 
		energyUsage: 60, 
		cycleDuration: Infinity, 
		runSchedule: homeSchedule,
		group: 4, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Washing Machine', 
		type: 'Washing Machine', //unsure if types are correct
		energyUsage:1275, 
		cycleDuration: 60, //hour?
		runSchedule: {
			MONDAY:[],
			TUESDAY:[],
			WEDNESDAY:[],
			THURSDAY:[],
			FRIDAY:[],
			SATURDAY:[{from:60*19, to:60*21}], //no room for change?
			SUNDAY:[]
		}, 
		group: 4, 
		runPriority: 2, //priority
		cyclesPerDay: 2
	}),
	new Appliance({
		name: 'Kitchen Refrigerator', 
		type: 'Refrigerator', //unsure if types are correct
		energyUsage:615, 
		cycleDuration: Infinity, //how to put ALWAYS running
		runSchedule: {
			MONDAY:[{from: 0, to: 24*60}],
			TUESDAY:[{from: 0, to: 24*60}],
			WEDNESDAY:[{from: 0, to: 24*60}],
			THURSDAY:[{from: 0, to: 24*60}],
			FRIDAY:[{from: 0, to: 24*60}],
			SATURDAY:[{from: 0, to: 24*60}],
			SUNDAY: [{from: 0, to: 24*60}]
		}, 
		group: 0, 
		runPriority: Infinity,
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Basement Refrigerator', 
		type: 'Refrigerator', //unsure if types are correct
		energyUsage:615, 
		cycleDuration: Infinity, //how to put ALWAYS running
		runSchedule: {
			MONDAY:[],
			TUESDAY:[],
			WEDNESDAY:[],
			THURSDAY:[],
			FRIDAY:[],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 4, 
		runPriority: 1, //priority
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Microwave', 
		type: 'Microwave', //unsure if types are correct
		energyUsage:1050, 
		cycleDuration: 60*.083, //5 mins
		runSchedule: {
			MONDAY:[],
			TUESDAY:[],
			WEDNESDAY:[],
			THURSDAY:[],
			FRIDAY:[],
			SATURDAY:[{from:60*12, to:60*13}], //noon on weekends?
			SUNDAY:[{from:60*12, to:60*13}]
		}, 
		group: 0, 
		runPriority: 2, //priority
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Livingroom TV', 
		type: 'Television', //unsure if types are correct
		energyUsage:140, 
		cycleDuration: 60*2, 
		runSchedule: {
			MONDAY:[{from:60*18, to:60*20}], //6-8 weekdays?
			TUESDAY:[{from:60*18, to:60*20}],
			WEDNESDAY:[{from:60*18, to:60*20}], 
			THURSDAY:[{from:60*18, to:60*20}],
			FRIDAY:[],
			SATURDAY:[], 
			SUNDAY:[]
		}, 
		group: 1, 
		runPriority: Infinity,
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Clothes Dryer', 
		type: 'Dryer', //unsure if types are correct
		energyUsage:3600, 
		cycleDuration: 60, //hour?
		runSchedule: {
			MONDAY:[], 
			TUESDAY:[],
			WEDNESDAY:[], 
			THURSDAY:[],
			FRIDAY:[],
			SATURDAY:[{from:60*20, to:60*22}], //after washer
			SUNDAY:[]
		}, 
		group: 4, 
		runPriority: 1, //priority
		cyclesPerDay: 2
	}),
	new Appliance({
		name: 'Desktop', 
		type: 'Computer', //unsure if types are correct
		energyUsage:200, 
		cycleDuration: 60, //hour?
		runSchedule: {
			MONDAY:[{from:60*18, to:60*20}], 
			TUESDAY:[{from:60*18, to:60*20}],
			WEDNESDAY:[{from:60*18, to:60*20}], 
			THURSDAY:[{from:60*18, to:60*20}],
			FRIDAY:[{from:60*18, to:60*20}],
			SATURDAY:[], 
			SUNDAY:[]
		}, 
		group: 1, 
		runPriority: 1, //priority
		cyclesPerDay: 1
	})
];
