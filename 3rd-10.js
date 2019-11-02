window.onload=function(){
    const items=document.getElementsByClassName('item');
    const week=['!_!','@_@','#_#','&_&','*_*'];
    for(let i=0; i<items.length; i++){
        items[i].onclick=function(){//onclick为鼠标点击事件
            items[i].innerHTML=week[i];
            items[i].style.color='black';
        }
    }
};
var Moveout = document.getElementById("Moveout");
        var content = document.getElementById("content");
        //鼠标移入显示
        Moveout.onmouseover = function () {
            content.style.display = "!_!,@_@,#_#,&_&,*_*";
        }
        function Moveoutsover() {
            content.style.display = "!_!,@_@,#_#,&_&,*_*";
        }
        //鼠标移出隐藏
        Moveout.onmouseout = function () {
            content.style.display = "none";
        }              
        function MoveoutSout() {
            content.style.display = "none";
        };