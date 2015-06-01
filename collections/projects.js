Projects = new Mongo.Collection("projects");
Projects.attachSchema(new SimpleSchema({
	"name" : {
		type: String,
		label: "Project Name",
		max: 100
	},
	"description" : {
		type: String,
		label: "Project Description"
	},
	"hidden" : {
		type: Boolean,
		label: "Project Hidden"
	},
	"organisationId" : {
		type: String
	},
	"parameters.$.label": {
		type: String
	},
	"parameters.$.value": {
		type: String
	},
	"results.$.x": {
		type: Number
	},
	"results.$.values": {
		type: Array
	},
	"results.$.values.$": {
		type: String
	}
}));
