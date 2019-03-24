var Reg=function(){
    //获取要验证的表单控件
    var uname=document.getElementsByName("uname")[0];
    var pwd=document.getElementsByName("pwd")[0];
    var email=document.getElementsByName("email")[0];
    // 验证表单控件是否合法
    var unameReg=/^\w{6,16}$/;
    if(!unameReg.test(uname.value)){
        alert("用户名不合法");
        uname.focus();//设置焦点
        return false;//阻止表单提交
    }
    var pwdReg=/^[\w!@#\$\*]{6,16}$/;
    if(!pwdReg.test(pwd.value)){
        alert("密码不合法");
        pwd.focus();
        return false;
    }
    var emailReg=/^[\w\-]{5,17}@\w+\.(cn|com|net)$/;
    if(!emailReg.test(email.value)){
        alert("邮箱不合法");
        email.focus();
        return false;

    }
}