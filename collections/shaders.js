Shaders = new Mongo.Collection('shaders');

ShaderFiles = new FS.Collection("shaderFiles", {
	stores: [new FS.Store.GridFS("shaderFilesStore", {})]
});

ShaderFiles.allow({
	download: function () {
		return true;
	},
	fetch: null
});

Shaders.attachSchema(new SimpleSchema({
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
				collection: "shaderFiles"
			}
		}
	}
}));
