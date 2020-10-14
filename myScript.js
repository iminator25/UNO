var x = 0
function changeCard() {
	if (x<10) {
		console.log(x);
		document.getElementById("Current Card").src = "Card_pics/red_"+x.toString(10)+".jpg";
		x++;
		
	}
	if (x==6) {
	return;
	}
	
} 


function Dealing() 
{

}