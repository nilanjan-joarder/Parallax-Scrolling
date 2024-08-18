let plane = document.getElementById('plane');
let sky = document.getElementById('sky');
let welcome= document.getElementById('text');
let eagle= document.getElementById('bird');
window.addEventListener('scroll', function(){
    let value= window.scrollY;
    
    plane.style.left=value*-2+'px';
    sky.style.top=value*1+'px';   
    welcome.style.top=value*-1+'px';
    eagle.style.top=value*-0.5+'px';
    eagle.style.left=value*2.5+'px';
});