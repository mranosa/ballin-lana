'use strict';

drunkenOctoAdventureApp.controller('MainCtrl', ['$scope', 
	function($scope) {

   $scope.item = {
   	price : 0,
   	counter : 0
   };

   $scope.page = {
   	pitched : false,
   	price : 0,
   	counter : 0
   };

  	var dataRef = new Firebase('https://halaliel.firebaseio.com/item');
	var priceRef = new Firebase('https://halaliel.firebaseio.com/item/price');
	var countRef = new Firebase('https://halaliel.firebaseio.com/item/counter');

	dataRef.on('value', function(snapshot) {
		var item = snapshot.val();
		$scope.item = item;
		if(item.price < 1){
			$scope.item.price = 0;
			$scope.page.pitched = true;
		}

		var phase = $scope.$root.$$phase;
	    if (phase == '$apply' || phase == '$digest') {
	      // fn();
	    } else {
	      $scope.$apply();
	    }
	});

	$scope.updatePitchAmount = function(){
		priceRef.transaction(function(current_value) {
		  return current_value - $scope.page.price;
		}, function(){
			countRef.transaction(function(current_value) {
			  return current_value + 1;
			}, function(){
				$scope.page.pitched = true;
				var phase = $scope.$root.$$phase;
			    if (phase == '$apply' || phase == '$digest') {
			      // fn();
			    } else {
			      $scope.$apply();
			    }
			});			
		});
	}

}]);
