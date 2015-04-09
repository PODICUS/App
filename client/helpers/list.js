if (Meteor.isClient) {
	Template.listOrganisations.helpers({
		organisations: function () {
			return Organisations.find();
		}
	});

	Template.listProjects.helpers({
		projects: function (oid) {
			return Organisations.findOne({ _id: oid }).projects;
		}
	});
}
