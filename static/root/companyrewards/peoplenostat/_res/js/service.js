var app = angular.module('peppleServer',[]);
app.factory('peppleSer',function ($http) {
    return {
        menupeople : menupeople,
        peopleList :peopleList ,
        addpeople:addpeople,
        editpeople:editpeople,
        findpeopleId:findpeopleId,
        peopleDelete:peopleDelete,
        countpeople:countpeople,
        addDetailspeople:addDetailspeople,
        seeDetailpeople:seeDetailpeople,
        editDetailpeople:editDetailpeople,

    };
    //菜单权限
    function  menupeople(data) {
        return $http.get('/rewardpeoplenostat/guidePermission'+data);
    }
    //列表
    function peopleList(data) {
        return $http.get('/rewardpeoplenostat/list',{
            params: data
        })
    }
    //id查询find
    function findpeopleId(data){
        return $http.get('/rewardpeoplenostat/rewardpeoplenostat',{
            params:data
        })
    }
    //计算总数量
    function countpeople() {
        return $http.get('/rewardpeoplenostat/count')
    }

    //添加
    function addpeople(data){
        return $http.post('/rewardpeoplenostat/add',data)
    }

    //编辑
    function editpeople(data){
        return $http.post('/rewardpeoplenostat/edit',data)
    }

    //删除
    function peopleDelete(data){
        return $http.get('/rewardpeoplenostat/delete',{
            params: data
        })
    }
    //更新奖励项目比例
    function editDetailpeople(data) {
        return $http.post('/rewardpeoplenostat/updateAwardDetails',data)
    }
    //添加
    function addDetailspeople(data){
        return $http.post('/rewardpeoplenostat/addAwardDetails',data)
    }
    //查看奖励项目比例
    function seeDetailpeople(data) {
        return $http.get('/rewardpeoplenostat/checkAwardDetails',{
            params: data
        })
    }
});

