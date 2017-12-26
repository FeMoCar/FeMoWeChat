/**
 配置文件
 共用功能类
 调用方法
 var Config = Config();
 Config.Func();
 */
var host = "http://39.104.15.177:8080/FeMoDemo/";
var hostPath = "http://39.104.15.177:8080/FeMoDemo";
function Config() {
	var config = {
		"getUserInfoUrl": host + "WxUser/selectall?", //后台查询所有用户信息接口
		"getUserInfoSearchUrl": host + "WxUser/selectuser?", //微信查询用户信息接口
		"getModalClassUrl": host + "Classification/selectClassification?", //后台查询模块分类信息
		"getAddModalClassUrl": host + "Classification/addClassification?", //后台添加模块分类信息
		"getUpdateModalClassUrl": host + "Classification/updateClassification", //后台更新模块分类信息

		"uploadImg": host + "FileUpload/SaveFile", //图片上传接口
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

        "getProductInfoUrl": host + "Product/selectAll",//获取商品信息
        "updateProductInfoUrl": host + "Product/updateProduct",//更新商品信息
        "addProductInfoUrl": host + "Product/addProduct",//添加商品信息

        "getProductRIMGUrl": host + "ProductRIMG/selectAll",//获取商品轮播图
        "addProductRIMGUrl": host + "ProductRIMG/addProductrimg",//添加商品轮播图
        "updateProductRIMGUrl": host + "ProductRIMG/updateProductrimg",//更新商品轮播图
	}
	return config;
}

 