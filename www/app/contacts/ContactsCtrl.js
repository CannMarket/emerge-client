controllers.controller('ContactsCtrl', function($scope, $ionicModal, contactsService) {
  $scope.contacts = [
    { name: 'Evan Wagner', id: 1 },
    { name: 'David Cruz', id: 2 },
    { name: 'Ann Taylor', id: 3 }
  ];
    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('app/contacts/add-contact.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });  



    //QR STUFF NOT IN USE
    $scope.qrStart = false;
    $scope.showQrScanner = false;
    console.log('broadcast', $scope.$broadcast);		
	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	$scope.scanQr = function(){
  		console.log('scan qr');
	};
    $scope.onSuccess = function(data) {
    	console.log(data);
		$scope.qrStart = false;
    	$scope.showQrScanner = false;
    };
    $scope.onError = function(error) {
        console.log(error);
    };
    $scope.onVideoError = function(error) {
        console.log(error);
    };
})