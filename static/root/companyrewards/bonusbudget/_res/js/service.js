var app = angular.module('bonusServer',[]);
app.factory('bonusSer',function ($http) {
    return {
        menuPermission : menuPermission,
        bonusList :bonusList ,
        addbonus:addbonus,
        editbonus:editbonus,
        findbonusId:findbonusId,
        bonusDelete:bonusDelete,
        addRewardbonus:addRewardbonus,
        seeRewardbonus:seeRewardbonus,
        eaidRewardbonus:eaidRewardbonus,
        countbonus:countbonus,
        getAllArea:getAllArea



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/bonusbudget/guidePermission'+data);
    }
    //列表
    function bonusList(data) {
        return $http.get('/bonusbudget/list',{
            params: data
        })
    }
    //更新奖励项目比例
    function eaidRewardbonus(data) {
        return $http.post('/bonusbudget/updateRewardProgramRatios',data)
    }
    //id查询find
    function findbonusId(data){
        return $http.get('/bonusbudget/bonusbudget',{
            params:data
        })
    }
    //计算总数量
    function countbonus() {
        return $http.get('/bonusbudget/count')
    }
    //添加
    function addbonus(data){
        return $http.post('/bonusbudget/add',data)
    }

    //编辑
    function editbonus(data){
        return $http.post('/bonusbudget/edit',data)
    }

    //删除
    function bonusDelete(data){
        return $http.get('/bonusbudget/delete',{
            params: data
        })
    }
    //添加
    function addRewardbonus(data){
        return $http.post('/bonusbudget/addRewardProgramRatios',data)
    }
    //查看奖励项目比例
    function seeRewardbonus(data) {
        return $http.get('/bonusbudget/checkRewardProgramRatios',{
            params:data
        })
    }
    //当月预算范围
    function getAllArea() {
        return $http.get('/bonusbudget/findPay/reserve')
    }

});

