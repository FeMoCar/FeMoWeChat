var Config = Config();
var Comm = Common();
var app = angular.module("myApp",['ng-pagination']);
app.controller("modalClassCtr", ['$scope',function ($scope) {
    $scope.isH = true;
    $scope.onPageChange = function() {
        var start = ($scope.currentPage-1)*10+1;
        var end = 10;
        Comm.ajax(Config.getUserShareUrl, "post",
            {
                "startrow":start,
                "endrow":end
            },
            function (res) {
                var obj = JSON.parse(res);
                $scope.$apply(function () {
                    $scope.modalShareData = obj.list;
                    $scope.pageCount = obj.pages;
                    $scope.currentPage = obj.pageNum;
                });
            });
    }

    //根据用户输入搜索
    $scope.search = function () {
        var search_type = $('#select_search option:selected').val();
        var search_txt = $("#search_txt").val();

        var searchUrl = Config.getUserShareUrl + "startrow=1&endrow=10&" + search_type + "=" + search_txt;
        Comm.ajax(searchUrl, "get", "",
            function (res) {
                var obj = JSON.parse(res);
                $scope.$apply(function () {
                    $scope.modalShareData = obj.list;
                    $scope.pageCount = obj.pages;
                    alert( $scope.pageCount)
                });
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
    //获取分享模块数据
    $scope.myinit = function() {
        Comm.ajax(Config.getUserShareUrl, "post",
            {
                "startrow":1,
                "endrow":10
            },
            function (res) {
                var obj = JSON.parse(res);
                $scope.$apply(function () {
                    $scope.modalShareData = obj.list;
                    $scope.pageCount = obj.pages;
                });
            })
            };
    $scope.myinit();
}])


