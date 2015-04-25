
if (Meteor.isClient) {
	// Router.onBeforeAction(function() {
	// 	if (! Meteor.userId()) {
	// 		// this.render('login');
	// 	} else {
	// 		this.next();
	// 	}
	// });

	Template.welcomePage.helpers({
		log: function () {
			console.log(this);
		}
	});

	Router.configure({
		layoutTemplate: 'Layout',
		loadingTemplate: 'Loading',
		notFoundTemplate: 'NotFound'
	});

	Router.map(function () {

		this.route('/', function () {
			this.render('welcomePage');
		});

		this.route('/room/:uid', function () {
			Template.room.helpers({
				uid: this.params.uid
			});
			this.render('room');
		});

		this.route('/room', function () {
			this.render('no-room');
		});

		this.route('/organisation/new', function () {
			this.render('newOrganisation');
		});

		this.route('/organisation/:oid/projects/new', function () {
			this.render('newProject');
		});

		this.route('/account/new', function () {
			this.render('newAccount');
		});

		this.route('/list', function () {
			var data = Organisations.find();
			this.render('listOrganisations', { data: data });
		});

		this.route('/organisation/:oid/list', function () {
			var data = Organisations.findOne({ _id: this.params.oid });
			this.render('listProjects', { data: data });
		});

		this.route('/organisation/:oid/project/:pid', function () {
			var data = Organisations.findOne({ _id: this.params.oid, 'projects._id': pid });
			this.render('manageProject', { data: data });
		});

		this.route('/upload-shader', function () {
			var files = ShaderFiles.find({});
			this.render('uploadShader', { data: files });
		});

		this.route('organisation');
		
		this.route('peer');
	});


	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
	});
}
