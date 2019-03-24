window.onload=function () {
    var Tab=function () {
        // 索引
        this.index=0;
        // 标题
        this.titles=document.getElementsByClassName("title")[0].children;
        // console.log(this.titles);
        // 列表
        this.lists=document.getElementsByClassName("list");
    }
    Tab.prototype.tabs=function () {
        var _this=this;
        // 绑定事件
        for(var i=0;i<this.titles.length;i++){
            // console.log(i);
            this.titles[i].x=i;
            this.titles[i].onmouseover=function () {
                // console.log(i);
                // 先隐藏上一个
                _this.titles[_this.index].className="";
                _this.lists[_this.index].style.display="none";
               // 再显示
                _this.titles[this.x].className="current";
                _this.lists[this.x].style.display="block";
                // 把当前索引作为下一次要隐藏的索引
                _this.index=this.x;
            }
        }
    }
    // 实例化子类
    // var tab=new Tab();
    // tab.tabs();
    new Tab().tabs();
}