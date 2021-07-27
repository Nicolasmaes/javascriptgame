let bomb = document.getElementById('bomb');
/* let enemy_0 = document.getElementById('enemy-0');
let enemy_1 = document.getElementById('enemy-1');
let enemy_2 = document.getElementById('enemy-2');
let enemy_3 = document.getElementById('enemy-3');
let enemy_4 = document.getElementById('enemy-4'); */
console.log(enemy_0.offsetTop);
console.log(enemy_0.offsetLeft);

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

        for (let i = 0; i < 5; i++) {
         
            console.log(enemies[i]);
            if(enemies[i].offsetTop >= bomb.offsetTop -24 && enemies[i].offsetTop <= bomb.offsetTop +24 &&
                enemies[i].offsetLeft >= bomb.offsetLeft -24 && enemies[i].offsetLeft <= bomb.offsetLeft +24){
                    setTimeout (()=>enemies[i].style.display="none",2001);
                
            }
            
        }
    }
});


/* const doomGuy = document.getElementById('player');
const enemies = document.getElementsByClassName('enemies');
colisionDetect(doomGuy.offsetLeft, doomGuy.offsetTop, enemies [0]);
function colisionDetect(x, y, enemy){
 */
/*     if ((y < enemy.offsetTop + enemy.offsetHeight &&
        y + doomGuy.offsetHeight > enemy.offsetTop) &&
        (x < enemy.offsetLeft + enemy.offsetWidth &&
        x + doomGuy.offsetWidth > enemy.offsetLeft)) {
            
            console.log('boom'); 
        return true;} 
    else {
        return false}
          
} */

/* document.addEventListener('keydown', function(event) {
    console.log(player.style.top);
    console.log(player.style.left);
  if (event.code == 'ArrowUp') {
    if(player.offsetTop >=0 && !colisionDetect (player.offsetLeft, player.offsetTop - moveSize, enemies [0])){ 
        
      playerWalk = playerWalk + 1;
      if(playerWalk % 2 == 1)
          this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/dos-1.png')";
      else
          {this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/dos-2.png')";}
      player.style.top = (player.offsetTop - moveSize) + "px";}
  else {
    player.style.backgroundImage="url('assets/doomGuy/mort-1.png')";
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-2.png')", 500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-3.png')", 1000);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-4.png')", 1500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-5.png')", 2000);
    setTimeout (()=>alert('dead'), 2500);
    
  } */