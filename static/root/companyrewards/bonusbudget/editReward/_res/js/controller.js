var app = angular.module('bonuseditReward', ['toastr']);
app.controller('bonuseditRewardCtrl', function($scope, bonusSer,$state,$stateParams,toastr){
    var bonusEdit ={id: $stateParams.id};
    //获取ID
    bonusSer.findbonusId(bonusEdit).then(function(response){
        if(response.data.code==0){
            $scope.bonusEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //当月预算范围
    bonusSer.getAllArea().then(function(response){
        if(response.data.code==0){
            $scope.AllArea = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //查看奖励项目比例
    bonusSer.seeRewardbonus(bonusEdit).then(function(response){
        if(response.data.code==0){
            $scope.rewardProgramRatiosTOS= response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.rewardProgramRatiosTOS=[{}];
    $scope.addtra = function(){
        var obj={}
       $scope.rewardProgramRatiosTOS.push(obj);
     }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.bonusId.splice(index,1);
    }
    //编辑
    $scope.bonuseditRewardFun = function(){
        var vm = $scope;
        var data ={
            id:$stateParams.id,
    }
        for(var i = 0;i<$scope.rewardProgramRatiosTOS.length;i++) {
            var o = $scope.rewardProgramRatiosTOS[i];
            data['rewardProgramRatiosTOS[' + i + ']' + '.rewardPrograms'] = o.rewardProgram;
            data['rewardProgramRatiosTOS[' + i + ']' + '.focusingDegrees'] = o.focusingDegree;
            data['rewardProgramRatiosTOS[' + i + ']' + '.budgetRanges'] = o.budgetRange;
            data['rewardProgramRatiosTOS[' + i + ']' + '.bonusWeights'] = o.bonusWeight;
            data['rewardProgramRatiosTOS[' + i + ']' + '.bonusLimits'] = o.bonusLimit;
            data['rewardProgramRatiosTOS[' + i + ']' + '.honorWeights'] = o.honorWeight;
            data['rewardProgramRatiosTOS[' + i + ']' + '.honorLimits'] = o.honorLimit;
            data['rewardProgramRatiosTOS[' + i + ']' + '.empiricalValues'] = o.empiricalValue;
            data['rewardProgramRatiosTOS[' + i + ']' + '.empiricalValueLimits'] = o.empiricalValueLimit
        }

        bonusSer.eaidRewardbonus(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.bonusbudget.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



