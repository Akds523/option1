/**
 * Created by qyk on 2017/12/20.
 */
window.onload=function(){
   const btns=document.querySelectorAll('input');
   const box=document.getElementById('left');
   const right=document.getElementById('right');
   const spans=right.querySelectorAll('span');
   //给第一个（点击设置）添加点击事件
    btns[0].onclick=function(){
        right.style.display='block';
    }
    //给第二个按钮（恢复）添加点击事件
    btns[1].onclick=function(){
        box.style.cssText='';
    }
    btns[2].onclick=function(){
        right.style.display='none';
    }
    spans[0].onclick=function(){
        box.style.background='#f80a0a';
    }
    spans[1].onclick=function(){
        box.style.background='#ffff00';
    }
    spans[2].onclick=function(){
        box.style.background='#5a94ef';
    }
    spans[3].onclick=function(){
        box.style.width='100px';
    }
    spans[4].onclick=function(){
        box.style.width='200px';
    }
    spans[5].onclick=function(){
        box.style.width='300px';
    }
     spans[6].onclick=function(){
        box.style.height='100px';
     }
     spans[7].onclick=function(){
         box.style.height='200px';
     }
     spans[8].onclick=function(){
         box.style.height='300px';
     }
}
