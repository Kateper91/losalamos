const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    if(document.body.classList.contains('dark')){
        sessionStorage.setItem('dark-mode','true');
    }else{
        sessionStorage.setItem('dark-mode','false');
    }
});
if(sessionStorage.getItem('dark-mode')=== 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.toggle('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}
