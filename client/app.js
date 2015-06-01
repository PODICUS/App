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

		this.route('/account/new', {name: 'newAccount'});

		this.route('/account', function() {
			var data = Organisations.find({ members: Meteor.userId() });
			this.render('accounts.index', { data: data });
		});

		this.route('/list', function () {
			var data = Organisations.find();
			this.render('listOrganisations', { data: data });
		});

		this.route('/organisation/:oid/list', function () {
			var oid = this.params.oid;
			var organisation = Organisations.findOne({ _id: oid });
			var projects = Projects.find({ organisationId: oid });

			this.render('listProjects', {
				data: {
					organisation: organisation,
					projects: projects
				}
			});
		});

		this.route('/organisation/:oid/new-project', function () {
			var data = Organisations.findOne({ _id: this.params.oid });
			this.render('newProject', { data: data });
		});

		this.route('/project/:pid', function () {
			var data = Projects.findOne({ _id: this.params.pid });

			this.render('projectPeer', { data: data });
		});

		this.route('/project/:pid/manage', function () {
			var data = Projects.findOne({ _id: this.params.pid });
			
			this.render('manageProject', { data: data });
		});

		this.route('/project/:pid/results', function () {
			var project = Projects.findOne({ _id: this.params.pid });
			var json = JSON.stringify(project.results, null, 4);

			this.render('projectResults', { data: { project: project, json: json }});
		});

		this.route('/project/:pid/upload-code', function () {
			var files = AsmjsFiles.find({});
			this.render('uploadCode', { data: files });
		});
	});


	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
	});
}
