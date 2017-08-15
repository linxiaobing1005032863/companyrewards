var app = angular.module('peopleAdd', ['toastr']);
app.controller('peopleAddCtrl', function($scope, peppleSer,$state,toastr){
    //添加
    $scope.peopleAddFun = function(){
        var vm = $scope;
        peppleSer.addpeople(vm.peopleAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.peoplenostat.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');console.log(response)
            }
        });

    };

});



