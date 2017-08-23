var app = angular.module('bonusaddReward', ['toastr']);
app.controller('bonusaddRewardCtrl', function($scope, bonusSer,$state,$stateParams,toastr){
    var bonusEdit ={
        id: $stateParams.id
    };
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
    $scope.rewardProgramRatiosTOS=[{}];
    $scope.addtra = function(){
        var obj={}
       $scope.rewardProgramRatiosTOS.push(obj);
     }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.rewardProgramRatiosTOS.splice(index,1);
    }
    //添加
    $scope.bonusaddRewardFun = function(){
        var data={
            id:$stateParams.id
        }
        for(var i = 0;i<$scope.rewardProgramRatiosTOS.length;i++){
            var o = $scope.rewardProgramRatiosTOS[i];
            data['rewardProgramRatiosTOS['+i + ']' + '.rewardPrograms'] = o.rewardPrograms;
            data['rewardProgramRatiosTOS['+i + ']' + '.focusingDegrees'] = o.focusingDegrees;
            data['rewardProgramRatiosTOS['+i + ']' + '.budgetRanges'] = o.budgetRanges;
            data['rewardProgramRatiosTOS['+i + ']' + '.bonusWeights'] = o.bonusWeights;
            data['rewardProgramRatiosTOS['+i + ']' + '.bonusLimits'] = o.bonusLimits;
            data['rewardProgramRatiosTOS['+i + ']' + '.honorWeights'] = o.honorWeights;
            data['rewardProgramRatiosTOS['+i + ']' + '.honorLimits'] = o.honorLimits;
            data['rewardProgramRatiosTOS['+i + ']' + '.empiricalValues'] = o.empiricalValues;
            data['rewardProgramRatiosTOS['+i + ']' + '.empiricalValueLimits'] = o.empiricalValueLimits;
            data['rewardProgramRatiosTOS['+i + ']' + '.empiricalValueToMoneys'] = o.empiricalValueToMoneys;


        }
        bonusSer.addRewardbonus(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.bonusbudget.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



