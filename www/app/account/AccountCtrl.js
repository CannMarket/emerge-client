controllers.controller('AccountCtrl', function($scope, $http, $timeout) {
  $scope.user = {
  	name 		: 'Mike Henken',
  	email 		: 'mikehenken@gmail.com',
  	phone		  : '239-810-0119',
  	address1	: '8320 Matanzas Rd',
  	city		   : 'Fort Myers',
  	state		  : 'Florida',
  	zip			 : '33967',
  	country		: 'USA'
  };
  $scope.name = 'test';
  $scope.success = false;
  $scope.submit = function(){
    $scope.success = true;
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.success = false;
    }, 1700);
  };
})