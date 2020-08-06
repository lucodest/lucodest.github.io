window.onload = function(){
	var md = new XMLHttpRequest();
	md.onload = function(){
		console.log(md.responseText);
	}
	md.open("GET", "https://pastebin.com/raw/Bb4uhaDh");
	md.send();
}