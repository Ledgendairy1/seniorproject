availableApplianceList = [
	{
		type: 'Light Bulb',
		name: 'Light Bulb',
		energyUsage: 60,
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
		cyclesPerDay: 5
	},
	{
		type: 'Refrigerator',
		energyUsage: 615,
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
		priority: 1,
		cyclesPerDay: 5
	},
	{
		type: 'Microwave',
		energyUsage: 1050,
		cycleDuration: 3,
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
		energyUsage: 140,
		cycleDuration: 300,
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
		cyclesPerDay: 6
	},
	{
		type: 'Ceiling fan',
		energyUsage: 75,
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
		priority: 3,
		cyclesPerDay: 4
	},
	{
		type: 'Clothes Dryer',
		energyUsage: 3600,
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
		cyclesPerDay: 3
	},
	{
		type: 'Desktop Computer',
		energyUsage: 200,
		cycleDuration: 300,
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
		cyclesPerDay: 5
	},
	{
		type: 'Dish Washer',
		energyUsage: 1450,
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
		priority: 2,
		cyclesPerDay: 3
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
		cyclesPerDay: 2
	},
	{
		type: 'Air Conditioner',
		energyUsage: 1080,
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
		cyclesPerDay: 1
	},
	{
		type: 'Iron',
		energyUsage: 1095,
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
		priority: 1,
		cyclesPerDay: 3
	},
	{
		type: 'Toaster',
		energyUsage: 1080,
		cycleDuration: 5,
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
		type: 'Vacuum Cleaner',
		energyUsage: 1010,
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
		cyclesPerDay: 1
	},
	{
		type: 'Washing Machine',
		energyUsage: 1275,
		cycleDuration: 37,
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
		cyclesPerDay: 3
	},
	{
		type: 'Coffee Machine',
		energyUsage: 1035,
		cycleDuration: 3,
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
		energyUsage: 530,
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
		priority: 1,
		cyclesPerDay: 1
	},
	{
		type: 'Central Air Conditioner',
		energyUsage: 3830,
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
		cyclesPerDay: 1
	}
]
