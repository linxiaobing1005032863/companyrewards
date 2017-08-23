var app = angular.module('applyServer',[]);
app.factory('applySer',function ($http) {
    return {
        menuPermission : menuPermission,
        applyList :applyList ,
        addapply:addapply,
        editapply:editapply,
        findapplyId:findapplyId,
        applyDelete:applyDelete,
        countapply:countapply,
        addApplyapply:addApplyapply,
        seeApplyapply:seeApplyapply,
        editApplyapply:editApplyapply

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/prizeapply/guidePermission'+data);
    }
    //列表
    function applyList(data) {
        return $http.get('/prizeapply/list',{
            params: data
        })
    }
    //id查询find
    function findapplyId(data){
        return $http.get('/prizeapply/prizeapply',{
            params:data
        })
    }
    //计算总数量
    function countapply() {
        return $http.get('/prizeapply/count')
    }
    //添加
    function addapply(data){
        return $http.post('/prizeapply/add',data)
    }

    //编辑
    function editapply(data){
        return $http.post('/prizeapply/edit',data)
    }

    //删除
    function applyDelete(data){
        return $http.get('/prizeapply/delete',{
            params: data
        })
    }
    //更新奖品明细
    function editApplyapply(data) {
        return $http.post('/prizeapply/updatePrizeDetails',data)
    }
    //添加奖品明细
    function addApplyapply(data){
        return $http.post('/prizeapply/addPrizeDetails',data)
    }
    //查看奖品明细
    function seeApplyapply(data) {
        return $http.get('/prizeapply/checkPrizeDetails',{
            params: data
        })
    }
});

