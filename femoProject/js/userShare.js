var Config = Config();
var Comm = Common();
$(function () {

})
var app = angular.module("myApp", []);
app.controller("modalClassCtr", function ($scope) {
    $scope.isH = true;
    getModalClass($scope);
    //根据用户输入搜索
    $scope.search = function () {
        var search_type = $('#select_search option:selected').val();
        var search_txt = $("#search_txt").val();
        var searchUrl = Config.getUserShareUrl + "startrow=1&endrow=50&" + search_type + "=" + search_txt;
        Comm.ajax(searchUrl, "get", "", function (res) {
            $scope.modalShareData = JSON.parse(res).list;
            $scope.$apply();
        });
    }
    //根据分享id删除分享信息
    $scope.deleteShare = function (shareId) {
        var paramData = {
            "isdelete": 1,
            "wxshareId": shareId,
        };
        Comm.ajax(Config.deleteUserShareUrl, "post", paramData, function (res) {
            //alert(JSON.stringify(res));
            alert("删除成功");
            location.reload(); //刷新当前页面
        });
    }
})

//获取分享模块数据
function getModalClass($scope) {
    var startRow = 1;
    var endRow = 50;
    var getModalClassUrl = Config.getUserShareUrl + "startrow=" + startRow + "&endrow=" + endRow;
    Comm.ajax(getModalClassUrl, "get", "", function (res) {
        $scope.modalShareData = JSON.parse(res).list;
        $scope.$apply();
    });
}
