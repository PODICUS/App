if (Meteor.isClient) {
	Template.nav.helpers({
		isAdmin: function () {
			return Meteor.user() && typeof Admins.findOne({ memberId: Meteor.userId() }) !== 'undefined';
		}
	});
}
