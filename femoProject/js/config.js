/**
 配置文件
 共用功能类
 调用方法
 var Config = Config();
 Config.Func();
 */
var host = "http://39.104.15.177:8080/FeMoDemo/";
//var host = "http://127.0.0.1:8080/FeMoDemo/";
var hostPath = "http://39.104.15.177:8080/FeMoDemo";
function Config() {
	var config = {
		"getUserInfoUrl": host + "WxUser/selectall?", //后台查询所有用户信息接口
		"getUserInfoSearchUrl": host + "WxUser/selectuser?", //微信查询用户信息接口

		"getModalClassUrl": host + "Classification/selectClassification?", //后台查询模块分类信息
		"getAddModalClassUrl": host + "Classification/addClassification?", //后台添加模块分类信息
		"getUpdateModalClassUrl": host + "Classification/updateClassification", //后台更新模块分类信息

		"uploadImg": host + "FileUpload/SaveFile", //图片上传接口(单张）
        "uploadImgs": host + "FileUpload/SaveFiles", //轮播图上传接口（多张）

		"getProductClassUrl": host + "ProductClass/selectAll?", //获取商品分类
		"UpdateProductClassUrl": host + "ProductClass/updateProductClass", //更新商品分类
		"getAddProductClassUrl": host + "ProductClass/addProductClass?", //添加商品分类

		"getProductSecondClassUrl": host + "ProductSecondClass/selectProductSecondclass?",//获取商品二级分类
		"addProductSecondClassUrl": host + "ProductSecondClass/addProductSecondclass",//添加商品二级分类
		"updateProductSecondClassUrl": host + "ProductSecondClass/updateProductSecondclass",//更新商品二级分类

		"getProductClassTypeUrl": host + "ProductSpec/selectAll?",//获取商品分类型号
		"addProductClassTypeUrl": host + "ProductSpec/addProductSpec",//添加商品分类型号
		"updateProductClassTypeUrl": host + "ProductSpec/updateProductSpec",//更新商品分类型号

		"getUserShareUrl": host + "UserShare/selectAllById?", //查询用户分享信息
		"deleteUserShareUrl": host + "UserShare/updateUserShare", //删除用户享信息

		"getInformation": host + "Information/selectById?", //查询用户反馈信息
		"deleteInformation": host + "Information/updateInformation", //删除用户反馈信息

		"getEvaluate": host + "Evaluate/selectAllById?", //查询用户评论信息
		"deleteEvaluate": host + "Evaluate/updateEvaluate", //删除用户班次论信息

		"getUserCard": host + "CardCheck/selectAll?", //查询用户证件信息

		"getUserReserve": host + "WxUserReserve/selectAll?", //查询用户预约信息
		"updateUserReserve": host + "WxUserReserve/updateWxUserreserve", //更新用户预约信息

		"getProductInfoUrl": host + "Product/selectAll",//获取商品信息
        "updateProductInfoUrl": host + "Product/updateProduct",//更新商品信息
        "addProductInfoUrl": host + "Product/addProduct",//添加商品信息

        "getProductRIMGUrl": host + "ProductRIMG/selectAll",//获取商品轮播图
        "addProductRIMGUrl": host + "ProductRIMG/addProductrimg",//添加商品轮播图
        "updateProductRIMGUrl": host + "ProductRIMG/updateProductrimg",//更新商品轮播图

        "getProductDetailUrl": host + "Productdetail/selectAll",//获取商品详情
        "addProductDetailUrl": host + "Productdetail/addProductDetail",//添加商品详情
        "updateProductDetailUrl": host + "Productdetail/updateProductDetail",//更新商品详情
        "searchProductDetailUrl": host + "Productdetail/selectByid",//查询商品详情

        "addProductPromotionUrl": host + "ProductPromotion/addProductPromotion",//添加促销活动信息
        "updateProductPromotionUrl": host + "ProductPromotion/updateProductPromotion",//更新促销活动信息
        "searchProductPromotionUrl": host + "ProductPromotion/selectAllById",//查询促销活动信息

        "addProductGroupBuyingUrl": host + "ProductGroupBuying/addProductGroupBuying",//添加团购活动信息
        "updateProductGroupBuyingUrl": host + "ProductGroupBuying/updateProductGroupBuying",//更新团购活动信息
        "searchProductGroupBuyingUrl": host + "ProductGroupBuying/selectAllById",//查询团购活动信息

        "selectProductOrderUrl": host + "Order/selectProductOrder",//查询商品订单
        "selectLeaseOrderUrl": host + "Order/selectLeaseOrder",//查询租赁订单
        "searchOrderUrl": host + "Order/selectOrderById",//根据类型查询订单

        "addClassificationRimgUrl": host + "ClassificationRimg/addClassificationRimg",//添加板块轮播图
        "updateClassificationRimgUrl": host + "ClassificationRimg/updateClassificationRimg",//更新板块轮播图
        "searchClassificationRimgUrl": host + "ClassificationRimg/selectAll",//根据ID查询轮播图
    }
	return config;
}

 