var app = angular.module('bonusModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.companyrewards.bonusbudget", {
        url : "/bonusbudget",
        views : {
            "content@root.companyrewards" : {
                templateUrl : "root/companyrewards/bonusbudget/_res/html/index.html",
                controller:"bonusModuleCtrl"
            },"menu@root.companyrewards" : {
                templateUrl : "root/companyrewards/bonusbudget/_res/html/menu.html",
                controller:"bonusMenuCtrl"
            }
        }
    }).state("root.companyrewards.bonusbudget.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.companyrewards.bonusbudget":{
                templateUrl : "root/companyrewards/bonusbudget/list/_res/html/index.html",
                controller:'bonusListCtrl'
            }
        }
    }).state("root.companyrewards.bonusbudget.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.companyrewards.bonusbudget":{
                templateUrl : "root/companyrewards/bonusbudget/add/_res/html/index.html",
                controller:'bonusAddCtrl'
            }
        }
    }).state("root.companyrewards.bonusbudget.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.companyrewards.bonusbudget":{
                templateUrl : "root/companyrewards/bonusbudget/edit/_res/html/index.html",
                controller:'bonusEditCtrl'
            }
        }
    }).state("root.companyrewards.bonusbudget.addReward[12]",{
        url:"/addReward[12]?id=&name=",
        views:{
            "content@root.companyrewards.bonusbudget":{
                templateUrl : "root/companyrewards/bonusbudget/addReward/_res/html/index.html",
                controller:'bonusaddRewardCtrl'
            }
        }
    }).state("root.companyrewards.bonusbudget.editReward[12]",{
        url:"/editReward[12]?id=&page=",
        views:{
            "content@root.companyrewards.bonusbudget":{
                templateUrl : "root/companyrewards/bonusbudget/editReward/_res/html/index.html",
                controller:'bonuseditRewardCtrl'
            }
        }
    }).state("root.companyrewards.bonusbudget.seeReward[12]",{
        url:"/seeReward[12]?id=&page=",
        views:{
            "content@root.companyrewards.bonusbudget":{
                templateUrl : "root/companyrewards/bonusbudget/seeReward/_res/html/index.html",
                controller:'bonusseeRewardCtrl'
            }
        }
    })
});
