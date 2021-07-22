const player = document.getElementById('player');
const player2 = document.getElementById('player2');
const moveSize =24;
var playerWalk = 0;
var playerWalk2 = 0;



  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
      if(player.offsetTop >=0 && !colisionDetect (player.offsetLeft, player.offsetTop - moveSize, enemies [0])){ 
        console.log('boom');}
        else{
      playerWalk = playerWalk + 1;
      if (player.offsetTop<10) {
      } else {
        if (playerWalk % 2 == 1) {
          player.style.backgroundImage = "url('img/dos.png')";
          }else{
          player.style.backgroundImage = "url('img/dos2.png')";
          }
        player.style.top = (player.offsetTop - moveSize) + "px";
      }
    }
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if (player.offsetLeft>550) {
    } else {
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/droite.png')";
        }else{
        player.style.backgroundImage = "url('img/droite2.png')";
        }
      player.style.left = (player.offsetLeft + moveSize) + "px";
    }

  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if (player.offsetTop>750) {
    } else {
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/face.png')";
        }else{
        player.style.backgroundImage = "url('img/face2.png')";
        }
        player.style.top = (player.offsetTop + moveSize) + "px"; 
    }

  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if (player.offsetLeft<10) {
    } else {
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/gauche.png')";
        }else{
        player.style.backgroundImage = "url('img/gauche2.png')";
        }
        player.style.left = (player.offsetLeft - moveSize) + "px";
        }
    }
    console.log(player.offsetTop);
    console.log(player.offsetLeft);
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') {
      playerWalk2 = playerWalk2 + 1;
      if (playerWalk2 % 2 == 1) {
      player2.style.backgroundImage = "url('img/player2/dos.png')";
      }else{
      player2.style.backgroundImage = "url('img/player2/dos2.png')";
      }
    player2.style.top = (player2.offsetTop - moveSize) + "px";
  } else if (event.code == 'KeyD') {
    playerWalk2 = playerWalk2 + 1;
      if (playerWalk % 2 == 1) {
      player2.style.backgroundImage = "url('img/player2/droite.png')";
      }else{
      player2.style.backgroundImage = "url('img/player2/droite2.png')";
      }
    player2.style.left = (player2.offsetLeft + moveSize) + "px";
  } else if (event.code == 'KeyS') {
    playerWalk2 = playerWalk2 + 1;
      if (playerWalk % 2 == 1) {
      player2.style.backgroundImage = "url('img/player2/face.png')";
      }else{
      player2.style.backgroundImage = "url('img/player2/face2.png')";
      }
      player2.style.top = (player2.offsetTop + moveSize) + "px";
  } else if (event.code == 'KeyA') {
    playerWalk2 = playerWalk2 + 1;
      if (playerWalk2 % 2 == 1) {
      player2.style.backgroundImage = "url('img/player2/gauche.png')";
      }else{
      player2.style.backgroundImage = "url('img/player2/gauche2.png')";
      }
      player2.style.left = (player2.offsetLeft - moveSize) + "px";
      }
});