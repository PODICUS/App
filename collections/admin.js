Admins = new Mongo.Collection("admins");
Admins.attachSchema(new SimpleSchema({
	memberId: {
		type: String,
	}
}));
