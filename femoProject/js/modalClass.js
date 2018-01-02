//配置文件（数据请求接口）
var Config = Config();
var Comm = Common();
$(function () {

})
var app = angular.module("myApp", ['ng-pagination']);
app.controller("modalClassCtr", function ($scope) {
    $scope.isH = true;

    $scope.hostPath = hostPath; //图片地址拼接

    getModalClass($scope); //获取模块分类数据
    //getProductClass($scope); //获取商品分类数据
    Comm.getProductClass($scope); //获取商品分类数据
    //分页改变事件
    $scope.onPageChange = function () {
        var start = $scope.currentPage;
        var end = 10;
        Comm.ajax(Config.getModalClassUrl, "post",
            {
                "startrow": start,
                "endrow": end
            },
            function (res) {
                var obj = JSON.parse(res);
                $scope.$apply(function () {
                    $scope.modalClassData = obj.list;
                    $scope.pageCount = obj.pages;
                    $scope.$apply();
                });
            });
    }
    //根据用户输入搜索(模块分类搜索)
    $scope.search = function () {
        var search_txt = $("#search_txt").val();
        var search_type = $('#select_search option:selected').val();
        var searchUrl = Config.getModalClassUrl + "startrow=1&endrow=10&" + search_type + "=" + search_txt;
        Comm.ajax(searchUrl, "get", "", function (res) {
            var obj = JSON.parse(res);
            $scope.modalClassData = obj.list;
            $scope.pageCount = obj.pages;
            $scope.$apply();
        });
    }
    //根据模块id更新模块分类
    $scope.updateClass = function (modalId, productId) {
        //alert(productId);
        $scope.updateClassId = modalId;
        ModalClassId = modalId;
        $scope.$apply();
        $("#select_updateModal option[value=" + productId + "]").attr("selected", "selected");

    }
    //根据模块id删除一条数据
    $scope.deleteModalClass = function (modalClassId) {
        $('#confirmModal').modal('show');
        $scope.confirmBtn = function () {
            var paramData={
                "isdelete": 1,
                "classificationId": modalClassId
            };
            Comm.ajax(Config.getUpdateModalClassUrl, "post", paramData, function (res) {
                //alert(JSON.stringify(res));
                alert("删除成功");
                location.reload(); //刷新当前页面
            });
        }
    }

})

//获取模块分类数据
function getModalClass($scope) {
    var startRow = 1;
    var endRow = 10;
    var getModalClassUrl = Config.getModalClassUrl + "startrow=" + startRow + "&endrow=" + endRow;
    //alert(getModalClassUrl);
    Comm.ajax(getModalClassUrl, "get", "", function (res) {
        var obj = JSON.parse(res);
        $scope.modalClassData = obj.list;
        $scope.pageCount = obj.pages;
        $scope.$apply();
    });
}

//添加模块分类 
function addModalClass() {
    var select_addModal = $('#select_addModal option:selected').val();
    var modalName_add = $("#modalName_add").val();
    var modalPath_add = $("#modalPath_add").val();
    //var classificationImg = "upload/newimg.png";
    if (!select_addModal) {
        alert("请选择商品分类");
        return;
    } else if (!modalName_add) {
        alert("请输入分类名称");
        return;
    } else if (!modalPath_add) {
        alert("请输入分类路径");
        return;
    }

    var getAddModalClassUrl = Config.getAddModalClassUrl + "classificationName=" + modalName_add + "&classificationImg=" + addModalClassImg + "&classificationPath=" + modalPath_add + "&classificationProductId=" + select_addModal;
    //alert(getAddModalClassUrl);
    Comm.ajax(getAddModalClassUrl, "get", "", function (res) {
        //alert(JSON.stringify(res));
        alert("添加成功");
        location.reload(); //刷新当前页面
    });
}

//更新模块分类 
function updateModalClass() {
    var select_updateModal = $('#select_updateModal option:selected').val();
    var modalName_update = $("#modalName_update").val();
    var modalPath_update = $("#modalPath_update").val();
    var classificationImg = addModalClassImg || $("#preview2").attr("src");

    if (!select_updateModal) {
        alert("请选择商品分类");
        return;
    } else if (!modalName_update) {
        alert("请修改模块名称");
        return;
    } else if (!modalPath_update) {
        alert("请修改分类路径");
        return;
    }
    var paramData={
        "classificationName": modalName_update,
        "classificationImg": classificationImg,
        "classificationPath": modalPath_update,
        "classificationProductId": select_updateModal,
        "classificationId": ModalClassId
    };
    Comm.ajax(Config.getUpdateModalClassUrl, "post", paramData, function (res) {
        //alert(JSON.stringify(res));
        alert("更新成功");
        location.reload(); //刷新当前页面
    });
}

var addModalClassImg = ""; //存储要上传的图片
//图片预览功能及上传
function imgPreview(fileDom) {
    Comm.uploadImg(fileDom, "preview", "imageForm");
}
//图片预览功能及上传2
function imgPreview2(fileDom) {
    Comm.uploadImg(fileDom, "preview2", "imageForm2");
}