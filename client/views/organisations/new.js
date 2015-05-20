if (Meteor.isClient) {
	AutoForm.hooks({
		newOrganisation: {
			before: {
				insert: function(doc) {
					doc.members = [ Meteor.userId() ];
					return doc;
				}
			},
			
			after: {
				insert: function (err, result) {
					Router.go("/organisation/" + result + "/list");
				}
			}
		}
	});
}
