var Reg=function (argsArr) {
    var unameReg=/^\w{6,16}$/;
    var pwdReg=/^[\w!@#\$\*]{6,16}$/;
    var emailReg=/^[\w\-]{5,17}@\w+\.(cn|com|net)$/;
    //获取表单控件
    for (var i=0;i<argsArr.length;i++){
        // 要验证的表单控件
        var controls=document.getElementsByName(argsArr[i])[0];
        // 正则表达式
        var reg=eval(argsArr[i]+"Reg");
        if(!reg.test(controls.value)){
            alert("error!");
            controls.focus();
            return false;
        }

    }
}