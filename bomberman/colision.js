let enemy = document.getElementById('enemytest');

function getRandomPosition(){
    let randomX = Math.floor(Math.random()*780);
    let randomY = Math.floor(Math.random()*580);
    return [randomX,randomY];
}

function positionEnemies(){
    let randomPosition=getRandomPosition();
    let x=randomPosition[0];
    let y=randomPosition[1];
    enemy.style.top= x+'px';
    enemy.style.left= y+'px';
}

positionEnemies();

colision();
console.log(enemy.offsetTop);

function colision(){
    let player = document.getElementById('player');
    let enemy = document.getElementById('enemytest');
    if (enemy.offsetTop == player.offsetTop){
        alert ('colision');
    }else{
        collision = false;
    }
}