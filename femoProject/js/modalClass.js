//配置文件（数据请求接口）
var Config = Config();

$(function() {

})
var app = angular.module("myApp", []);
app.controller("modalClassCtr", function($scope) {
	$scope.isH = true;

	getModalClass($scope); //获取模块分类数据
	getProductClass($scope); //获取商品分类数据

	//根据用户输入搜索(模块分类搜索)
	$scope.search = function() {
		var search_txt = $("#search_txt").val();
		var search_type = $('#select_search option:selected').val();
		var searchUrl = Config.getModalClassUrl + "startrow=1&endrow=50&" + search_type + "=" + search_txt;
		//alert(searchUrl); 
		$.ajax({
			type: "get",
			url: searchUrl,
			dataType: "json",
			success: function(data) {
				//alert(JSON.stringify(data));
				//alert(data);
				$scope.modalClassData = JSON.parse(data).list;
				$scope.$apply();
			},
			complete: function() {

			}
		});
	}
	//商品分类搜索
	$scope.search2 = function() {
		var search_txt2 = $("#search_txt2").val();
		var searchUrl2 = Config.getProductClassUrl + "startrow=1&endrow=50&className=" + search_txt2;
		alert(searchUrl2);

		$.ajax({
			type: "get",
			url: searchUrl2,
			dataType: "json",
			success: function(data) {
				alert(JSON.stringify(data));
				//alert(data);
				$scope.productClassData = data.list;
				$scope.$apply();
			},
			complete: function() {

			}
		});
	}
	//根据模块id更新模块分类  updateProductClassId
	$scope.updateClass = function(modalId, productId) {
		//alert(productId);
		$scope.updateClassId = modalId;
		ModalClassId = modalId;
		$scope.$apply();
		$("#select_updateModal option[value=" + productId + "]").attr("selected", "selected");

	}
	//根据模块id更新模块分类  
	$scope.updateProductClass = function(productId) {
		//alert(productId);
		$scope.updateProductClassId = productId;
		ProductClassId = productId;
	}

})

