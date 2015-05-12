
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

		// this.route('/organisation/:oid/projects/new', {name: 'newProject'});

		this.route('/account/new', {name: 'newAccount'});

		this.route('/account', function() {
			var data = Organisations.find({ members: { $elemMatch: { id: Meteor.userId() } } });
			this.render('accounts.index', { data: data });
		});

		this.route('/list', function () {
			var data = Organisations.find();
			this.render('listOrganisations', { data: data });
		});

		this.route('/organisation/:oid/list', function () {
			var oid = this.params.oid;
			var data = Organisations.findOne({ _id: oid });
			this.render('listProjects', { data: data });
		});

		this.route('/organisation/:oid/new-project', function () {
			var data = Organisations.findOne({ _id: this.params.oid });
			this.render('newProject', { data: data });
		});

		this.route('/project/:pid', function () {
			var data = Organisations.findOne({"projects._id": this.params.pid}, {_id: 0, 'projects.$': 1});
			// var data = Organisations.findOne({projects: { $elemMatch: {_id: this.params.pid} } }, {"projects.$": 1});

			console.log(data);
			// var data = Organisations.findOne({ _id: this.params.oid, 'projects._id': this.params.pid });

			this.render('manageProject', { data: data });
		});

		this.route('/project/:pid/upload-code', function () {
			var files = ShaderFiles.find({});
			this.render('uploadCode', { data: files });
		});

		this.route('organisation');
		
		this.route('peer');
	});


	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
	});
}
