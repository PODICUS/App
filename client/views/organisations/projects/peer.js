if (Meteor.isClient) {
	var worker = new Worker('http://localhost:3000/cfs/files/asmjsFiles/LG8yh9psshjWXGuv2/pi.js');
	
	worker.onmessage = function(e) {
		console.log('Message received from worker:', e);
	}

	worker.postMessage({ arguments: [ "42", "23" ] });
}
