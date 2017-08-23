var app = angular.module('applyList', ['ng-pagination','toastr']);
app.controller('applyListCtrl',function($scope,applySer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page || 1,
        };
        applySer.countapply(listData).then(function(response){
            if(response.data.code==0){
                $scope.custom.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        applySer.applyList(listData).then(function(response){
            if(response.data.code==0){
                $scope.applyLi = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.applyLi,function(obj){
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

    applySer.seeApplyapply( $scope.applyLi).then(function(response){
        if(response.data.code==0){
            $scope.reward= response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.selectList = function(event){
        $scope.bonusEdit = event;
        applySer.seeApplyapply( $scope.bonusEdit).then(function(response){
            if(response.data.code==0){
                $scope.reward= response.data.data;
                if($scope.reward !=' ' && $scope.reward !=undefined){
                    $scope.idListd1 = event.id;
                    $scope.$emit('changeId1', $scope.idListd1);
                }
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        angular.forEach($scope.applyLi,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        $scope.$emit('changeId1', null);
        //向父Ctrl传递事件

        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.applyLi,function(obj){
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

    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.companyrewards.prizeapply.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        applySer.applyDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.companyrewards.prizeapply.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.companyrewards.prizeapply.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
