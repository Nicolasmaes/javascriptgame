const player = document.getElementById('player');
const bush = document.getElementById('bush');
const bush2 = document.getElementById('bush2');
const bush3 = document.getElementById('bush3');
const moveSize = 24;
var playerWalk = 0;

  document.addEventListener('keydown', function(event) {
  console.log(player.style.top);
  console.log(player.style.left); 
    if (event.code == 'ArrowUp') {
      playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
      player.style.backgroundImage = "url('img/dos.png')";
      }else{
      player.style.backgroundImage = "url('img/dos2.png')";
      }
    player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
      player.style.backgroundImage = "url('img/droite.png')";
      }else{
      player.style.backgroundImage = "url('img/droite2.png')";
      }
    player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
      player.style.backgroundImage = "url('img/face.png')";
      }else{
      player.style.backgroundImage = "url('img/face2.png')";
      }
      player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
      player.style.backgroundImage = "url('img/gauche.png')";
      }else{
      player.style.backgroundImage = "url('img/gauche2.png')";
      }
      player.style.left = (player.offsetLeft - moveSize) + "px";
      }
});


//background-image: url('img/face.png');