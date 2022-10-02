

// --------- scroll top --------------//
let scrolll = document.querySelector('#scrolll');
window.addEventListener('scroll', ()=>{
   if (window.pageYOffset > 100) {
    scrolll.classList.add('scrolup')
   }
   else(
    scrolll.classList.remove('scrolup')
   )
});
scrolll.addEventListener('click', ()=>{
    window.scroll(0, 0);
})



// --------- scroll top --------------//
let menubar = document.querySelector('.menu-bar');
window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 100) {
     
     menubar.classList.add('backg')
    }
    else(
     menubar.classList.remove('backg')
    )
 });



// --------- side-bar open --------------//
let sideBar = document.querySelector('#sidee-bar');
function opeenBtn(){
    sideBar.classList.add('active');
}
function closebtn(){
    sideBar.classList.remove('active');
}


// ----------- display text---------//

let displaytext = document.getElementById('display-text');
let showtext=()=>{
   displaytext.classList.toggle('show-text');
   if (  displaytext.classList.contains('show-text')) {
      document.getElementById('showtext-btn').innerText = 'Less';
      
   }else{
    document.getElementById('showtext-btn').innerText= 'More';
   }
}



// --------------- Preloader ------------//

let Preloader = document.querySelector('#preloader');

window.addEventListener('load', ()=>{
    Preloader.style.display='none';
})