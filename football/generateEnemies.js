addEnemies();

function addEnemies(){
    for (let i = 0; i < 5; i++) {   
        let div = document.createElement('div');  
        div.setAttribute('class','enemies');
        div.setAttribute('id','enemy-'+i);
        document.getElementById('gameContainer').appendChild(div);
        positionEnemies(div);
    }
}
function getRandomPosition(){
    let randomX = Math.floor(Math.random()*780);
    let randomY = Math.floor(Math.random()*580);
    return [randomX,randomY];
}

function positionEnemies(enemy){
    let randomPosition=getRandomPosition();
    let x=randomPosition[0];
    let y=randomPosition[1];
    enemy.style.top= x+'px';
    enemy.style.left= y+'px';
}