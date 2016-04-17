controllers.controller('PaymentsCtrl', function($scope, $stateParams, $timeout) {
  console.log($stateParams);
  $scope.payment_success = false;
  $scope.contacts = [
    { name: 'Evan Wagner', id: 1 },
    { name: 'David Cruz', id: 2 },
    { name: 'Ann Taylor', id: 3 }
  ];
  $scope.submitPayment = function(){
  	console.log('payment');
  	$scope.payment_success = true;
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
  		$scope.payment_success = false;
    }, 1700);
  };
})