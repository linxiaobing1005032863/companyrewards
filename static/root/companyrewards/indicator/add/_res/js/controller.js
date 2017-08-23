var app = angular.module('indiAdd', ['toastr']);
app.controller('indiAddCtrl', function($scope, indiSer,$state,toastr){
    //添加
    $scope.indiAddFun = function(){
        var vm = $scope;
        vm.indiAdd.awardTime = angular.element('.awardTime').val();
        vm.indiAdd.prizeEndTime = angular.element('.prizeEndTime').val();
        vm.indiAdd.prizeOpeningTime = angular.element('.prizeOpeningTime').val();
        indiSer.addindi(vm.indiAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.indicator.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



