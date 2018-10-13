window.onload = function(){
			let default_url = "https://media.w3.org/2010/05/sintel/trailer.mp4"; 
			let source = default_url; //default video
			document.getElementById('videoSource').setAttribute("src", source);
			document.getElementById('video').load();
		}
		
function reload(){
	let url = document.getElementById('searchInput').value;
	let seekTime = hmsToSecondsOnly(String(document.getElementById('playTimeInput').value));
	console.log(seekTime);
	if(isNaN(seekTime)){seekTime = 0}
	document.getElementById('videoSource').setAttribute("src", url);
		
 	document.getElementById('video').load();
 	document.getElementById('video').currentTime = seekTime;
}


function hmsToSecondsOnly(str) {
    return str.split(':').reverse().reduce((prev, curr, i) => prev + curr*Math.pow(60, i), 0);
}