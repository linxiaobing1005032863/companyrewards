var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.companyrewards.setting", {
        url : "/setting",
        views : {
            "content@root.companyrewards" : {
                templateUrl : "root/companyrewards/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.companyrewards" : {
                templateUrl : "root/companyrewards/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.companyrewards.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.companyrewards.setting":{
                templateUrl : "root/companyrewards/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.companyrewards.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.companyrewards.setting":{
                templateUrl : "root/companyrewards/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});