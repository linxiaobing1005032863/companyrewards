var app = angular.module('applyModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.companyrewards.prizeapply", {
        url : "/prizeapply",
        views : {
            "content@root.companyrewards" : {
                templateUrl : "root/companyrewards/prizeapply/_res/html/index.html",
                controller:"applyModuleCtrl"
            },"menu@root.companyrewards" : {
                templateUrl : "root/companyrewards/prizeapply/_res/html/menu.html",
                controller:"bonusMenuCtrl"
            }
        }
    }).state("root.companyrewards.prizeapply.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.companyrewards.prizeapply":{
                templateUrl : "root/companyrewards/prizeapply/list/_res/html/index.html",
                controller:'applyListCtrl'
            }
        }
    }).state("root.companyrewards.prizeapply.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.companyrewards.prizeapply":{
                templateUrl : "root/companyrewards/prizeapply/add/_res/html/index.html",
                controller:'applyAddCtrl'
            }
        }
    }).state("root.companyrewards.prizeapply.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.companyrewards.prizeapply":{
                templateUrl : "root/companyrewards/prizeapply/edit/_res/html/index.html",
                controller:'applyEditCtrl'
            }
        }
    }).state("root.companyrewards.prizeapply.addApply[12]",{
        url:"/addApply[12]?id=&name=",
        views:{
            "content@root.companyrewards.prizeapply":{
                templateUrl : "root/companyrewards/prizeapply/addApply/_res/html/index.html",
                controller:'prizeaddApplyCtrl'
            }
        }
    }).state("root.companyrewards.prizeapply.editApply[12]",{
        url:"/editApply[12]?id=&page=",
        views:{
            "content@root.companyrewards.prizeapply":{
                templateUrl : "root/companyrewards/prizeapply/editApply/_res/html/index.html",
                controller:'prizeeditApplyCtrl'
            }
        }
    }).state("root.companyrewards.prizeapply.seeApply[12]",{
        url:"/seeApply[12]?id=&page=",
        views:{
            "content@root.companyrewards.prizeapply":{
                templateUrl : "root/companyrewards/prizeapply/seeApply/_res/html/index.html",
                controller:'prizeseeApplyCtrl'
            }
        }
    })
});
