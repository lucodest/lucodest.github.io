window.onload = function(){
	var md = new XMLHttpRequest();
	md.onload = function(){
		console.log(md.responseText);
	}
	md.open("GET", "https://cors-anywhere.herokuapp.com/https://pastebin.com/Bb4uhaDh");
	md.send();
}