var app = angular.module('peopleeditReward', ['toastr']);
app.controller('peopleeditRewardCtrl', function($scope, peppleSer,$state,$stateParams,toastr){
    var peopleEdit ={id: $stateParams.id};

    //获取ID
    peppleSer.findpeopleId(peopleEdit).then(function(response){
        if(response.data.code==0){
            $scope.peopleEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    peppleSer.seeDetailpeople(peopleEdit).then(function(response){
        if(response.data.code==0){
            $scope.peopleTOS = response.data.data;
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
    //编辑
    $scope.peopleEditFun = function(){
        var vm = $scope;
        var data ={
            id:$stateParams.id
        }

        for(var i = 0;i<$scope.peopleTOS.length;i++){
            var o = $scope.peopleTOS[i];
            data['peopleTOS['+i + ']' + '.awardRankings'] = o.awardRanking;
            data['peopleTOS['+i + ']' + '.prizewinners'] = o.prizewinner;
            data['peopleTOS['+i + ']' + '.bonusLimits'] = o.bonusLimit;
            data['peopleTOS['+i + ']' + '.empiricalValueLimits'] = o.empiricalValueLimit;
            data['peopleTOS['+i + ']' + '.honorAwardLimits'] = o.honorAwardLimit;

        }
        peppleSer.editDetailpeople(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.companyrewards.peoplenostat.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
