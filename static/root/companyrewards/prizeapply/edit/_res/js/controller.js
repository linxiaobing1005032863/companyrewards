var app = angular.module('applyEdit', ['toastr']);
app.controller('applyEditCtrl', function($scope, applySer,$stateParams,$state,toastr){
    var applyEdit ={id: $stateParams.id};

    //获取ID
    applySer.findapplyId(applyEdit).then(function(response){
        if(response.data.code==0){
            $scope.applyEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.applyEditFun = function(){
        var vm = $scope;
        applySer.editapply(vm.applyEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.prizeapply.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});