export default function showCheck(){
    const checkBox=document.getElementById('check-box');
    checkBox.style.opacity=1;
    checkBox.style.transition='opacity 1s' 
    setTimeout(()=>{
        checkBox.style.transition='opacity 1s' 
        checkBox.style.opacity=0;
    },2000)  
}