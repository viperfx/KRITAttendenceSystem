app.controller('logoutCtrl', function(
	$scope,
	$state,
	$sessionStorage,
	AuthenticationService) {

	$scope.removeData = function() {
		AuthenticationService.ClearCredentials();
		delete sessionStorage.user;
		
		$state.go('login');
	}
	
	
});