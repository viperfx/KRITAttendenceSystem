var app = angular.module('KRIT', [ 'ngMessages', 'ui.router', 'ngMaterial',
		'datatables', 'datatables.bootstrap', 'datatables.buttons',
		'datatables.select', 'datatables.scroller', 'ngStorage', 'ngCookies',
		'ui.bootstrap' ]);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider,
		$mdDateLocaleProvider) {

	$mdDateLocaleProvider.formatDate = function(date) {
		return moment(date).format(dateFormat);


	var purpleMap = $mdThemingProvider.extendPalette('purple', {
		'300' : '#BA68C8',
		'500' : '#9C27B0',
		'700' : '#7B1FA2',
		'A200' : '#E040FB'
	});

	// Register the new color palette map with the name <code>neonRed</code>
	$mdThemingProvider.definePalette('purpleShed', purpleMap);

	$mdThemingProvider.theme('default').primaryPalette('purpleShed', {
		'default' : '300',
		'hue-1' : '500',
		'hue-2' : '700',
		'hue-3' : 'A200'
	}).accentPalette('blue', {
		'default' : '700',
		'hue-1' : '800',
		'hue-2' : '900',
		'hue-3' : 'A700'
	});

	$urlRouterProvider.otherwise("products/productDetails");

	$stateProvider.state('Products', {
		url : '/products',
		abstract : true,
		templateUrl : 'pages/Products.html'

	}).state('Products.ProductDetails', {
		url : '/productDetails',
		views : {
			'productDashboard' : {
				templateUrl : 'pages/view/ProductDetails.html'
			}
		}
	}).state('Products.AddProduct', {
		url : '/addProduct',
		views : {
			'productDashboard' : {
				templateUrl : 'pages/view/AddProduct.html'
			}
		}
	}).state('Products.AddProductCategory', {
		url : '/addProductCategory',
		views : {
			'productDashboard' : {
				templateUrl : 'pages/view/AddProductCategory.html'
			}
		}
	});

});


