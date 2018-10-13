window.addEventListener("keydown", function (event) {
			  if (event.defaultPrevented) {
			    return; // Do nothing if the event was already processed
			  }
			  if (event.key == ' '){
			  	// console.log('space');
			  	
			  	if(document.getElementById('video').paused == true){
			  		// document.getElementById('status').innerHTML = 'paused';
			  		document.getElementById('video').play();
			  	}
			  	else{
			  		// document.getElementById('status').innerHTML = 'playing';
			  		document.getElementById('video').pause();
			  	}
			  }
			  if (event.key == 'Enter'){
				reload();
			  } 
			  if (event.key == 'f'){ //fullscreen
			  		elem = document.getElementById('video');
				  	if(elem.webkitRequestFullScreen){
						elem.webkitRequestFullScreen(); // chrome
				  	}
				  	if(elem.mozFullScreen){
						elem.mozFullScreen();			//mozilla
				  	}
			}
			if (event.key == 'm'){
			  	elem = document.getElementById('video');
				if(elem.muted == true){
					elem.muted =  false;
				}
				else{
					elem.muted =  true;
				}
			}


			})