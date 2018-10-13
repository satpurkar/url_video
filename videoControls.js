window.addEventListener("keydown", function (event) {
			  if (event.defaultPrevented) {
			    return; // Do nothing if the event was already processed
			  }
			  if (event.key == ' '){
			  	if(document.getElementById('video').paused == true){
			  		document.getElementById('video').play();
			  	}
			  	else{
			  		document.getElementById('video').pause();
			  	}
			  }
			  if (event.key == 'Enter'){
				reload();
			  } 
			  if (event.key == 'f'){ 				//fullscreen
			  		elem = document.getElementById('video');
				  	if(elem.webkitRequestFullScreen){
						elem.webkitRequestFullScreen(); // chrome
				  	}
				  	if(elem.mozFullScreen){
						elem.mozFullScreen();			//mozilla
				  	}
			}
			if (event.key == 'm'){						//mute
			  	elem = document.getElementById('video');
				if(elem.muted == true){
					elem.muted =  false;
				}
				else{
					elem.muted =  true;
				}
			}
																//Volume
			if (event.key == 'ArrowUp'){						//increase
			  	document.getElementById('video').volume += 0.1;	
			}
			if (event.key == 'ArrowDown'){						//decrease
			  	document.getElementById('video').volume -= 0.1;	
			}

			

			})
