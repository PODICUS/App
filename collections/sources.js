Sources = new Mongo.Collection('sources');

SourcesFiles = new FS.Collection("sourcesFiles", {
	stores: [new FS.Store.GridFS("sourcesFilesStore", {})]
});

SourcesFiles.allow({
	download: function () {
		return true;
	},
	fetch: null
});

Sources.attachSchema(new SimpleSchema({
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
				collection: "sourcesFiles"
			}
		}
	}
}));
