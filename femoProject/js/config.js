/**
 配置文件
 共用功能类
 调用方法
 var Config = Config();
 Config.Func();  
 */
/*var host = "http://39.104.15.177:8080/FeMoDemo/";*/
var host = "http://127.0.0.1:8080/FeMoDemo/";
function Config() {
	var config = {
		"getUserInfoUrl": host + "WxUser/selectall?", //后台查询所有用户信息接口
		"getUserInfoSearchUrl": host + "WxUser/selectuser?", //微信查询用户信息接口
		"getModalClassUrl": host + "Classification/selectClassification?", //后台查询模块分类信息
		"getAddModalClassUrl": host + "Classification/addClassification?", //后台添加模块分类信息
		"getUpdateModalClassUrl": host + "Classification/updateClassification?", //后台更新模块分类信息
		"uploadImg": host + "FileUpload/SaveFile", //图片上传接口
		"getProductClassUrl": host + "ProductClass/selectAll?", //获取商品分类
		"getUpdateProductClassUrl": host + "ProductClass/updateProductClass?", //更新商品分类
		"getAddProductClassUrl": host + "ProductClass/addProductClass?", //添加商品分类
		"getUserShareUrl": host + "UserShare/selectAllById?", //查询用户分享信息
		"deleteUserShareUrl": host + "UserShare/updateUserShare?", //删除用户享信息
	}
	return config;
}

 