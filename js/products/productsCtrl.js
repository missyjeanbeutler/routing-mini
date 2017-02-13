angular.module('app').controller('productsCtrl', function($scope, productsSvc, $stateParams){

    if ($stateParams.id === 'shoes') {
        $scope.productData = productsSvc.shoeData;
    } else if ($stateParams.id === 'socks') {
        $scope.productData = productsSvc.sockData;
    }
    
})