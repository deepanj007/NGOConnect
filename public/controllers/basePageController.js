module.controller('basePageController',function($scope, $state){
    $scope.eventOpen = function(){
        $state.go('event');
    }
})