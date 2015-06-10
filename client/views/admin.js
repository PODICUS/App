if (Meteor.isClient) {
	Template.admin.helpers({
		isMe: function (id) {
			return id != Meteor.userId();
		}
	});

	Template.admin.events({
		'click #add-admin': function (event, template) {
			var selectedId = $('#add-admin-select')[0].value;
			Admins.insert({ memberId: selectedId });
		}
	});

	Template.admin.events({
		'click #remove-admin': function (event, template) {
			var selectedId = $('#remove-admin-select')[0].value;
			var admin = Admins.findOne({ memberId: selectedId });
			Admins.remove({ _id: admin._id });
		}
	})
}
