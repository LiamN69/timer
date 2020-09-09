window.onload=function() {
	minObj = document.getElementById('mns');
    secObj = document.getElementById('scs');
    document.getElementById('btnct').onclick = countdownTimer;
}

function countdownTimer() {
  var min = new Number(minObj.value);
  var sec = new Number(secObj.value);
  var countDownDate = new Date().getTime()+ min*60000 + sec*1000;

  var x = setInterval(function(){
  var now = new Date().getTime();
   
  var distance = countDownDate - now + 1050;
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("showmns").innerHTML = minutes;

  if (seconds < 10) {  
    document.getElementById("showscs").innerHTML = '0' + seconds;
} else {
    document.getElementById("showscs").innerHTML = seconds;
} 
 if (minObj.value > 60) {  
    alert("Please input a value  0-60"); //<---- fix this + add red background then done
    clearInterval(x);
	document.getElementById("showmns").innerHTML = '0';
	return;
}
   if (isNaN(sec)) {
	alert("Must input number");
	document.getElementById("showscs").innerHTML = "0";
}
  if (isNaN(min)) {
	alert("Must input number");
	document.getElementById("showmns").innerHTML = "0";	
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("showmns").innerHTML = "0";
	document.getElementById("showscs").innerHTML = "00";
	document.body.style.backgroundColor = "red";
}  
}, 1000);
}
