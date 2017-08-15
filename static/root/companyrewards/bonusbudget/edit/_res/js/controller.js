var app = angular.module('bonusEdit', ['toastr']);
app.controller('bonusEditCtrl', function($scope, bonusSer,$stateParams,$state,toastr){
    var indiEdit ={id: $stateParams.id};

    //获取ID
    bonusSer.findbonusId(indiEdit).then(function(response){
        if(response.data.code==0){
            $scope.bonusEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.bonusEditFun = function(){
        var vm = $scope;
        bonusSer.editbonus(vm.bonusEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.bonusbudget.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});