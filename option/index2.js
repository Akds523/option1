window.onload=function(){
    //获取元素
    const btns=document.querySelectorAll('input');
    const spans=document.querySelectorAll('span');
    const box=document.getElementById('left');
    const rs=document.getElementById('right');
    //给点击设置按钮添加点击事件
    btns[0].onclick=function(){
        right.style.display='block';
    }
    //给恢复按钮添加点击事件，并且设置样式
    btns[1].onclick=function(){
        box.style.cssText='';
    }
    //给确定按钮添加点击事件，并且设置样式
    btns[2].onclick=function(){
        right.style.display='none';
    }
}