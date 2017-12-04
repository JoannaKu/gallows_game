var password = "do it with passion or not at all";
password = password.toUpperCase();

var length = password.length;

var countFalse = 0;

var password1 = "";
for (i=0; i<length; i++)
{
	if (password.charAt(i)== " ") password1 = password1 + " ";
	else password1 = password1 + "-";
}

function show_password() {
	document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(24);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "R";
letters[17] = "S";
letters[18] = "T";
letters[19] = "U";
letters[20] = "W";
letters[21] = "Z";
letters[22] = "X";
letters[23] = "Y";
letters[24] = "V";


function start() {

	var div_contents = "";
	
	for (i=0; i<=24; i++) {

		var element = "let" + i;

		div_contents = div_contents + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i+1) % 5 == 0) div_contents = div_contents + '<div style="clear:both"></div>'
	}

	document.getElementById("alphabet").innerHTML = div_contents;

	show_password();
}

String.prototype.changeCharacter = function (place, character) {
	if(place > this.length - 1) return this.toString();
	else return this.substr(0, place) + character + this.substr(place +1); 
}

function check(number) {

	var correct = false;

	for (i=0; i<length; i++) {
		if (password.charAt(i) == letters[number])
		{
			password1 = password1.changeCharacter(i, letters[number]);
			correct = true;
		}
	}

	if (correct == true){

		var element = "let" + number;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";


		show_password();
	}
	else {

		var element = "let" + number;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");

		countFalse++;
		var picture = "gallows/../images/picture" + countFalse +".png";
		document.getElementById("gallows").innerHTML = '<img src="'+picture+'" alt="">' 
	}
	//WIN

	if (password == password1)

		document.getElementById("alphabet").innerHTML = "YOU WIN! THE PASSWORD IS: " + password + '<br><br><button class="reset" onclick="location.reload()">ONE MORE TIME?</button>';
	// LOST 
	if (countFalse == 10)
	document.getElementById("alphabet").innerHTML = "GAME OVER! THE PASSWORD IS: " + password + '<br><br><button class="reset" onclick="location.reload()">ONE MORE TIME?</button>';
}