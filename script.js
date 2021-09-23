const button=document.querySelector('button');
const search=document.querySelector('.search');
const input=document.querySelector('input'); 
button.onclick=function(){
    search.classList.toggle('active');
    input.focus();
}