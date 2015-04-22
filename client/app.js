
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
		log: function () {
			console.log(this);
		}
	});

	Router.configure({
		layoutTemplate: 'Layout',
		loadingTemplate: 'Loading',
		notFoundTemplate: 'NotFound'
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

	Router.route('/organisation/new', function () {
		this.render('newOrganisation');
	});

	Router.route('/organisation/:oid/projects/new', function () {
		this.render('newProject');
	});

	Router.route('/account/new', function () {
		this.render('newAccount');
	});

	Router.route('/list', function () {
		var data = Organisations.find();
		this.render('listOrganisations', { data: data });
	});

	Router.route('/:oid/list', function () {
		var data = Organisations.findOne({ _id: this.params.oid });
		this.render('listProjects', { data: data });
	});

	Router.route('/upload-shader', function () {
		var files = ShaderFiles.find({});
		this.render('uploadShader', { data: files });
	});


	Router.map(function() {
		this.route('organisation');
		this.route('peer');
	});

}
