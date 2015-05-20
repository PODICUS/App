Codes = new Mongo.Collection('codes');

CodeFiles = new FS.Collection("codeFiles", {
	stores: [new FS.Store.GridFS("codeFilesStore", {})]
});

CodeFiles.allow({
	download: function () {
		return true;
	},
	fetch: null
});

Codes.attachSchema(new SimpleSchema({
	title: {
		type: String,
		max: 60
	},
	projectId : {
		type: String
	},
	fileId: {
		type: String,
		autoform: {
			afFieldInput: {
				type: "cfs-file",
				collection: "codeFiles"
			}
		}
	}
}));
