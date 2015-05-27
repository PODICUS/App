if (Meteor.isClient) {
	Template.projectPeer.events({
		'click #launch-computation': function (event, template) {
			console.log(template)

			var progress = Progress.find({ projectId: template.data._id }).fetch()

			function getX() {
				var x = 0;

				for (var i = 0, l = progress.length; i < l; i++) {
					if (progress[i].status === 'incomplete') {
						return progress[i].x;
					}

					var x = progress[i].x + 1;
				}

				return x;
			}

			var x = getX();
			console.log('x:', x);

			var progressId = Progress.insert({ projectId: template.data._id, x: x, status: 'running' });
			console.log('progressId:', progressId);

			var worker = new Worker('http://localhost:3000/cfs/files/asmjsFiles/5bAqiqpCDNKGoL8N2/pi.js');
			var results = [];

			worker.onmessage = function(e) {
				if (e.data.type === 'output') {
					console.log('Message received from worker:', e);
					results.push(e.data.message);
				} else if(e.data.type === 'end') {
					console.log('end!', results);
					Projects.update({ _id: template.data._id }, { $push: {
						results: { x: x, values: results }
					}});

					Progress.update({ _id: progressId }, { $set: { status: 'done' }});
					/*Projects.update({ _id: template.data._id, 'progress.id': progressId }, {
						$set: { 'progress.status': 'done' }
					});*/
				}
			}

			var parameters = (typeof template.data.parameters !== 'undefined') ? template.data.parameters : [];

			console.log("parameters: ", parameters);
			
			parameters = parameters.map(function (p) {
				return math.eval(p.value, { x: x }).toString();
			});

			console.log("parameters: ", parameters);
			
			worker.postMessage({ arguments: parameters });
		}
	});


	Template.body.events({
		'beforeunload': function (event, template) {
			console.log(event, template);
			alert(1);
			event.preventDefault();
			return;
		}
	});
}
