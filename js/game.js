let gameContainer = document.getElementById('gameContainer');
let gameText = document.getElementById('gameText');
let weapons = [];

for(let i=0; i<gameContainer.childElementCount; i++){
    weapons.push(gameContainer.children[i]);
}

gameContainer.addEventListener('click', (e)=>{
    let playerWeaponText = document.createElement('p');
    let aiWeaponText = document.createElement('p');
    let playerWeapon = document.getElementById('playerWeapon');
    let aiWeapon = document.getElementById('aiWeapon');

    let player = playerWeaponText.textContent = e.target.id;
    let ai = aiWeaponText.textContent = weapons[Math.floor(Math.random()*gameContainer.childElementCount)].id;
    if(playerWeapon.childElementCount != 0){
        while(playerWeapon.hasChildNodes())
            playerWeapon.removeChild(playerWeapon.firstChild);
    };

    if(aiWeapon.childElementCount != 0){
        while(aiWeapon.hasChildNodes())
            aiWeapon.removeChild(aiWeapon.firstChild);
    }
    playerWeapon.appendChild(playerWeaponText);
    aiWeapon.appendChild(aiWeaponText);

    if(player === weapons[0].id && ai === weapons[1].id || 
        player === weapons[1].id && ai === weapons[2].id || 
        player === weapons[2].id && ai === weapons[0].id){
        gameText.textContent = 'You Lost';
    }
    else if(player === weapons[0].id && ai === weapons[2].id || 
        player === weapons[1].id && ai === weapons[0].id || 
        player === weapons[2].id && ai === weapons[1].id){
            gameText.textContent = 'You Win';
    }
    else{
        gameText.textContent = "It's a tie!";
    }
});


