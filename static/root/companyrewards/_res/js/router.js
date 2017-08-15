var app = angular.module('rewardsModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.companyrewards", {
        url: "/companyrewards",
        views: {
            "content@root": {
                templateUrl: "root/companyrewards/_res/html/index.html",
                controller: "rewardsCtrl"
            },"nav@root":{
                templateUrl: "root/companyrewards/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});