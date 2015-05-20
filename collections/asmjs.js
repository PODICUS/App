Asmjs = new Mongo.Collection('asmjs');

AsmjsFiles = new FS.Collection("asmjsFiles", {
	stores: [new FS.Store.GridFS("asmjsFilesStore", {})]
});

AsmjsFiles.allow({
	download: function () {
		return true;
	},
	fetch: null
});

Asmjs.attachSchema(new SimpleSchema({
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
				collection: "asmjsFiles"
			}
		}
	}
}));
