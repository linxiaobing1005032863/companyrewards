var app = angular.module('prizeaddApply', ['toastr']);
app.controller('prizeaddApplyCtrl', function($scope, applySer,$state,$stateParams,toastr){
    var applyEdit ={
        id: $stateParams.id
    };
    //获取ID
    applySer.findapplyId(applyEdit).then(function(response){
        if(response.data.code==0){
            $scope.applyEdit = response.data.data;
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
    //添加
    $scope.prizeaddRewardFun = function(){
        var data={
            id:$stateParams.id

        }
        for(var i = 0;i<$scope.detailTOS.length;i++){
            var o = $scope.detailTOS[i];
            data['detailTOS['+i + ']' + '.prizeDetails'] = o.prizeDetails;
            data['detailTOS['+i + ']' + '.prizeBuyWays'] = o.prizeBuyWays;
            data['detailTOS['+i + ']' + '.prizeIssueForms'] = o.prizeIssueForms;
            data['detailTOS['+i + ']' + '.awardTimes'] = angular.element('.awardTimes').val();
        }

        applySer.addApplyapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.prizeapply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




