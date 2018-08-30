let playerOne = document.getElementById('p1')
let playerTwo = document.getElementById('p2')
let gameCount = document.getElementById('gameCount')
const gameCells = document.querySelectorAll('td')

// start the game with 'X' - onload at body (line 12)
function startGame(){

	for(let i = 0; i <=  8; i++)
		clearBox(i);

	document.tick = "X";
	document.winner = null;

	setMessage(document.tick + " get's to start.")
}

// set interactive message to user @ line 14
function setMessage(msg){
	document.getElementById("message").innerText =msg;
}

function nextMove(cell){
	if(document.winner != null){
		setMessage('Player ' + document.tick + " already won! ")

	} else if(cell.innerText == ''){
		cell.innerText = document.tick;
		switchTurn();		
		} else{
	setMessage("Pick another cell!")
	alert("please pick another cell!")
}

}

 
function switchTurn(){
	if(checkForWinner(document.tick)){
		setMessage("Congrats " + document.tick+ " , you won!")
		alert(document.tick + " already won!")
		document.winner = document.tick				
	} else if(document.tick == "X"){
		document.tick = "O";
		setMessage("It's " + document.tick + " turn now!.")
	} else {
		document.tick="X";
		setMessage("It's " + document.tick + " turn now!")
	}
}

// check for winning combo base on
function checkForWinner(tick){
	let result = false;
	if(checkRow(0, 1, 2, tick)|| 
	  checkRow(3, 4, 5, tick) || 
	  checkRow(6, 7, 8, tick) || 
	  checkRow(0, 3, 6, tick) || 
	  checkRow(1, 4, 7, tick) || 
	  checkRow(2, 5, 8, tick) || 
	  checkRow(0, 4, 8, tick) || 
	  checkRow(2, 4, 6, tick)){
	  	result = true;
	  }
		return result
}

// set a condition for checkForWinner's winning combos which if the winning combos happen, checkForWinner become true
function checkRow(a, b, c, tick){
	let result = false;
	if(getBox(a) == tick && getBox(b) == tick && getBox(c) == tick){
		result = true;
	}
	return result;
}

// get the id number of each tick box
function getBox(number){
	return document.getElementById(number).innerText;
}

function clearBox(number){
	document.getElementById(number).innerText = " ";
}

function ifTie(){
	const gameCells = document.querySelectorAll('td')
	for(var i = 0; i <=  8; i++){
		if(gameCells[i].innerText=="X" && gameCells[i].innerText== "O"){
			alert("is over, it is  adraw!")
		
		}
	}
}

ifTie()