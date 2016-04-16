controllers.controller('LandingCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('app/login/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.login_modal = modal;
  });

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('app/register/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.register_modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.login_modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.login_modal.show();
  };

  // Triggered in the login modal to close it
  $scope.closeRegister = function() {
    $scope.register_modal.hide();
  };

  // Open the login modal
  $scope.register = function() {
    $scope.register_modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
      console.log('set location');
      $location.path("/app/account");
    }, 1000);
  };

  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    console.log('Doing register', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
      console.log('set location');
      $location.path("/app/account");
    }, 1000);
  };
})