let bomb = document.getElementById('bomb');

document.addEventListener('keydown', function(event){
    if(event.code == 'Space'){
        bomb.style.display = 'block';
        bomb.style.top = player.offsetTop + 'px';
        bomb.style.left = player.offsetLeft + 'px';
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode1.png')", 1100);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode2.png')", 1200);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode3.png')", 1300);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode4.png')", 1500);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode5.png')", 1600);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode6.png')", 1700);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode7.png')", 1800);
        setTimeout (()=>bomb.style.backgroundImage = "url('img/explosion/explode8.png')", 1900);
        setTimeout (()=>bomb.style.display = 'none', 2000);
        bomb.style.backgroundImage = "url('img/football.png')";
    }
});