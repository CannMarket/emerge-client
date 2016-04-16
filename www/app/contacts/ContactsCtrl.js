controllers.controller('ContactsCtrl', function($scope, $ionicModal) {
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

	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
})