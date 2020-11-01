var x = 1
var path = "Card_pics/"
var red = "red_"
var blue = "blue_"
var green = "green_"
var yellow = "yellow_"
var extension = ".jpg"

Player_1_count = 1
Player_2_count = 1
function changePlayer1Card() {
	
	if (Player_1_count<=9) {
		console.log(Player_1_count);
		document.getElementById("Player_1").src = path+red+Player_1_count.toString(10)+extension;
		Player_1_count++;
	}
}
function changePlayer2Card() {
	if (Player_2_count<=9) {
		console.log(Player_2_count);
		document.getElementById("Player_2").src = path+blue+Player_2_count.toString(10)+extension;
		Player_2_count++;
	}
}


function Dealing() 
{

}