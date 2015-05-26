if (Meteor.isClient) {
	Template.projectPeer.events({
		'click #launch-computation': function (event, template) {
			console.log(template)
			var worker = new Worker('http://localhost:3000/cfs/files/asmjsFiles/5bAqiqpCDNKGoL8N2/pi.js');
			var results = [];

			worker.onmessage = function(e) {
				if (e.data.type === 'output') {
					console.log('Message received from worker:', e);
					results.push(e.data.message);
				} else if(e.data.type === 'end') {
					console.log('end!', results);
					Projects.update({ _id: template.data._id }, { $push: {
						results: { x: 4, values: results }
					}});
				}
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
