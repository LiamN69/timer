window.onload=function() {
	minObj = document.getElementById('mns');
    secObj = document.getElementById('scs');
    document.getElementById('btnct').onclick = countdownTimer;
}

function countdownTimer() {
	var min = new Number(minObj.value);
    var sec = new Number(secObj.value);
 	
	document.getElementById("showmns").innerHTML = min;
if (sec > 9) {
	document.getElementById("showscs").innerHTML = sec;
}	
else {
	document.getElementById("showscs").innerHTML = '0' + sec;
}
if (sec > 59) {
    alert("Please input a value  0-59");
    document.getElementById("showscs").innerHTML = "00";
}
}

