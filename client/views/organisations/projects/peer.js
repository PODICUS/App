if (Meteor.isClient) {
	Template.projectPeer.events({
		'click #launch-computation': function (event, template) {
			var worker = new Worker('http://localhost:3000/cfs/files/asmjsFiles/LG8yh9psshjWXGuv2/pi.js');
			
			worker.onmessage = function(e) {
				console.log('Message received from worker:', e);
			}

			var parameters = (typeof template.data.parameters !== 'undefined') ? template.data.parameters : [];

			console.log("parameters: ", parameters);
			
			parameters = parameters.map(function (p) {
				return math.eval(p.value, { x: 4 }).toString();
			});

			console.log("parameters: ", parameters);
			
			worker.postMessage({ arguments: parameters });
		}
	});
}
