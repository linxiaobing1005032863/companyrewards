var app = angular.module('peopleseeReward', ['ng-pagination','toastr']);
app.controller('peopleseeRewardCtrl',function($scope,peppleSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page || 1,
            id:$stateParams.id

        };
        peppleSer.seeDetailpeople(listData).then(function(response){
            if(response.data.code==0){
                $scope.peopleseeLi = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.peopleseeLi,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.peopleseeLi,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

   //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };


});

