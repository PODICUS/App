if(Meteor.isClient) {
	AutoForm.hooks({
		newProject: {
			before: {
				'update-pushArray': function (doc) {
					doc._id = Random.id();
					return doc;
				}
			}
		}
	});
}
