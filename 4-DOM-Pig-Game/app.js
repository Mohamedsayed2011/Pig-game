/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var  scores,activePlaye,currentScore,check,lastvalue ;



newgame();

document.querySelector('.btn-roll').addEventListener('click',function(){

var dice=Math.floor(Math.random()*6)+1;
var pic=document.querySelector('.dice');
pic.style.display='block';
pic.src='dice-'+dice+'.png';

if(dice==lastvalue)
{
   
    currentScore=0;
    document.querySelector('#current-'+ activePlayer).textContent=0;
    nextPlayer();
}
else
{
    currentScore=currentScore+dice;
    if (dice!=1)
    {
         lastvalue=dice;
        document.getElementById('current-' +activePlayer).textContent=currentScore;
    }
     else
     {
        nextPlayer();
     }  
     if (check==true)
     {
         alert ("Player "+ (activePlayer+1)+ "  " +"won");
         newgame();
     }
    
}

})

///////////////////////////////////////
document.querySelector('.btn-hold').addEventListener('click',function(){
if(!check)
{
    //add current score
scores[activePlayer]+=currentScore; 

document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
if (scores[activePlayer]>=20)
{
  
    document.querySelector('#name-'+activePlayer).textContent="Winner!";
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
   
   check=true;
   
}

else
{
    nextPlayer();
}

}



})
//////////////////////////////////////////////////
document.querySelector('.btn-new').addEventListener('click',function(){
newgame();




})

////////////////////////////////////////////////////////
function nextPlayer(){
    
    activePlayer === 0 ? activePlayer=1 :activePlayer=0;
    currentScore=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0; 
    document.querySelector('.dice').style.display='none';
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
}

function newgame()
{
   scores=[0,0];
   activePlayer=0;
  currentScore=0;
  lastvalue =0;
  check =false;
  document.querySelector(".player-0-panel").classList.add('active');
  document.querySelector(".player-1-panel").classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.dice').style.display='none';
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    
}

