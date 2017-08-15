var app = angular.module('applyAdd', ['toastr']);
app.controller('applyAddCtrl', function($scope, applySer,$state,toastr){
    //添加
    $scope.applyAddFun = function(){
        var vm = $scope;
        applySer.addapply(vm.applyAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.prizeapply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');console.log(response)
            }
        });

    };

});



