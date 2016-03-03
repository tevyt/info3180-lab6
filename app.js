var myApp = angular.module('myApp' , []);

myApp.controller('MainCtrl' , ['$scope' , function($scope){
	$scope.products = ['Bread' , 'Milk' , 'Cheese'];

	$scope.addItem = function(){
		$scope.errorText = "";
		if(!$scope.addMe){
			return;
		}
		if($scope.products.indexOf($scope.addMe) == -1){
			$scope.products.push($scope.addMe);
		}else{
			$scope.errorText = "This item is already in your shopping list.";
		}
	};

	$scope.removeItem = function(index){
		$scope.errorText = "";
		$scope.products.splice(index,1)
	}

}]);

