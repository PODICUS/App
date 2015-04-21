if (Meteor.isClient) {
	Template.manageProject.helpers({
		log: function () {
			console.log(this);
		}
	});
}