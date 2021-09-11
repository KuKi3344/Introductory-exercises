	function setCookieValue(name, value) {
 var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+value + ";path=/";
	}
 
	
 
 
	//获取 cookie 值的函数,创建一个函数用户返回指定 cookie 的值
	//cname:名称，你之前设置的名称
	function getCookieValue(name){//获取指定名称的cookie的值 
	var cookies = document.cookie;
	 var list = cookies.split(";");     // 解析出名/值对列表
	      
	 for(var i = 0; i < list.length; i++) {
	 var arr = list[i].split("=");   // 解析出名和值
	 if(arr[0] == name)
	 return decodeURIComponent(arr[1]);   // 对cookie值解码
	 } 
	 return "";

	}