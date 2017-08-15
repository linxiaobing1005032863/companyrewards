var app = angular.module('indiModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.companyrewards.indicator", {
        url : "/indicator",
        views : {
            "content@root.companyrewards" : {
                templateUrl : "root/companyrewards/indicator/_res/html/index.html",
                controller:"indiModuleCtrl"
            },"menu@root.companyrewards" : {
                templateUrl : "root/companyrewards/indicator/_res/html/menu.html",
                controller:"indiMenuCtrl"
            }
        }
    }).state("root.companyrewards.indicator.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.companyrewards.indicator":{
                templateUrl : "root/companyrewards/indicator/list/_res/html/index.html",
                controller:'indiListCtrl'
            }
        }
    }).state("root.companyrewards.indicator.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.companyrewards.indicator":{
                templateUrl : "root/companyrewards/indicator/add/_res/html/index.html",
                controller:'indiAddCtrl'
            }
        }
    }).state("root.companyrewards.indicator.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.companyrewards.indicator":{
                templateUrl : "root/companyrewards/indicator/edit/_res/html/index.html",
                controller:'indiEditCtrl'
            }
        }
    })
});
