if (Meteor.isClient) {
	Template.manageOrganisation.events({
		'click #add-member': function (event, template) {
			var selectedId = $('#add-member-select')[0].value;
			Organisations.update({ _id: template.data.organisation._id }, { $push: { members: selectedId } });
		}
	});

	Template.manageOrganisation.events({
		'click #remove-member': function (event, template) {
			var selectedId = $('#remove-member-select')[0].value;
			Organisations.update({ _id: template.data.organisation._id }, { $pull: { members: selectedId } });
		}
	})
}
