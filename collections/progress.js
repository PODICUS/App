Progress = new Mongo.Collection("progress");
Progress.attachSchema(new SimpleSchema({
	"projectId": {
		type: String
	},
	"x": {
		type: Number
	},
	"status": {
		type: String
	}
}));
