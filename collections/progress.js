Progress = new Mongo.Collection("progress");
Progress.attachSchema(new SimpleSchema({
	"projectId": {
		type: String
	},
	"x": {
		type: Number
	},
	"done": {
		type: Number
	},
	"incomplete": {
		type: Number
	}
}));
