const toggleBtn = document.querySelector('.toggle-bar');
const toggleBtnicon = document.querySelector('.toggle-bar i');
const dropdownmenu = document.querySelector('.dropdown');

toggleBtn.onclick = function () {
    dropdownmenu.classList.toggle('open');
    var isopen = dropdownmenu.classList.contains('open')
    toggleBtnicon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}




function changeBg(){
    var navbar = document.getElementById('navs');
    var navtxt = document.querySelectorAll('.hvr-clr');
    var blacklogo = document.getElementById('logg');
    
    var scrollValue = window.scrollY;
    if(scrollValue < 300){
        blacklogo.classList.remove('logo2')
        navbar.classList.remove('bgColor');
        navtxt.forEach(el =>{
            el.classList.remove('bgtxtcolor');
        })
        
    }
    else{
        blacklogo.classList.add('logo2')
        navbar.classList.add('bgColor');
        navtxt.forEach(el => {
            el.classList.add('bgtxtcolor');
        }) 
    }
}

window.addEventListener('scroll',changeBg);


