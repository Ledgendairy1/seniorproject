availableApplianceList = [
	{
		type: 'Light Bulb',
		name: 'Light Bulb',
		energyUsage: 50,
		cycleDuration: null,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: null
	},
	{
		type: 'Refrigerator',
		energyUsage: 180,
		cycleDuration: 1440,
		runSchedule: null,
		priority: 5,
		cyclesPerDay: 1
	},
	{
		type: 'Microwave',
		energyUsage: 1100,
		cycleDuration: 4,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 3,
		cyclesPerDay: 7
	},
	{
		type: 'Television',
		energyUsage: 75,
		cycleDuration: 30,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 5
	},
	{
		type: 'Ceiling fan',
		energyUsage: 75,
		cycleDuration: 30,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 3,
		cyclesPerDay: 4
	},
	{
		type: 'Clothes Dryer',
		energyUsage: 3200,
		cycleDuration: 60,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 1
	},
	{
		type: 'Desktop Computer',
		energyUsage: 150,
		cycleDuration: 45,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 5
	},
	{
		type: 'Dish Washer',
		energyUsage: 1800,
		cycleDuration: 60,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 1
	},
	{
		type: 'Electric Mower',
		energyUsage: 1500,
		cycleDuration: 60,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 3,
		cyclesPerDay: 1
	},
	{
		type: 'Blow Dryer',
		energyUsage: 1315,
		cycleDuration: 15,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 3,
		cyclesPerDay: 1
	},
	{
		type: 'Air Conditioner',
		energyUsage: 1000,
		cycleDuration: 180,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 1
	},
	{
		type: 'Iron',
		energyUsage: 1095,
		cycleDuration: 15,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 1,
		cyclesPerDay: 1
	},
	{
		type: 'Oven',
		energyUsage: 2540,
		cycleDuration: 60,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 5,
		cyclesPerDay: 1
	},
	{
		type: 'Toaster',
		energyUsage: 1080,
		cycleDuration: 6,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 3,
		cyclesPerDay: 2
	},
	{
		type: 'Vacuum Cleaner',
		energyUsage: 1400,
		cycleDuration: 10,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 3,
		cyclesPerDay: 1
	},
	{
		type: 'Washing Machine',
		energyUsage: 500,
		cycleDuration: 30,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 1,
		cyclesPerDay: 1
	},
	{
		type: 'Coffee Machine',
		energyUsage: 800,
		cycleDuration: 10,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 1
	},
	{
		type: 'Water Heater',
		energyUsage: 4000,
		cycleDuration: 180,
		runSchedule: {
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 1,
		cyclesPerDay: 1
	},
	{
		type: 'Portable Heater',
		energyUsage: 1560,
		cycleDuration: null,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 2
	},
	{
		type: 'Electric Furnace',
		energyUsage: 11830,
		cycleDuration: 120,
		runSchedule: 
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 1,
		cyclesPerDay: 1
	},
	{
		type: 'Central Air Conditioner',
		energyUsage: 3830,
		cycleDuration: 180,
		runSchedule:
		{
			MONDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: false}],
			TUESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			WEDNESDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			THURSDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			FRIDAY:[{from:60*8, to:60*10}, {from:60*18, to:60*21}, {from:60*21, to:60*8, quiet: true}],
			SATURDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}],
			SUNDAY:[{from:60*11, to:60*21}, {from:60*21, to:60*11, quiet: true}]
		},
		priority: 2,
		cyclesPerDay: 1
	}
]
