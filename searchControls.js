window.onload = function(){
			var source = "https://media.w3.org/2010/05/sintel/trailer.mp4"; //default video
			document.getElementById('videoSource').setAttribute("src", source);
			document.getElementById('video').load();
		}
		
function reload(){

	var url = document.getElementById('searchInput').value;
	document.getElementById('videoSource').setAttribute("src", url);
 	document.getElementById('video').load();

}