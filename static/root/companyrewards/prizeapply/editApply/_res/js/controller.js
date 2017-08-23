var app = angular.module('prizeeditApply', ['toastr']);
app.controller('prizeeditApplyCtrl', function($scope, applySer,$state,$stateParams,toastr){
    var applyEdit ={id: $stateParams.id};

    //获取ID
    applySer.findapplyId(applyEdit).then(function(response){
        if(response.data.code==0){
            $scope.applyEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    applySer.seeApplyapply(applyEdit).then(function(response){
        if(response.data.code==0){
            $scope.detailTOS = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.detailTOS=[{}];
    $scope.addtra = function(){
        var obj={}
        $scope.detailTOS.push(obj);
    }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.detailTOS.splice(index,1);
    }
    //编辑
    $scope.prizeditFun = function(){
        var vm = $scope;
        var data ={
            id:$stateParams.id
        }

        for(var i = 0;i<$scope.detailTOS.length;i++){
            var o = $scope.detailTOS[i];
            data['detailTOS['+i + ']' + '.awardRankings'] = o.awardRanking;
            data['detailTOS['+i + ']' + '.prizewinners'] = o.prizewinner;
            data['detailTOS['+i + ']' + '.bonusLimits'] = o.bonusLimit;
            data['detailTOS['+i + ']' + '.awardTimes'] = angular.element('.awardTimes').val();

        }
        applySer.editApplyapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.prizeapply.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



