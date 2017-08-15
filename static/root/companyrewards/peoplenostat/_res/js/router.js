var app = angular.module('bonusModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.companyrewards.peoplenostat", {
        url : "/peoplenostat",
        views : {
            "content@root.companyrewards" : {
                templateUrl : "root/companyrewards/peoplenostat/_res/html/index.html",
                controller:"peopleModuleCtrl"
            },"menu@root.companyrewards" : {
                templateUrl : "root/companyrewards/peoplenostat/_res/html/menu.html",
                controller:"bonusMenuCtrl"
            }
        }
    }).state("root.companyrewards.peoplenostat.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.companyrewards.peoplenostat":{
                templateUrl : "root/companyrewards/peoplenostat/list/_res/html/index.html",
                controller:'peopleListCtrl'
            }
        }
    }).state("root.companyrewards.peoplenostat.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.companyrewards.peoplenostat":{
                templateUrl : "root/companyrewards/peoplenostat/add/_res/html/index.html",
                controller:'peopleAddCtrl'
            }
        }
    }).state("root.companyrewards.peoplenostat.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.companyrewards.peoplenostat":{
                templateUrl : "root/companyrewards/peoplenostat/edit/_res/html/index.html",
                controller:'peopleEditCtrl'
            }
        }
    }).state("root.companyrewards.peoplenostat.addDetails[12]",{
        url:"/addDetails[12]?id=&name=",
        views:{
            "content@root.companyrewards.peoplenostat":{
                templateUrl : "root/companyrewards/peoplenostat/addDetails/_res/html/index.html",
                controller:'peopleaddRewardCtrl'
            }
        }
    }).state("root.companyrewards.peoplenostat.editDetails[12]",{
        url:"/editDetails[12]?id=&page=",
        views:{
            "content@root.companyrewards.peoplenostat":{
                templateUrl : "root/companyrewards/peoplenostat/editDetails/_res/html/index.html",
                controller:'peopleeditRewardCtrl'
            }
        }
    }).state("root.companyrewards.peoplenostat.seeDetails[12]",{
        url:"/seeDetails[12]?id=&page=",
        views:{
            "content@root.companyrewards.peoplenostat":{
                templateUrl : "root/companyrewards/peoplenostat/seeDetails/_res/html/index.html",
                controller:'peopleseeRewardCtrl'
            }
        }
    })

});
