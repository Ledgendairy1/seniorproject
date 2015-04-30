function createGraph(data){
// Set the dimensions of the canvas / graph
			var margin = {top: 20, right: 20, bottom: 40, left: 40},
				width = $("#energy-graph-container").width() - margin.left - margin.right,
				height = 300 - margin.top - margin.bottom;

			var tip = d3.tip()
				.attr('class', 'd3-tip')
				.offset([-10, 0])
				.html(function(d) {
					var list = "<ul>";
					d.msg.forEach(function(dd){
						list += "<li>"+dd+"</li>";
					});
					return "<h4>Events  -   "+sim.shortenDay(d.timestamp.day)+" - "+d.timestamp.time+"</h4>"+list+"</ul>";
				})

			// Set the ranges
			var x = d3.scale.linear().range([0, width]);//d3.time.scale().range([0, width]);
			var y = d3.scale.linear().range([height, 0]);

			// Define the axes
			var xAxis = d3.svg.axis().scale(x)
				.orient("bottom").ticks(14).tickFormat(function(d){
					return data.events[d].timestamp.time;
				}).tickSize(height+20);
			
			var xAxis2 = d3.svg.axis().scale(x)
				.orient("bottom").ticks(14).tickFormat(function(d){
					return sim.shortenDay(data.events[d].timestamp.day);
				}).tickSize(height+10);

			var yAxis = d3.svg.axis().scale(y)
				.orient("left").ticks(5);
			
			var area = d3.svg.area()
			.x(function(d) { return x(d.time); })
			.y0(height+2)
			.y1(function(d) { return y(d.energy); });
			
			var	valueline = d3.svg.line()
				.x(function(d) { return x(d.time); })
				.y(function(d) { return y(d.energy); });

			// Adds the svg canvas
			var svg = d3.select("#energy-graph")
				.append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", 
						  "translate(" + margin.left + "," + margin.top + ")");
  
  			svg.call(tip);
  
			// Scale the range of the data
			x.domain(d3.extent(data.events, function(d) { return d.time; }));
			y.domain([0, d3.max(data.events, function(d) { return d.energy; })]);
			
			var xAxisMargin = 0;
			var yAxisMargin = 0;
			
			// Add the X Axis
			svg.append("g")
				.attr("class", "x-axis")
				.attr("transform", "translate(0,0)")
				.call(xAxis);
			// Add the X Axis
			svg.append("g")
				.attr("class", "x-axis")
				.attr("transform", "translate(0,0)")
				.call(xAxis2);

			// Add the Y Axis
			svg.append("g")
				.attr("class", "y-axis")
				.attr("transform", "translate(-"+yAxisMargin+",0)")
				.call(yAxis);
			
			// Add the valueline path.
			svg.append("g")
			.append("path")
				.datum(data.events)
				.attr("class", "area")
				.attr("d", area);
				
			// Add the valueline path.
			svg.append("g").append("path")	
				.attr("class", "line")
				.attr("d", valueline(data.events));
				
			svg.append("g").selectAll(".event").data(data.events.filter(function(d){
				return d.msg !== null ? true : false;
			}))
			.enter().append("circle")	
				.attr("class", "event")
				.attr("r", "4")
				.attr("cx", function(d){
					return x(d.time);
				})
				.attr("cy", function(d){
					return y(d.energy);
				})
				.on('mouseover', tip.show)
      			.on('mouseout', tip.hide);
      		
      		/*
      			Create daily trends modules
      			
      			dailyEventsList['MONDAY0'] = {
      					week: 0,
      					day: 'MONDAY',
      					msgs: "3:00pm added appliance dishwasher"
      			}
      		*/
      		
      		var eventsHierarchy = [];
      		for(var i = 0; i<data.events.length; i++){
      			var d = data.events[i];
      			var weekId = "WEEK "+d.timestamp.week;
      			
      			if(d.msg !== null){ // non empty messages only
      				if(typeof eventsHierarchy[weekId] === "undefined"){
      					eventsHierarchy[weekId] = [];
      					eventsHierarchy[weekId][d.timestamp.day] = [];
      					eventsHierarchy[weekId][d.timestamp.day][d.timestamp.time] = [];
      				}else{
      					if(typeof eventsHierarchy[weekId][d.timestamp.day] === "undefined"){
      						eventsHierarchy[weekId][d.timestamp.day] = [];
      					}
      					if(typeof eventsHierarchy[weekId][d.timestamp.day][d.timestamp.time] === "undefined"){
      						eventsHierarchy[weekId][d.timestamp.day][d.timestamp.time] = [];
      					}
      					eventsHierarchy[weekId][d.timestamp.day][d.timestamp.time] = eventsHierarchy[weekId][d.timestamp.day][d.timestamp.time].concat(d.msg);
      				}
      			}
      		}
      		var t = 0;
      		for(var i in eventsHierarchy){
      			var weekContainer = $("<div>", {class: "week-container"});
      			weekContainer.append($("<h3>", {text: i}));
				if(sim.weeklyEnergyArray.length != 0){
					weekContainer.append($("<h4>", {text: "Total energy: " + sim.weeklyEnergyArray[t].toFixed(3) + " kilowatts "+ " Cost: $" + (sim.weeklyEnergyArray[t]*.12).toFixed(2)}));
				}//weekContainer.append($("<h4>", {text: "Cost of energy this week: $" + sim.weeklyEnergyArray[t]*.12}));
				else{
					weekContainer.append($("<h4>", {text: "Total energy: " + sim.energyWeek.toFixed(3) + " kilowatts "+ " Cost: $" + (sim.energyWeek*.12).toFixed(2)}));
				}
				t++;
      			for(var j in  eventsHierarchy[i]){
      				var dayContainer = $("<ul>", {class: "day-container"});
      				dayContainer.append($("<h3>", {text: j}));
					dayContainer.append($("<h4>", {text: "Total energy: " + sim.dailyEnergyArray[i][j].toFixed(3) + " kilowatts " + " Cost: $" + (sim.dailyEnergyArray[i][j]*.12).toFixed(2)}));
					//dayContainer.append($("<h4>", {text: "Cost of energy today: $" + sim.dailyEnergyArray[i][j]*.12}));
      				for(var k in eventsHierarchy[i][j]){
      					var timeList = $("<ul>", {class: "time-list"});
      					timeList.append($("<li>").append($("<h3>", {text: k})));
						for(var l = 0; l<eventsHierarchy[i][j][k].length; l++){
							timeList.append($("<li>", {text: eventsHierarchy[i][j][k][l]}));
						}
						dayContainer.append(timeList);	
      				}
      				weekContainer.append(dayContainer);
      			}
      			$("#trend-events").append(weekContainer);
      		}
      		$("#trend-events h3").click(function(){
      			$(this).parent().children("ul").toggle();
      		});
}
createGraph();
