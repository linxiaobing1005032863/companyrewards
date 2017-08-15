var app = angular.module('peopleaddReward', ['toastr']);
app.controller('peopleaddRewardCtrl', function($scope, peppleSer,$state,$stateParams,toastr){
    var peopleEdit ={
        id: $stateParams.id
    };
    //获取ID
    peppleSer.findpeopleId(peopleEdit).then(function(response){
        if(response.data.code==0){
            $scope.peopleEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.peopleTOS=[{}];
    $scope.addtra = function(){
        var obj={}
        $scope.peopleTOS.push(obj);
    }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.peopleTOS.splice(index,1);
    }
    //添加
    $scope.peopleaddRewardFun = function(){
        var data={
            id:$stateParams.id
        }
        for(var i = 0;i<$scope.peopleTOS.length;i++){
            var o = $scope.peopleTOS[i];
            data['peopleTOS['+i + ']' + '.awardRankings'] = o.awardRankings;
            data['peopleTOS['+i + ']' + '.prizewinners'] = o.prizewinners;
            data['peopleTOS['+i + ']' + '.bonusLimits'] = o.bonusLimits;
            data['peopleTOS['+i + ']' + '.empiricalValueLimits'] = o.empiricalValueLimits;
            data['peopleTOS['+i + ']' + '.honorAwardLimits'] = o.honorAwardLimits;


        }
        peppleSer.addDetailspeople(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.peoplenostat.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




