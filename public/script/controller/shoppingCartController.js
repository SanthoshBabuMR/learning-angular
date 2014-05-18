// Controller - ShoppingCartController
// Purpose - controller for shopping cart
// @params {object} $scope
// @return {undefined}
function ShoppingCartController( $scope ) {
	$scope.items = [
		{ title: "3/4 Elbow", quantity: 3, price: 3.5 }
		, { title: "3/4 PVC pipe", quantity: 8, price: 8 }
		, { title: "solvent", quantity: 1, price: 20 }
	];

	$scope.remove = function( index ) {
		$scope.items.splice( index, 1 );
	};

}
