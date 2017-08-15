var app = angular.module('bonusAdd', ['toastr']);
app.controller('bonusAddCtrl', function($scope, bonusSer,$state,toastr){
    //添加
    $scope.bonusAddFun = function(){
        var vm = $scope;
        bonusSer.addbonus(vm.bonusAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.bonusbudget.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



