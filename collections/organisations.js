Organisations = new Mongo.Collection("organisations");
Organisations.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 100
	},
	"projects.$.id" : {
		type: String
	},
	"members.$.id" : {
		type: String
	}
}));
