// test appliances
var groups = [
	new Group({
	name: 'Kitchen', 
	energyLimit:1750
	}),
	new Group({
	name: 'Living Room', 
	energyLimit:1500
	}),
	new Group({
	name: 'Laundry Room', 
	energyLimit:3600
	}),
	new Group({
	name: 'Bedroom', 
	energyLimit:1500
	}),
];
var homeSchedule = { // when the user is home... if their not home then their asleep
		MONDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}],
		TUESDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}],
		WEDNESDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
		THURSDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
		FRIDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
		SATURDAY:[{from:60*11, to:60*22}, {from:60*22, to:60*11, quiet: true}],
		SUNDAY:[{from:60*11, to:60*22}, {from:60*22, to:60*11, quiet: true}]
};
var selectedAppliances = [
	new Appliance({
		name: 'Dishwasher', 
		type: 'Dishwasher', 
		energyUsage: 1200,
		cycleDuration: 60*1.2, 
		runSchedule: {
			MONDAY:[{from:60*9, to:60*10.2},{from:60*15, to:60*18.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 0, 
		runPriority: 4, 
		cyclesPerDay: 2
	}),
	new Appliance({
		name: 'Water Heater', 
		type: 'Water Heater', 
		energyUsage: 3500,
		cycleDuration: 60*2,
		runSchedule: {
			MONDAY:[{from:60*6.5, to:60*8.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 2,
		runPriority: 4, 
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Oven', 
		type: 'Oven', 
		energyUsage:2900, 
		cycleDuration: 60*2,
		runSchedule: {
			MONDAY:[{from:60*14.5, to:60*19.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		}, 
		group: 0, 
		runPriority: 10, 
		cyclesPerDay: 2
	}),
	new Appliance({
		name: 'Kitchen Lights', 
		type: 'Lights', 
		energyUsage: 60*2, 
		cycleDuration: Infinity, 
		runSchedule: {
			MONDAY:[{from:60*8, to:60*10}, {from:60*14, to:60*19}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*22}, {from:60*22, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*22}, {from:60*22, to:60*11, quiet: true}]
		},
		group: 0, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Livingroom Lights', 
		type: 'Lights', 
		energyUsage: 60*4, 
		cycleDuration: Infinity, 
		runSchedule: {
			MONDAY:[{from:60*9, to:60*11}, {from:60*14, to:60*19}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*17, to:60*22}, {from:60*22, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*22}, {from:60*22, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*22}, {from:60*22, to:60*11, quiet: true}]
		}, 
		group: 1, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Bedroom Lights', 
		type: 'Lights', 
		energyUsage: 60*2, 
		cycleDuration: Infinity, 
		runSchedule: {
			MONDAY:[{from:60*8, to:60*8.65},{from:60*19.5, to:60*22.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[],
			SUNDAY:[]
		},
		group: 3, 
		runPriority: Infinity, 
		cyclesPerDay: Infinity
	}),
	new Appliance({
		name: 'Bedroom TV', 
		type: 'Television', //unsure if types are correct
		energyUsage:120, 
		cycleDuration: 60*1, 
		runSchedule: {
			MONDAY:[{from:60*20.5, to:60*22.5}],
			TUESDAY:[{from:60*8, to:60*20}],
			WEDNESDAY:[{from:60*8, to:60*20}], 
			THURSDAY:[{from:60*8, to:60*20}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}], 
			SUNDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}]
		}, 
		group: 1, 
		runPriority: Infinity,
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Washing Machine', 
		type: 'Washing Machine', //unsure if types are correct
		energyUsage:1275, 
		cycleDuration: 60*1, //hour?
		runSchedule: {
			MONDAY:[{from:60*13.5, to:60*17.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SUNDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}]
		}, 
		group: 2, 
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
		name: 'Microwave', 
		type: 'Microwave', //unsure if types are correct
		energyUsage:1050, 
		cycleDuration: 60*.083, //5 mins
		runSchedule: {
			MONDAY:[{from:60*15.5, to:60*20.5}],
			TUESDAY:[{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*19.5, to:60*21.5}],
			SATURDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SUNDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}]
		}, 
		group: 0, 
		runPriority: 3, //priority
		cyclesPerDay: 1
	}),
	new Appliance({
		name: 'Livingroom TV', 
		type: 'Television', //unsure if types are correct
		energyUsage:140, 
		cycleDuration: 60*1, 
		runSchedule: {
			MONDAY:[{from:60*16, to:60*19}], //6-8 weekdays?
			TUESDAY:[{from:60*8, to:60*20}],
			WEDNESDAY:[{from:60*8, to:60*20}], 
			THURSDAY:[{from:60*8, to:60*20}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}], 
			SUNDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}]
		}, 
		group: 1, 
		runPriority: Infinity,
		cyclesPerDay: 3
	}),
	new Appliance({
		name: 'Clothes Dryer', 
		type: 'Dryer', //unsure if types are correct
		energyUsage:3600, 
		cycleDuration: 60*1, //hour?
		runSchedule: {
			MONDAY:[{from:60*14.5, to:60*18.5}],
			TUESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			WEDNESDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			THURSDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			FRIDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SATURDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}],
			SUNDAY:[{from:60*12.5, to:60*15.5},{from:60*19.5, to:60*21.5}]
		}, 
		group: 2, 
		runPriority: 1, //priority
		cyclesPerDay: 2
	})
];
