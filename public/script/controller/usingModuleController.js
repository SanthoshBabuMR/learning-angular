var myAppModule = window.angular.module( "myApp", [] );

myAppModule.controller( "UsingModuleController", function ( $scope ) {
	var message = {
		text: "you've started your journey"
	};
	$scope.message = {
		text : message.text
	};	
} );
