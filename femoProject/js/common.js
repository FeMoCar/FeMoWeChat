/**
共用功能类
调用方法
var Comm = Common();
Comm.Func();
**/
function Common() {
	var common = {};
	//ajax封装
	common.ajax = function(_url, paramData, Type, callBack) {
		$.ajax({
			type: Type,
			url: _url,
			dataType: "json",
			data: paramData
			success: function(data) {
				callBack(data);
			},
			complete: function() {

			}
		});
	}
	common.ccc = function(tt) {
		alert(tt);
	}
	return common;
}