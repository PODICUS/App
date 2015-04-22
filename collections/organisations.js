Organisations = new Mongo.Collection("organisations");
Organisations.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 100
	},
	"projects.$.name" : {
		type: String,
		label: "Project Name",
		max: 100
	},
	"projects.$.description" : {
		type: String,
		label: "Project Description"
	},
	"projects.$.hidden" : {
		type: Boolean,
		label: "Project Hidden"
	},
	"members.$.id" : {
		type: String
	}
}));
