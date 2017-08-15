var app = angular.module('peopleEdit', ['toastr']);
app.controller('peopleEditCtrl', function($scope, peppleSer,$stateParams,$state,toastr){
    var peopleEdit ={id: $stateParams.id};

    //获取ID
    peppleSer.findpeopleId(peopleEdit).then(function(response){
        if(response.data.code==0){
            $scope.peopleEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.peopleEditFun = function(){
        var vm = $scope;
        peppleSer.editpeople(vm.peopleEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.peoplenostat.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});