if (Meteor.isClient) {
	AutoForm.hooks({
		newOrganisation: {
			before: {
				insert: function(doc) {
					doc.members = [{ id: Meteor.userId() }];
					return doc;
				}
			}
			// Router.go("/" + oid + "/list");
		}
	});
}