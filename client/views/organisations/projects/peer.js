if (Meteor.isClient) {
	Template.projectPeer.helpers({
		isOrganisationMember: function () {
			if (typeof Organisations.findOne({ _id: this.organisationId }) === 'undefined') {
				return false;
			}
			
			return Meteor.user() && (Organisations.findOne({ _id: this.organisationId }).members.indexOf(Meteor.userId()) >= 0 ||
				typeof Admins.findOne({ memberId: Meteor.userId() }) !== 'undefined');
		}
	})

	Template.projectPeer.events({
		'click #launch-computation': function (event, template) {
			launch(event, template);
		}
	});

	function launch(event, template) {
		var progress = Progress.find({ projectId: template.data._id }).fetch();
		var progressId = null;

		function getX() {
			var x = 0;

			for (var i = 0, l = progress.length; i < l; i++) {
				if (progress[i].done + progress[i].incomplete < math.eval(template.data.redundancy, { x: x })) {
					progressId = progress[i]._id;
					Progress.update({ _id: progressId }, { $inc: { incomplete: 1 } });
					
					return progress[i].x;
				}

				var x = progress[i].x + 1;
			}

			progressId = Progress.insert({ projectId: template.data._id, x: x, done: 0, incomplete: 1 });

			return x;
		}

		var x = getX();

		var worker = new Worker('/cfs/files/asmjsFiles/4drn2m6HuMtqnQh7T/amic.js');
		var results = [];

		worker.onmessage = function(e) {
			if (e.data.type === 'output') {
				results.push(e.data.message);
			} else if(e.data.type === 'end') {
				console.log('end!', results);
				Projects.update({ _id: template.data._id }, { $push: {
					results: { x: x, values: results }
				}});

				Progress.update({ _id: progressId }, { $inc: { done: 1, incomplete: -1 } });

				launch(event, template);
			}
		}

		var parameters = (typeof template.data.parameters !== 'undefined') ? template.data.parameters : [];
		
		parameters = parameters.map(function (p) {
			return math.eval(p.value, { x: x }).toString();
		});

		console.log("parameters: ", parameters);
		
		worker.postMessage({ arguments: parameters });
	}

	Template.body.events({
		'beforeunload': function (event, template) {
			console.log(event, template);
			alert(1);
			event.preventDefault();
			return;
		}
	});
}
