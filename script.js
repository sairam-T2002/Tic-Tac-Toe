const box1=document.querySelector('.box1');
const box2=document.querySelector('.box2');
const box3=document.querySelector('.box3');
const box4=document.querySelector('.box4');
const box5=document.querySelector('.box5');
const box6=document.querySelector('.box6');
const box7=document.querySelector('.box7');
const box8=document.querySelector('.box8');
const box9=document.querySelector('.box9');
let xoro=0;
box1.addEventListener('click',function(){
    if(box1.innerHTML===''){
        if(xoro%2===0)
        {
            box1.insertAdjacentHTML('afterbegin','X');
        }else box1.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box2.addEventListener('click',function(){
    if(box2.innerHTML===''){
        if(xoro%2===0)
        {
            box2.insertAdjacentHTML('afterbegin','X');
        }else box2.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box3.addEventListener('click',function(){
    if(box3.innerHTML===''){
        if(xoro%2===0)
        {
            box3.insertAdjacentHTML('afterbegin','X');
        }else box3.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box4.addEventListener('click',function(){
    if(box4.innerHTML===''){
        if(xoro%2===0)
        {
            box4.insertAdjacentHTML('afterbegin','X');
        }else box4.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box5.addEventListener('click',function(){
    if(box5.innerHTML===''){
        if(xoro%2===0)
        {
            box5.insertAdjacentHTML('afterbegin','X');
        }else box5.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box6.addEventListener('click',function(){
    if(box6.innerHTML===''){
        if(xoro%2===0)
        {
            box6.insertAdjacentHTML('afterbegin','X');
        }else box6.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box7.addEventListener('click',function(){
    if(box7.innerHTML===''){
        if(xoro%2===0)
        {
            box7.insertAdjacentHTML('afterbegin','X');
        }else box7.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box8.addEventListener('click',function(){
    if(box8.innerHTML===''){
        if(xoro%2===0)
        {
            box8.insertAdjacentHTML('afterbegin','X');
        }else box8.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
box9.addEventListener('click',function(){
    if(box9.innerHTML===''){
        if(xoro%2===0)
        {
            box9.insertAdjacentHTML('afterbegin','X');
        }else box9.insertAdjacentHTML('afterbegin','O');
    }
    if(((box1.innerHTML===box2.innerHTML) && (box2.innerHTML===box3.innerHTML) && (box1.innerHTML!==''))||((box4.innerHTML===box5.innerHTML) && (box5.innerHTML===box6.innerHTML) && (box4.innerHTML!==''))||((box7.innerHTML===box8.innerHTML) && (box8.innerHTML===box9) && (box7.innerHTML!==''))||((box1.innerHTML===box4.innerHTML) && (box4.innerHTML===box7.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box6.innerHTML) && (box6.innerHTML===box9.innerHTML) && (box3.innerHTML!==''))||((box1.innerHTML===box5.innerHTML) && (box5.innerHTML===box9.innerHTML) && (box1.innerHTML!==''))||((box3.innerHTML===box5.innerHTML) && (box5.innerHTML===box7.innerHTML) && (box3.innerHTML!=='')))
    {
        xoro%2===0?document.querySelector('.start').innerHTML='X is the Winner':document.querySelector('.start').innerHTML='O is the Winner';
        document.querySelector('body').style.backgroundColor='rgb(43, 202, 43)';
    }
    xoro++;
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='gray';
    box1.innerHTML='';
    box2.innerHTML='';
    box3.innerHTML='';
    box4.innerHTML='';
    box5.innerHTML='';
    box6.innerHTML='';
    box7.innerHTML='';
    box8.innerHTML='';
    box9.innerHTML='';
    document.querySelector('.start').innerHTML='Start the game';
    xoro=0;
});