
var chart;
var categories = [];
var namesNodes = [];
var arraySeries = [];
var dataSeries = [];
var serieshc = [];
var numbercolor = -1;
var color0 = 'rgba(220,105,81,1)';
var color1 = 'rgba(244, 148, 87, 1)';
var color2 = 'rgba(250, 186, 84, 1)';
var color3 = 'rgba(227, 225, 214, 1)';
var color4 = 'rgba(181, 153, 125, 1)';

//Width of the lines
var linew = 3;

(function() { globe.onDefine('window.jQuery && $(".article-graphic.FeverLine").length', function() {
	
	var masterSelector = '.article-graphic.FeverLine';
	var master = $(masterSelector);
	for (var i in data) {
		categories.push(data[i].Name)
	}
	
	$(function () {
	    $('#container').highcharts({
	    	chart: {
	        renderTo: 'container',
	        margin: 20,
	    		style: {
	    			fontFamily: 'Helvetica, Arial, sans-serif',
	    		}, 
	    	},
	    	credits: {
	    		enabled: false
	    	},
	        title: {
	            text: '',
	            x: -20 //center
	        },
	        xAxis: {
	            categories: categories,
	            tickWidth: 0,
	            labels:{
	            	maxStaggerLines:1,
	            	overflow: "justify",
	            	step:steps
	            }
	        },
	        plotOptions: {

         		series: {
            		lineWidth: linew,
	                marker: {
	                	fillColor:'rgba(0,0,0,0)',
	                    symbol:'circle',
	                    states: {
	                        hover: {
	                           fillColor:'{series.color}',
	                           radius:4
	                        }
	                    }
	                },
	                states: {
	                    hover: {
	                        lineWidthPlus: 1,
	                        halo:{
	                           	size:0
	                           },
	                        marker: {
	                        	fillColor:'{series.color}'
	                        }
	                    }
	                }
            	}
        	},
	        yAxis: {
	            title: {
	                text: ''
	            },
	            floor:0,
	            min : 0,
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }],
	            lineColor: '#D1D2D4',
	            gridLineDashStyle: 'Solid',
	            labels : {
	            	align: 'left',
	            	x: 0,
	            	y: -3
	            },
	        },
	        tooltip: {
	        	useHTML:true,
	        	headerFormat: '<small class="datett">{point.key}</small><table>',
	        	pointFormat: '<tr><td class="seriesname">{series.name} </td></tr>'+
	        	'<tr><td class="valuett"><b>'+prefix+'{point.y}'+suffix+'</b></td></tr>',
            	footerFormat: '</table>',
            	valueDecimals: 2,
            	backgroundColor: 'rgba(255,255,255,1)',
            	borderColor:'#EEE'
	        },
	        legend: {
	            enabled: false
	        },
	        series: [
	        	
	        	// {
		        //     name: 'Amherst College',
		        //     data: [2.94, 4.00, 7.80, 7.82, 9.33, 5.04],
		        //     color: 'rgba(220,105,81,1)',
		        // }, {
		        //    name: 'Amherst College',
		        //     data: [0, 0.29, 0.91, 1.18, 0.31, 1.50],
		        //     symbol: 'circle',
		        //     color: 'rgba(244, 148, 87, 1)'
		        // }, {
		        //     name: 'Bentley University',
		        //     data: [1.06, 0.36, 0.53, 0.72, 0.18, 0.35],
		        //     color: 'rgba(250, 186, 84, 1)',
		        // }, {
		        //     name: 'Berklee College of Music',
		        //     data: [0, 0.24, 0, 0.23, 0.22, 0.90],
		        //     color: 'rgba(227, 225, 214, 1)'
		        // }
		    ]
	    });

		for (var i in data[0]) {
			namesNodes.push(i);
		}		

		for (var i in namesNodes) {
			if (i>0) {
				numbercolor++;
				console.log(numbercolor)
				var name = namesNodes[i].split("_");
				var finalName = name.join(" ");
				dataSeries.push(finalName);
				serieshc = [];
				for (var j in data) {
					serieshc.push(data[j][namesNodes[i]])
				}
				chart = $('#container').highcharts();
				chart.addSeries({
				name: finalName,
				data : serieshc,
				color : window["color"+numbercolor]
			});
			}
		}
		if (dataSeries.length > 1) {
			for (var i in dataSeries) {
				$("#key").append('<div class="keyel"><div class="keysq color'+i+'"></div><div class="keytxt">'+dataSeries[i]+'</div></div>')
			}
		}


	});
}); }());
