var app = angular.module('rewardsModule');
app.factory('contractsSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/bonusbudget/sonPermission');
    }
    function setPermission(){
        return $http.get('/bonusbudget/setButtonPermission');
    }
});