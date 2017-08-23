var app = angular.module('indiServer',[]);
app.factory('indiSer',function ($http) {
    return {
        menuPermission : menuPermission,
        indiList :indiList ,
        addindi:addindi,
        editindi:editindi,
        findindiId:findindiId,
        indiDelete:indiDelete,
        countindi:countindi

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/rewardindicator/guidePermission'+data);
    }
    //列表
    function indiList(data) {
        return $http.get('/rewardindicator/list',{
            params: data
        })
    }
    //id查询find
    function findindiId(data){
        return $http.get('/rewardindicator/rewardindicator',{
            params:data
        })
    }
    //计算总数量
    function countindi() {
        return $http.get('/rewardindicator/count')
    }

    //添加
    function addindi(data){
        return $http.post('/rewardindicator/add',data)
    }

    //编辑
    function editindi(data){
        return $http.post('/rewardindicator/edit',data)
    }

    //删除
    function indiDelete(data){
        return $http.get('/rewardindicator/delete',{
            params: data
        })
    }
});

