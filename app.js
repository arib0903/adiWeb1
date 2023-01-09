var scores, roundScore, activePlayer, gamePlaying;
init();



document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){//if gameplaying is true, then do all these
    //1.Random number:
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.display result:
    var x = document.querySelector('.dice');
    x.style.display = 'block';
    x.innerHTML = dice;


    //3.update round score if the rolled number was not a 1!
    if (dice !== 1){
      //add:
      roundScore += dice; //adds the round score and the random dice number rolled
      document.querySelector('#current-' + activePlayer).textContent = roundScore; //selected 'current-' active player...made the text content of that to the new roundscore number
    }else{
      nextPlayer()
    }//end of if statement
  }//end of gamePlay statement


})//end of .btn-roll function



document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
//add current score to GLOBAL score
    scores[activePlayer] += roundScore; //when active player is 0 or 1, calculate the score of round and GLOBAL
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; //selected the GLOBAL score and the current active player...placed the score calculated above

//check if player won the game
    if(scores[activePlayer] >= 100){
      document.querySelector('#name-' + activePlayer).textContent = "winner!"
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')// adds some css from the 'winner' class
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active') //removes the dot
      gamePlaying = false;//after game,  disables gameplay

    }else{
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
      roundScore = 0;

      document.getElementById('current-0').textContent = '0';//when player rolls a one, their score turns to zero
      document.getElementById('current-1').textContent = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');//when player rolls a one, their active switches
      document.querySelector('.player-1-panel').classList.toggle('active');

      //document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');

      document.querySelector('.dice').style.display = 'none'//goes to next player and back because no one has won the game
    }
  }

});//end of .btn-hold function



function nextPlayer(){
  //if              //then             //else
  activePlayer === 0 ? (activePlayer = 1, alert("player 2 turn, rolled a ONE")) : (activePlayer = 0, alert("player 1 turn, rolled a ONE")) ;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';//when player rolls a one, their score turns to zero
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');//when player rolls a one, their active switches
  document.querySelector('.player-1-panel').classList.toggle('active');

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none'

}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {//for creating new game
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;//allowed to play game
  document.querySelector('.dice').style.display = 'none'

  document.getElementById('current-0').textContent = '0';//when player rolls a one, their score turns to zero
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('name-0').textContent = "Player 1";
  document.getElementById('name-1').textContent = "Player 2";
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')
  document.querySelector('.player-1-panel').classList.remove('active')

}




/*
document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML =  '<em>' +  dice  + '</em>' ;

var x = document.querySelector('#score-1').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';
*/
