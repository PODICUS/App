if(Meteor.isClient) {
	SimpleSchema.debug = true;

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
