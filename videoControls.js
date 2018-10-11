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
			  if (event.key == 'f'){
			  		elem = document.getElementById('video');
				  	console.log('f1');
				  	if(elem.webkitRequestFullScreen){
					  	console.log('f21');
						elem.webkitRequestFullScreen();
				  	}
				  	if(elem.mozFullScreen){
					  	console.log('f22');
						elem.mozFullScreen();
				  	}
				  console.log('f3');		
			}


			})