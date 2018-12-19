var points = [1,1];
var maxPoints = 5;
var gameOver = false;

document.querySelector("#textValue").addEventListener("change", changeMax);
document.querySelector("#p1").addEventListener("click", function(){addScore(0)});
document.querySelector("#p2").addEventListener("click", function(){addScore(1)});
document.querySelector("#p3").addEventListener("click", function(){

	points = [1,1];
	maxPoints = 5;
	gameOver = false;

	document.querySelector("h1").innerHTML = "<span id='pl0Score'>0</span> to <span id='pl1Score'>0</span>"; 
	document.querySelector("#textValue").value = null;
	document.querySelector("#playingTo").innerHTML = "5"

});

function addScore(i){
	
	var str = points[i].toString();
	
	if (!gameOver) {
	if (points[i] <= maxPoints) {
		document.querySelector("#pl"+[i]+"Score").textContent = str;
		points[i]++;
	} 
	if (points[i] == maxPoints+1) {
	   document.querySelector("#pl"+[i]+"Score").style.color = "green";
	   gameOver = true;
	}
	}
}

function changeMax() {
	maxPoints = Number(document.querySelector("#textValue").value);
	document.querySelector("#playingTo").textContent = maxPoints.toString();
}