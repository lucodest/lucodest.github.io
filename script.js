window.onload = function(){
	var msg = document.getElementById("msgctn");
	
	var md = new XMLHttpRequest();
	md.onload = function(){
		let fp = '<i>"' + md.responseText.replace(/\r\n/g,"<br>") + '"</i>';
		msg.innerHTML = fp;
	}
	md.open("GET", "https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/Bb4uhaDh");
	md.send();
}