//获取模块分类数据
function getModalClass($scope) {
	var startRow = 1;
	var endRow = 50;
	var getModalClassUrl = Config.getModalClassUrl + "startrow=" + startRow + "&endrow=" + endRow;
	//alert(getModalClassUrl);
	$.ajax({
		type: "get",
		url: getModalClassUrl,
		dataType: "json",
		success: function(data) {
			//alert(JSON.stringify(data));
			//alert(data);
			$scope.modalClassData = JSON.parse(data).list;
			$scope.$apply();
		},
		complete: function() {

		}
	});
}
//获取商品分类数据
function getProductClass($scope) {
	var startRow = 1;
	var endRow = 50;
	var getProductClassUrl = Config.getProductClassUrl + "startrow=" + startRow + "&endrow=" + endRow;
	//alert(getProductClassUrl);
	$.ajax({
		type: "get",
		url: getProductClassUrl,
		dataType: "json",
		success: function(data) {
			//alert(JSON.stringify(data)); 
			$scope.productClassData = data.list;
			$scope.$apply();
		},
		complete: function() {

		}
	});
}
//添加模块分类 
function addModalClass() {
	var select_addModal = $('#select_addModal option:selected').val();
	var modalName_add = $("#modalName_add").val();
	var modalPath_add = $("#modalPath_add").val();
	//var classificationImg = "upload/newimg.png";
	if(!select_addModal) {
		alert("请选择商品分类");
		return;
	} else if(!modalName_add) {
		alert("请输入分类名称");
		return;
	} else if(!modalPath_add) {
		alert("请输入分类路径");
		return;
	}

	var getAddModalClassUrl = Config.getAddModalClassUrl + "classificationName=" + modalName_add + "&classificationImg=" + addModalClassImg + "&classificationPath=" + modalPath_add + "&classificationProductId=" + select_addModal;
	//alert(getAddModalClassUrl);
	$.ajax({
		type: "get",
		url: getAddModalClassUrl,
		dataType: "json",
		success: function(data) {
			//alert(JSON.stringify(data));
			alert("添加成功");
			location.reload(); //刷新当前页面
			//$("#myModal").modal('hide');
		},
		complete: function() {

		}
	});
}
//添加商品分类
function addProductClass() {
	var productClassName_add = $("#productClassName_add").val();
	var productClassRemark_add = $("#productClassRemark_add").val();
	if(!productClassName_add) {
		alert("请输入分类名称");
		return;
	} else if(!productClassRemark_add) {
		alert("请输入备注");
		return;
	}

	var getAddProductClassUrl = Config.getAddProductClassUrl + "className=" + productClassName_add + "&remark=" + productClassRemark_add;
	//alert(getAddProductClassUrl);
	$.ajax({
		type: "get",
		url: getAddProductClassUrl,
		dataType: "json",
		success: function(data) {
			//alert(JSON.stringify(data));
			alert("添加成功");
			location.reload(); //刷新当前页面 
		},
		complete: function() {

		}
	});
}
//更新模块分类 
function updateModalClass() {
	var select_updateModal = $('#select_updateModal option:selected').val();
	var modalName_update = $("#modalName_update").val();
	var modalPath_update = $("#modalPath_update").val();
	var classificationImg = "upload/newimg.png";

	if(!select_updateModal) {
		alert("请选择商品分类");
		return;
	} else if(!modalName_update) {
		alert("请修改模块名称");
		return;
	} else if(!modalPath_update) {
		alert("请修改分类路径");
		return;
	}

	var getUpdateModalClassUrl = Config.getUpdateModalClassUrl +
		"classificationName=" + modalName_update + "&classificationImg=" +
		classificationImg + "&classificationPath=" + modalPath_update +
		"&classificationProductId=" + select_updateModal + "&classificationId=" + ModalClassId;
	//alert(getUpdateModalClassUrl);
	$.ajax({
		type: "get",
		url: getUpdateModalClassUrl,
		dataType: "json",
		success: function(data) {
			//alert(JSON.stringify(data));
			alert("更新成功");
			location.reload(); //刷新当前页面 
		},
		complete: function() {

		}
	});
}
//更新商品分类 
function updateProductClass() {
	var className_update = $("#className_update").val();
	var productClassRemark_update = $("#productClassRemark_update").val();

	if(!className_update) {
		alert("请修改商品分类名称");
		return;
	} else if(!productClassRemark_update) {
		alert("请修改备注");
		return;
	}

	var getUpdateProductClassUrl = Config.getUpdateProductClassUrl +
		"className=" + className_update + "&remark=" +
		productClassRemark_update + "&productClassId=" + ProductClassId;
	//alert(getUpdateProductClassUrl);
	$.ajax({
		type: "get",
		url: getUpdateProductClassUrl,
		dataType: "json",
		success: function(data) {
			//alert(JSON.stringify(data));
			alert("更新成功");
			location.reload(); //刷新当前页面 
		},
		complete: function() {

		}
	});
} 

//图片预览功能及上传
function imgPreview(fileDom) {
	//判断是否支持FileReader
	if(window.FileReader) {
		var reader = new FileReader();
	} else {
		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	}

	//获取文件
	var file = fileDom.files[0];
	var imageType = /^image\//;
	//是否是图片
	if(!imageType.test(file.type)) {
		alert("请选择图片！");
		return;
	}
	//读取完成
	reader.onload = function(e) {
		//获取图片dom
		var img = document.getElementById("preview");
		//图片路径设置为读取的图片
		img.src = e.target.result;  
	};
	
	reader.readAsDataURL(file);
	
	 //上传图片到服务器
	var ajax_option = {
		url: Config.uploadImg,
		type: "post", 
		success: function(responseText) {
			//console.log(responseText);
			alert(responseText);
			addModalClassImg=responseText;
		},
		beforSubmit: function(formData, jqForm, options) {
			//提交之前的回调函数。参数详解：formData，数组对象，为表单的内容；jqForm，jQuery对象，
			//封装了表单的元素；options，之前设置的ajaxSubmit的option对象。
			//console.log(formData); 
		},
	}; 
	$("#imageForm").ajaxSubmit(ajax_option); 
	return false; 
}