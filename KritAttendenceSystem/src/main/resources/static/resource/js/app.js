'use strict';
/**
 * @ngdoc overview
 * @name KRIT
 * @description # KRIT
 * 
 * Main module of the application.
 */

/* 'ui.bootstrap', 'ngStorage', */
var app = angular.module('KRIT', [ 'oc.lazyLoad', 'ui.router', 'ui.bootstrap',
		'angular-loading-bar', 'ngMessages', 'ngMaterial', 'datatables',
		'datatables.bootstrap', 'ngStorage', 'datatables.buttons',
		'datatables.select', 'datatables.scroller', 'ngCookies',
		'ui.bootstrap.datetimepicker'

]);
app
		.config([
				'$stateProvider',
				'$urlRouterProvider',
				'$ocLazyLoadProvider',
				function($stateProvider, $urlRouterProvider,
						$ocLazyLoadProvider, $mdThemingProvider,
						$mdDateLocaleProvider) {

					$ocLazyLoadProvider.config({
						debug : false,
						events : true,
					});

					$urlRouterProvider.otherwise('/dashboard/home');
					/*
					 * $httpProvider.defaults.headers.common['X-Requested-With'] =
					 * 'XMLHttpRequest';
					 */
					$stateProvider
							.state(
									'dashboard',
									{
										url : '/dashboard',
										templateUrl : 'pages/views/dashboard/main.html',
										resolve : {
											loadMyDirectives : function(
													$ocLazyLoad) {
												return

												

																								

												

																																				

												

																								

												

														$ocLazyLoad
																.load({
																	name : 'KRIT',
																	files : [
																			'resource/js/directives/header/header.js',
																			'resource/js/directives/header/header-notification/header-notification.js',
																			'resource/js/directives/sidebar/sidebar.js',
																			'resource/js/directives/sidebar/sidebar-search/sidebar-search.js',
																			'resource/js/bp.js' ]
																}),
														$ocLazyLoad
																.load({
																	name : 'toggle-switch',
																	files : [
																			"resource/js/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
																			"resource/js/bower_components/angular-toggle-switch/angular-toggle-switch.css" ]
																}),
														$ocLazyLoad
																.load({
																	name : 'ngAnimate',
																	files : [ 'resource/js/bower_components/angular-animate/angular-animate.js' ]
																})
												$ocLazyLoad
														.load({
															name : 'ngCookies',
															files : [ 'resource/js/bower_components/angular-cookies/angular-cookies.js' ]
														})
												$ocLazyLoad
														.load({
															name : 'ngResource',
															files : [ 'resource/js/bower_components/angular-resource/angular-resource.js' ]
														})
												$ocLazyLoad
														.load({
															name : 'ngSanitize',
															files : [ 'resource/js/bower_components/angular-sanitize/angular-sanitize.js' ]
														})
												$ocLazyLoad
														.load({
															name : 'ngTouch',
															files : [ 'resource/js/bower_components/angular-touch/angular-touch.js' ]
														})
											}
										}
									})
							.state(
									'dashboard.home',
									{
										url : '/home',
										controller : 'MainCtrl',
										templateUrl : 'pages/views/dashboard/home.html',
										resolve : {
											loadMyFiles : function($ocLazyLoad) {
												return $ocLazyLoad
														.load({
															name : 'KRIT',
															files : [
																	'resource/js/controller/main.js',
																	'resource/js/directives/timeline/timeline.js',
																	'resource/js/directives/notifications/notifications.js',
																	'resource/js/directives/chat/chat.js',
																	'resource/js/directives/dashboard/stats/stats.js' ]
														})
											}
										}
									})
							.state('dashboard.form', {
								templateUrl : 'pages/views/form.html',
								url : '/form'
							})
							.state('ssoLogin', {
								templateUrl : 'pages/view/login/SSOLogin.html',
								url : '/ssoLogin'
							})
							.state('login', {
								templateUrl : 'pages/views/pages/login.html',
								url : '/login'
							})
							.state(
									'dashboard.chart',
									{
										templateUrl : 'pages/views/chart.html',
										url : '/chart',
										controller : 'ChartCtrl',
										resolve : {
											loadMyFile : function($ocLazyLoad) {
												return

												

																								

												

																																				

												

																								

												

												$ocLazyLoad
														.load({
															name : 'Chart.js',
															files : [
																	'resource/js/bower_components/angular-chart.js/dist/angular-chart.min.js',
																	'resource/js/bower_components/angular-chart.js/dist/angular-chart.css' ]
														})/*
															 * , $ocLazyLoad
															 * .load({ name :
															 * 'chartController.js',
															 * files : [
															 * 'resource/js/controller/chartController.js' ] })
															 */
											}
										}
									})
							.state('dashboard.table', {
								templateUrl : 'pages/views/table.html',
								url : '/table'
							})
							.state(
									'dashboard.panels-wells',
									{
										templateUrl : 'pages/views/ui-elements/panels-wells.html',
										url : '/panels-wells'
									})
							.state(
									'dashboard.buttons',
									{
										templateUrl : 'pages/views/ui-elements/buttons.html',
										url : '/buttons'
									})
							.state(
									'dashboard.notifications',
									{
										templateUrl : 'pages/views/ui-elements/notifications.html',
										url : '/notifications'
									})
							.state(
									'dashboard.typography',
									{
										templateUrl : 'pages/views/ui-elements/typography.html',
										url : '/typography'
									})
							.state(
									'dashboard.icons',
									{
										templateUrl : 'pages/views/ui-elements/icons.html',
										url : '/icons'
									})
							.state(
									'dashboard.grid',
									{
										templateUrl : 'pages/views/ui-elements/grid.html',
										url : '/grid'
									})

							.state('dashboard.Products', {
								templateUrl : 'pages/Products.html',
								absolute : true,
								url : '/products'
							})
							.state('SSOHome', {
								templateUrl : 'pages/view/SSOHome.html',
								absolute : true,
								url : '/ssoHome'
							})
							.state('dashboard.ProductDetails', {
								templateUrl : 'pages/view/ProductDetails.html',
								absolute : true,
								url : '/productdetails'
							})
							.state('dashboard.AddProduct', {
								templateUrl : 'pages/view/AddProduct.html',
								absolute : true,
								url : '/addProduct'
							})
							.state(
									'dashboard.AddProductCategory',
									{
										templateUrl : 'pages/component/AddProductCategory.html',
										absolute : true,
										url : '/addProductCategory'
									})
							.state(
									'dashboard.ProductCategories',
									{
										templateUrl : 'pages/view/ProductCategories.html',
										absolute : true,
										url : '/productCategories'
									})

							.state(
									'dashboard.Contacts',
									{
										templateUrl : 'pages/view/contact/cardList.html',
										absolute : true,
										url : '/contacts'
									})
							.state(
									'dashboard.EditContacts',
									{
										templateUrl : 'pages/view/contact/EditContact.html',
										absolute : true,
										url : '/editContacts'
									})
							.state(
									'dashboard.EnquiryForm',
									{
										templateUrl : 'pages/view/lead_management/EnquiryForm.html',
										absolute : true,
										url : '/enquiryForm'
									})
							.state(
									'dashboard.LeadManagement',
									{
										templateUrl : 'pages/view/lead_management/LeadManagementDetails.html',
										absolute : true,
										url : '/leadManagement'
									})
							.state(
									'dashboard.LeadDetailsForm',
									{
										templateUrl : 'pages/view/lead_management/leadDetailsForm.html',
										absolute : true,
										url : '/leadDetailsForm'
									})
							.state(
									'dashboard.UserList',
									{
										templateUrl : 'pages/view/user_management/UserList.html',
										absolute : true,
										url : '/userList'
									})
							.state(
									'dashboard.UserDetailsForm',
									{
										templateUrl : 'pages/view/user_management/UserDetailsForm.html',
										absolute : true,
										url : '/userDetailsForm'
									})
							.state(
									'dashboard.courseScheduleDetails',
									{
										templateUrl : 'pages/view/course_schedule/courseSchedule.html',
										absolute : true,
										url : '/courseScheduleDetails'
									})
							.state(
									'dashboard.gradesDetails',
									{
										templateUrl : 'pages/view/grades/gradesDetails.html',
										absolute : true,
										url : '/gradesDetails'
									})
							.state(
									'dashboard.studentAttendanceDetails',
									{
										templateUrl : 'pages/view/student_attendance/studentAttendanceDetails.html',
										absolute : true,
										url : '/studentAttendanceDetails'
									})

				} ]);

app.run.$inject = [ '$rootScope', '$http', '$location', '$cookieStore' ];

app.run(function($rootScope, $http, $location, $cookieStore) {

	$rootScope.globals = $cookieStore.get('globals') || {};

	if ($rootScope.globals.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic'
				+ $rootScope.globals.currentUser.authdata
	}

	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		var restrictedPage = $.inArray($location.path(), [ 'login' ]) === -1;
		var loggedIn = $rootScope.globals.currentUser;
		if (restrictedPage && !loggedIn) {
			$location.path('login');
		}
	});
});
