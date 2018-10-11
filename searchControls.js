window.onload = function(){
			var default_url = "https://media.w3.org/2010/05/sintel/trailer.mp4"; 
			var source = default_url; //default video
			document.getElementById('videoSource').setAttribute("src", source);
			document.getElementById('video').load();
		}
		
function reload(){
 	// document.getElementById('searchInput').setAttribute("placeholder", default_url);
	var url = document.getElementById('searchInput').value;
	document.getElementById('videoSource').setAttribute("src", url);
 	document.getElementById('video').load();

}