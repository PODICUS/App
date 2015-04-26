
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
		this.route('/', { layoutTemplate: 'homeLayout', name: 'welcomePage' });

		this.route('/room/:uid', function () {
			Template.room.helpers({
				uid: this.params.uid
			});
			this.render('room');
		});

		this.route('/room', {name: 'no-room'});

		this.route('/organisation/new', {name: 'newOrganisation'});

		this.route('/organisation/:oid/projects/new', {name: 'newProject'});

		this.route('/account/new', {name: 'newAccount'});

		this.route('/account', function() {
			this.render('accounts.index', {
				data: function() {
					return Organisations
						.find({ $where: function() { return this.members[0].id === Meteor.user()._id; } })
						.fetch();
					}
			});
		});

		this.route('/list', function () {
			var data = Organisations.find();
			this.render('listOrganisations', { data: data });
		});

		this.route('/organisation/:oid/list', function () {
			var oid = this.params.oid;
			console.log(oid);
			data.organisations = function() { return Organisations.findOne({ _id: oid }); };
			this.render('listProjects', data);
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
