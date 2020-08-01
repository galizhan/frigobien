var customTooltips = function(tooltip) {
								$(this._chart.canvas).css('cursor', 'pointer');

								var positionY = this._chart.canvas.offsetTop;
								var positionX = this._chart.canvas.offsetLeft;

								$('.chartjs-tooltip').css({
									opacity: 0,
								});

								if (!tooltip || !tooltip.opacity) {
									return;
								}

								if (tooltip.dataPoints.length > 0) {
									tooltip.dataPoints.forEach(function(dataPoint) {
										var content = [dataPoint.xLabel, dataPoint.yLabel].join(': ');
										var $tooltip = $('#tooltip-' + dataPoint.datasetIndex);

										$tooltip.html(content);
										$tooltip.css({
											opacity: 1,
											top: positionY + dataPoint.y + 'px',
											left: positionX + dataPoint.x + 'px',
										});
									});
								}
							};
							var color = Chart.helpers.color;
							var lineChartData = {
								labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
								datasets: [{
									label: 'Milyon Ton',
									backgroundColor: color(window.chartColors.frigobien2).alpha(0.2).rgbString(),
									borderColor: window.chartColors.frigobien2,
									pointBackgroundColor: window.chartColors.frigobien2,
									data: [
											2.10,2.57,2.00,2.46,2.50,2.78,2.60,2.68,2.89,3.13,2.48,2.57,2.93,3.03,
										],
								}
								]
							};

							window.onload = function() {
								var chartEl = document.getElementById('chart1');
								new Chart(chartEl, {
									type: 'line',
									data: lineChartData,
									options: {
										title: {
											display: true,
											text: 'Ülkemizde Yıllara Göre Elma Üretimi'
										},
										tooltips: {
											enabled: true,
											mode: 'index',
											intersect: false,
											custom: customTooltips
										}
									}
								});
							};