'use strict';
/**
 * @ngdoc function
 * @name KRIT.controller:MainCtrl
 * @description #MainCtrl Controller of the KRIT
 */
angular.module('KRIT').controller('MainCtrl',
		function($scope, $state, $filter, sharedProperties, ProductsService) {

			$scope.labels = labels;
			var months = Months;
			var weeks = Weeks;

			ProductsService.leadStatuses(null, function(data, status) {
				if (status != 200) {
					$scope.error = true;
					if (data != undefined) {
						$scope.errorMsg = data.error;
						$scope.status = status;
					}
					$scope.status = 404;
					$scope.errorMsg = "Server Down";
				}
				$scope.error = false;
				$scope.leadCounts = new LeadStatusCounts();
				$scope.leadCounts.set(data);
				$scope.leadStatuses = $scope.leadCounts.ToJSONLeadStatuses();

				/*
				 * Morris.Donut({ element : 'donut-example', data : [ { label :
				 * "Unattended Leads", value :
				 * $scope.leadStatuses.UN_ATTENDED_LEADS }, { label : "Attended
				 * Leads", value : $scope.leadStatuses.ATTENDED_LEADS }, { label :
				 * "Followup Leads", value : $scope.leadStatuses.FOLLOWUP_LEADS }, {
				 * label : "Potential Leads", value :
				 * $scope.leadStatuses.POTENTIAL_LEADS }, { label : "Lost
				 * Leads", value : $scope.leadStatuses.LOST_LEADS }, { label :
				 * "Closed Leads", value : $scope.leadStatuses.CLOSED_LEADS } ]
				 * });
				 */});

			ProductsService.lineChartData(null, function(data, status) {
				if (status != 200) {
					$scope.error = true;
					if (data != undefined) {
						$scope.errorMsg = data.error;
						$scope.status = status;
					}
					$scope.status = 404;
					$scope.errorMsg = "Server Down";
				}
				$scope.error = false;
				$scope.lChartData = new LineChartData();
				$scope.lChartData.set(data);
				$scope.monthlyData = $scope.lChartData.ToJSONLineData();

				Morris.Line({
					element : 'line-example',
					data : [ {
						M : '2015-01',
						a : $scope.monthlyData.JAN
					}, {
						M : '2015-02',
						a : $scope.monthlyData.FEB
					}, {
						M : '2015-03',
						a : $scope.monthlyData.MAR
					}, {
						M : '2015-04',
						a : $scope.monthlyData.APR
					}, {
						M : '2015-05',
						a : $scope.monthlyData.MAY
					}, {
						M : '2015-06',
						a : $scope.monthlyData.JUN
					}, {
						M : '2015-07',
						a : $scope.monthlyData.JUL
					}, {
						M : '2015-08',
						a : $scope.monthlyData.AUG
					}, {
						M : '2015-09',
						a : $scope.monthlyData.SEP
					}, {
						M : '2015-10',
						a : $scope.monthlyData.OCT
					}, {
						M : '2015-11',
						a : $scope.monthlyData.NOV
					}, {
						M : '2015-12',
						a : $scope.monthlyData.DEC
					} ],
					xkey : 'M',
					ykeys : [ 'a' ],
					labels : [ 'Leads' ],
					xLabelAngle : 70,
					lineColors : [ '#337ab7', '#f0ad4e' , '#5cb85c' ],
					xLabelFormat : function(x) {
						return months[x.getMonth()];
					},
					dateFormat : function(x) {
						var month = months[new Date(x).getMonth()];
						return month;
					}

				});

			});

			ProductsService.areaChartData(null, function(data, status) {
				if (status != 200) {
					$scope.error = true;
					if (data != undefined) {
						$scope.errorMsg = data.error;
						$scope.status = status;
					}
					$scope.status = 404;
					$scope.errorMsg = "Server Down";
				}
				$scope.error = false;
				$scope.aChartData = new AreaChartData();
				$scope.aChartData.set(data);
				$scope.weeklyData = $scope.aChartData.ToJSONAreaData();
				var currentTime = new Date();
				var year = currentTime.getFullYear();
				var week = moment().format('W');
				// var xKey = $filter('date')(currentTime, 'ww');;

				Morris.Area({
					element : 'area-example',
					data : [ {
						W : year + ' W' + (week - 7),
						A : $scope.weeklyData.WEEK1A,
						C : $scope.weeklyData.WEEK1C
					}, {
						W : year + ' W' + (week - 6),
						A : $scope.weeklyData.WEEK2A,
						C : $scope.weeklyData.WEEK2C
					}, {
						W : year + ' W' + (week - 5),
						A : $scope.weeklyData.WEEK3A,
						C : $scope.weeklyData.WEEK3C
					}, {
						W : year + ' W' + (week - 4),
						A : $scope.weeklyData.WEEK4A,
						C : $scope.weeklyData.WEEK4C
					}, {
						W : year + ' W' + (week - 3),
						A : $scope.weeklyData.WEEK5A,
						C : $scope.weeklyData.WEEK5C
					}, {
						W : year + ' W' + (week - 2),
						A : $scope.weeklyData.WEEK6A,
						C : $scope.weeklyData.WEEK6C
					}, {
						W : year + ' W' + (week - 1),
						A : $scope.weeklyData.WEEK7A,
						C : $scope.weeklyData.WEEK7C
					}, {
						W : year + ' W' + (week),
						A : $scope.weeklyData.WEEK8A,
						C : $scope.weeklyData.WEEK8C
					} ],
					xkey : 'W',
					ykeys : [ 'A', 'C' ],
					labels : [ 'New Leads', 'Closed Leads' ],
					xLabelAngle : 70,
					lineColors : [ '#337ab7', '#f0ad4e' , '#5cb85c' ],
				});
			});

		/*	google.charts.load("current", {packages:["corechart"]});
		      google.charts.setOnLoadCallback(drawChart);
		      function drawChart() {
		        var data = google.visualization.arrayToDataTable(DonutData);

		        var options = {
		          title: 'My Daily Activities',
		          pieHole: 0.4,
		        };

		        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
		        chart.draw(data, options);
		      }*/
		});

angular.module('KRIT').service('sharedProperties', function() {

	var isUpdate = null;
	var objectDataService = null;
	var allDataService = null;
	var userId = null;

	return {

		getObjectDataService : function() {
			return objectDataService;
		},
		setObjectDataService : function(objectData) {
			objectDataService = null;
			objectDataService = objectData;
		},
		getAllDataService : function() {
			return allDataService;
		},
		setAllDataService : function(allData) {
			allDataService = null;
			allDataService = allData;
		},

		getProcessDetails : function() {
			return isUpdate;
		},
		setProcessDetails : function(isUpdt) {
			isUpdate = null;
			isUpdate = isUpdt;
		},

		getUserId : function() {
			return userId;
		},

		setUserId : function(user) {
			userId = null;
			userId = user;
		}
	};
});