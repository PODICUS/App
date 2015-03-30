
if (Meteor.isClient) {
	// Router.onBeforeAction(function() {
	// 	if (! Meteor.userId()) {
	// 		// this.render('login');
	// 	} else {
	// 		this.next();
	// 	}
	// });


	// counter starts at 0
	Session.setDefault('counter', 0);

	Template.body.helpers({
		organisations: function () {
			return Organisations.find({});
		}
	});


	Router.route('/', function () {
		this.render('welcomePage');
	});

	Router.route('/room/:uid', function () {
		Template.room.helpers({
			uid: this.params.uid
		});
		this.render('room');
	});

	Router.route('/room', function () {
		this.render('no-room');
	});

	Router.route('/list', function () {
		this.render('listOrganisations');
	});

	Router.route('/:listOrganisations/list', function () {
		Template.room.helpers({
			oid: this.params.uid
		});
		this.render('listProjects');
	});

	Router.map(function() {
		this.route('organisation');
	});

	Router.map(function() {
		this.route('peer');
	});

}
