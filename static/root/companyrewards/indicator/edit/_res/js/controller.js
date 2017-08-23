var app = angular.module('indiEdit', ['toastr']);
app.controller('indiEditCtrl', function($scope, indiSer,$stateParams,$state,toastr){
    var indiEdit ={id: $stateParams.id};

    //获取ID
    indiSer.findindiId(indiEdit).then(function(response){
        if(response.data.code==0){
            $scope.indiEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.indiEditFun = function(){
        var vm = $scope;
        vm.indiEdit.awardTime = angular.element('.awardTime').val();
        vm.indiEdit.prizeEndTime = angular.element('.prizeEndTime').val();
        vm.indiEdit.prizeOpeningTime = angular.element('.prizeOpeningTime').val();
        indiSer.editindi(vm.indiEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.indicator.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});