var turn;
var win; 
var x = false;
var o = false;
var ties = 0;
var totalGames;
var playAgain;
var currentPlayer = "X";
var squares = new Array(9);
var xWins = 0;
var oWins = 0;
var i;
var numTurns = 0;
var nameOne = "X";
var nameTwo = "O";	

var checkWin = function(){
	numTurns++;	
	if(
	((squares[0] == "X") && (squares[1] == "X") &&  (squares[2] == "X")) ||
	((squares[3] == "X") && (squares[4] == "X") &&  (squares[5] == "X")) ||
	((squares[6] == "X") && (squares[7] == "X") &&  (squares[8] == "X")) ||
	
	((squares[0] == "X") && (squares[3] == "X") &&  (squares[6] == "X")) ||
	((squares[1] == "X") && (squares[4] == "X") &&  (squares[7] == "X")) ||
	((squares[2] == "X") && (squares[5] == "X") &&  (squares[8] == "X")) ||
	
	((squares[0] == "X") && (squares[4] == "X") &&  (squares[8] == "X")) ||
	((squares[2] == "X") && (squares[4] == "X") &&  (squares[6] == "X"))
	)
	{x = true;}
	else if(
	((squares[0] == "O") && (squares[1] == "O") &&  (squares[2] == "O")) ||
	((squares[3] == "O") && (squares[4] == "O") &&  (squares[5] == "O")) ||
	((squares[6] == "O") && (squares[7] == "O") &&  (squares[8] == "O")) ||
	
	((squares[0] == "O") && (squares[3] == "O") &&  (squares[6] == "O")) ||
	((squares[1] == "O") && (squares[4] == "O") &&  (squares[7] == "O")) ||
	((squares[2] == "O") && (squares[5] == "O") &&  (squares[8] == "O")) ||
	
	((squares[0] == "O") && (squares[4] == "O") &&  (squares[8] == "O")) ||
	((squares[2] == "O") && (squares[4] == "O") &&  (squares[6] == "O"))
	)
	{o = true;}
	if (x == true){
		xWins++;
		document.getElementById("xWins").innerHTML = "Victories: " + xWins;
		displayNames();
		alert(nameOne + " wins!");
	}
	else if (o == true){
		oWins++;
		document.getElementById("oWins").innerHTML = "Victories: " + oWins;
		displayNames();		
		alert(nameTwo + " wins!");
	}
	else if (numTurns == 9){
		ties++;
		document.getElementById("ties").innerHTML = "Ties: " + ties;
		displayNames();
		alert("Tie game.");
		
		}
}	

var currentTurn = function(){
	if (currentPlayer == "X"){
		currentPlayer = "O";} 
	else{ 
		currentPlayer = "X";}
		if (currentPlayer == "X"){
			document.getElementById("xInfo").innerHTML = nameOne + " <-- Your Turn";
			document.getElementById("oInfo").innerHTML = nameTwo;
			document.getElementById("xInfo").style.fontWeight = "bold";
			document.getElementById("oInfo").style.fontWeight = "normal";
		}
		else{
			document.getElementById("oInfo").innerHTML = nameTwo + " <-- Your Turn";
			document.getElementById("xInfo").innerHTML = nameOne;
			document.getElementById("oInfo").style.fontWeight = "bold";
			document.getElementById("xInfo").style.fontWeight = "normal";}
}

var displayNames = function() {
	if (nameOne != null){
		if ((x == true) || (o == true) || (numTurns == 9)){
			document.getElementById("xInfo").innerHTML = nameOne;
			document.getElementById("oInfo").innerHTML = nameTwo;
			document.getElementById("xInfo").style.fontWeight = "normal";
			document.getElementById("oInfo").style.fontWeight = "normal";
		}
		else if((x == false) && (o == false) && (numTurns < 9)){
			document.getElementById("xInfo").innerHTML = nameOne + " <-- Your Turn";
			document.getElementById("xInfo").style.fontWeight = "bold";
		}
	}
	if (nameTwo !=null){
		if ((x == true) || (o == true)){
			document.getElementById("xInfo").innerHTML = nameOne
			document.getElementById("oInfo").innerHTML = nameTwo;
			document.getElementById("xInfo").style.fontWeight = "normal";
			document.getElementById("oInfo").style.fontWeight = "normal";
		}
		else if((x == false) && (o == false)){
			document.getElementById("xInfo").innerHTML = nameOne + " <-- Your Turn";
			document.getElementById("xInfo").style.fontWeight = "bold";
		}
	}
}	

var handleClick = function(){
	if ((document.getElementById(this.id).className == "blank") && (x == false) && (o == false)){
		setTile(this);currentTurn();checkWin();
	}
}

var handleMouseOut = function(){
	if ((document.getElementById(this.id).className == "blank") && (x == false) && (o == false)){
		document.getElementById(this.id).style.backgroundColor = "transparent";
	}	
}

var handleMouseOver =  function(){
	if ((document.getElementById(this.id).className == "blank") && (x == false) && (o == false)){
		if (currentPlayer == "X"){
			document.getElementById(this.id).style.backgroundColor = "blue";
		}
		else{
			document.getElementById(this.id).style.backgroundColor = "red";	
		}
	}	
}

var newGame = function(){
	for (var i = 1; i < 10; i++){
		document.getElementById("square"+i).className = "blank";
		document.getElementById("square"+i).style.backgroundColor = "transparent";
		squares[i-1] = "";
	}
	currentPlayer = "X";
	x = false;
	o = false;
	numTurns = 0;
	if (currentPlayer == "X"){
		document.getElementById("xInfo").innerHTML = nameOne + " <-- Your Turn";
		document.getElementById("oInfo").innerHTML = nameTwo;
		document.getElementById("xInfo").style.fontWeight = "bold";
		document.getElementById("oInfo").style.fontWeight = "normal";
	}
	else{
		document.getElementById("oInfo").innerHTML = nameTwo + " <-- Your Turn";
		document.getElementById("xInfo").innerHTML = nameOne;
		document.getElementById("oInfo").style.fontWeight = "bold";
		document.getElementById("xInfo").style.fontWeight = "normal";
	}
}

var newNames = function(){
	nameOne = prompt("What is the name of X player?");
	nameTwo = prompt("What is the name of O player?");
	displayNames();
}

var setTile = function(element) {
	if (document.getElementById(element.id).className == "blank"){
		document.getElementById(element.id).className = currentPlayer;
		squares[parseInt(element.id.substring(6)) - 1] = currentPlayer;}
	}
window.onload = function(){
		for (var i = 1; i < 10; i++){
			document.getElementById("square"+i).onclick = handleClick;
			document.getElementById("square"+i).onmouseover = handleMouseOver;
			document.getElementById("square"+i).onmouseout = handleMouseOut;
		}
		document.getElementById("newGameBtn").onclick = newGame;
		document.getElementById("namesBtn").onclick = newNames;
}	