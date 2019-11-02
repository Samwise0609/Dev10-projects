/**
* appends the results table to the document or if it already exists
* updates it with the latest game data
* @param results the results of the lucky sevens game
*/
let displayResults = function(results){
	let table = document.getElementById("resultsTable");
	if( table !== null){
		table.rows[0].cells[1].innerHTML = "$" + results.start;
		table.rows[1].cells[1].innerHTML = results.rolls;
		table.rows[2].cells[1].innerHTML = "$" + results.highest;
		table.rows[3].cells[1].innerHTML = results.highRoll;
	} else {
		table = document.createElement("TABLE");
		table.id = "resultsTable";

		
		let currentRow = table.insertRow(0);
		currentRow.insertCell(0).innerHTML = "Starting Bet";
		currentRow.insertCell(1).innerHTML = "$" + results.start;
		
		currentRow = table.insertRow(1);
		currentRow.insertCell(0).innerHTML = "Total Rolls Before Going Broke";
		currentRow.insertCell(1).innerHTML = results.rolls;
		
		currentRow = table.insertRow(2);
		currentRow.insertCell(0).innerHTML = "Highest Amount Won";
		currentRow.insertCell(1).innerHTML = "$" + results.highest;
		
		currentRow = table.insertRow(3);
		currentRow.insertCell(0).innerHTML = "Roll Count at Highest Amount Won";
		currentRow.insertCell(1).innerHTML = results.highRoll;
		document.body.insertBefore(table, null);
		
	}
}

/**
* retrieves the form input
* @return the value from the form
*/
let getBet = function(){
	return document.forms["form"][0].value;
}

/**
* simulates playing Lucky Sevens
* @param bet the initial amount of money the player has
* @return returns false if the input was invalid and true otherwise
*/
let play = function(bet){
	if(isNaN(bet) || bet <= 0){
		alert("The bet must be a number greater than zero.");
		return false;
	}
	
	let money = Number(bet);
	//object with all relevant end of game data
	let results = {start: money, highest: money, rolls: 0, highRoll: 0};
	
	while( money > 0 ){
		let firstDie = rollDie(6);
		let secondDie = rollDie(6);
		
		if( firstDie + secondDie === 7 ){
			money += 4;
		} else {
			money--;
		}
		
		results.rolls++;
		
		if ( money > results.highest){
			results.highest = money;
			results.highRoll = results.rolls;
		}
	}
	
	displayResults(results);
	return true;
}

/**
* simulates rolling a die with the provided number of sides
* @param numSides the number of sides the die has
* @return returns a random integer between 1 and numSides 
*/
let rollDie = function(numSides) {
	return Math.floor(Math.random() * numSides) + 1;
}