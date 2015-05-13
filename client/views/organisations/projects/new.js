if(Meteor.isClient) {
	AutoForm.hooks({
		newProject: {
			before: {
				insert: function(doc) {
					var oid = this.currentDoc._id;
					doc.organisationId = oid;
					return doc;
				}
			}
		}
	});
}
