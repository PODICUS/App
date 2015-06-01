if (Meteor.isClient) {
	Template.listProjects.helpers({
		isOrganisationMember: function () {
			return Meteor.user() && this.organisation.members.indexOf(Meteor.userId()) >= 0;
		}
	})
}