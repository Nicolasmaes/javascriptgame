setInterval(moveEnemies,1000);

function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        const enemies=document.getElementsByClassName('enemies');
       let random=Math.floor(Math.random()*4);
       // console.log(random);
        switch (random) {
                case 0:
                    if (enemies[i].offsetLeft <= 550 ) {
                enemies[i].style.top=enemies[i].offsetTop +40 +'px';
                enemies[i].style.left=enemies[i].offsetLeft +'px';  
            }
                
                break;
                case 1:
                    if ( enemies[i].offsetTop <= 550 ) {
                enemies[i].style.top=enemies[i].offsetTop +'px';
                enemies[i].style.left=enemies[i].offsetLeft +40 +'px';  
            }
                
                break;
                case 2:
                    if ( enemies[i].offsetLeft >= 10  ) {
                enemies[i].style.top=enemies[i].offsetTop +'px';
                enemies[i].style.left=enemies[i].offsetLeft -40 +'px';  
            }
                
                break;
            case 3:
                if (enemies[i].offsetTop >= 10 ) {
                enemies[i].style.top=enemies[i].offsetTop -40 +'px';
                enemies[i].style.left=enemies[i].offsetLeft +'px';  
                }
                
                break;
           
        
            default:
        }
    }
}