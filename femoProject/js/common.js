/**
 共用功能类
 调用方法
 var Comm = Common();
 Comm.Func();
 **/
function Common() {
    var common = {};
    //ajax封装
    common.ajax = function (_url, Type, paramData, callBack) {
        $.ajax({
            type: Type,
            url: _url,
            dataType: "json",
            data: paramData,
            success: function (ret) {
                callBack(ret);
            },
            complete: function () {

            }
        });
    }
    //获取商品分类数据
    common.getProductClass = function ($scope) {
        var startRow = 1;
        var endRow = 10;
        var getProductClassUrl = Config.getProductClassUrl + "startrow=" + startRow + "&endrow=" + endRow;
        //alert(getProductClassUrl);
        common.ajax(getProductClassUrl, "get", "", function (res) {
            //alert(JSON.stringify(res));
            $scope.pageCount = res.pages;
            $scope.productClassData = res.list;
            $scope.$apply();
        });
    }
    //获取商品二级分类数据
    common.getProductSecondClass = function ($scope) {
        var startRow = 1;
        var endRow = 50;
        var getProductSecondClassUrl = Config.getProductSecondClassUrl + "startrow=" + startRow + "&endrow=" + endRow;
        common.ajax(getProductSecondClassUrl, "get", "", function (res) {
            //alert(JSON.stringify(res));
            $scope.productSecondClassData = res.list;
            $scope.$apply();
        });
    }
    //获取商品分类型号
    common.getProductClassType = function ($scope) {
        var startRow = 1;
        var endRow = 10;
        var getProductClassTypeUrl = Config.getProductClassTypeUrl + "startrow=" + startRow + "&endrow=" + endRow;
        common.ajax(getProductClassTypeUrl, "get", "", function (res) {
            //alert(JSON.stringify(res));
            $scope.pageCount = res.pages;
            $scope.productClassTypeData = res.list;
            $scope.$apply();
        });
    }
    //获取商品信息
    common.getGoodsInfo = function ($scope) {
        var startRow = 1;
        var endRow = 10;
        var paramData = {
            "startrow": startRow,
            "endrow": endRow
        };
        common.ajax(Config.getProductInfoUrl, "post", paramData, function (res) {
            //alert(JSON.stringify(res));
            //console.log(res)
            $scope.pageCount = res.pages;
            $scope.goodsInfoData = JSON.parse(res).list;
            $scope.$apply();
        });
    }
    //获取商品详情信息
    common.getProductDetail = function ($scope) {
        var startRow = 1;
        var endRow = 50;
        var getProductDetailUrl = Config.getProductDetailUrl + "?startrow=" + startRow + "&endrow=" + endRow;
        Comm.ajax(getProductDetailUrl, "get", "", function (res) {
            //alert(JSON.stringify(res));
            //console.log(res);
            $scope.productDetailData = JSON.parse(res);
            $scope.$apply();
        });
    }
    //获取商品活动信息
    common.getProductPromotion = function ($scope) {
        var startRow = 1;
<<<<<<< HEAD
        var endRow = 10;
        var searchProductPromotionUrl = Config.searchProductPromotionUrl + "?startrow=" + startRow + "&endrow=" + endRow;
        Comm.ajax(searchProductPromotionUrl, "get", "", function (res) {
            console.log(JSON.parse(res))
            $scope.productPromotionData = JSON.parse(res);
            $scope.pageCount = obj.pages;
=======
        var endRow = 50;
        var searchProductPromotionUrl = Config.searchProductPromotionUrl + "?startrow=" + startRow + "&endrow=" + endRow;
        Comm.ajax(searchProductPromotionUrl, "get", "", function (res) {
            //alert(JSON.stringify(res));
            //console.log(res);
            $scope.productPromotionData = JSON.parse(res);
>>>>>>> 7231c9ad8c41be4592bf9f392ccb071d3f7acd01
            $scope.$apply();
        });
    }
    //获取团购活动信息
    common.getGroupActivity=function ($scope) {
        var startRow = 1;
        var endRow = 50;
        var searchProductGroupBuyingUrl = Config.searchProductGroupBuyingUrl + "?startrow=" + startRow + "&endrow=" + endRow;
        Comm.ajax(searchProductGroupBuyingUrl, "get", "", function (res) {
            //alert(JSON.stringify(res));
            //console.log(res);
            $scope.groupActivityData = JSON.parse(res).list;
            $scope.$apply();
        });
    }
    //获取模块分类数据
    common.getModalClass=function ($scope) {
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


    common.ajaxAsync = function () {
        $.ajaxSetup({
            async: true
        });
    }
    //图片预览及上传
    common.uploadImg = function (fileDom, previews, imageForms) {
        //判断是否支持FileReader
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        }

        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function (e) {
            //获取图片dom
            //var img = document.getElementById("preview");
            //图片路径设置为读取的图片
            //img.src = e.target.result;
            $("#" + previews).attr('src', e.target.result);
        };

        reader.readAsDataURL(file);

        //上传图片到服务器
        var ajax_option = {
            url: Config.uploadImg,
            type: "post",
            success: function (responseText) {
                //console.log(responseText);
                //alert(responseText);
                //addModalClassImg = responseText;
                addModalClassImg = responseText.trim().replace("\"", "").replace("\"", ""); //去掉双引号
                //alert(addModalClassImg);
            },
            beforSubmit: function (formData, jqForm, options) {
                //提交之前的回调函数。参数详解：formData，数组对象，为表单的内容；jqForm，jQuery对象，
                //封装了表单的元素；options，之前设置的ajaxSubmit的option对象。
                //console.log(formData);
            },
        };
        $("#" + imageForms).ajaxSubmit(ajax_option);
        return false;
    }
<<<<<<< HEAD
    //
=======
    //比较日期
>>>>>>> 7231c9ad8c41be4592bf9f392ccb071d3f7acd01
    common.compareDate = function (checkStartDate, checkEndDate) {
        var arys1 = new Array();
        var arys2 = new Array();
        if (checkStartDate != null && checkEndDate != null) {
            arys1 = checkStartDate.split('-');
            var sdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
            arys2 = checkEndDate.split('-');
            var edate = new Date(arys2[0], parseInt(arys2[1] - 1), arys2[2]);
            if (sdate > edate) {
                //alert("开始日期不能大于结束日期");
                return false;
            } else {
                //alert("通过");
                return true;
            }
        }
    }
    common.cc = function (tt) {
        alert(tt);
    }
    return common;
}
