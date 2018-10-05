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
				  	console.log('f1');
				  	// if(document.getElementById('video').requestFullscreen){
				  	// console.log('f2');
			  		
			  		document.getElementById('video').requestFullscreen();
				
				  // }
				  console.log('f3');		
			}


			})