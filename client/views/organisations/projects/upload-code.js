

Meteor.methods({

  uploadCode: function(post){

  	console.log("uiytrgyhi");
  }
});


// docker run -v /`pwd`:/tmp/ cmfatih/emscripten srv/var/emscripten/emcc tmp/<FILENAME> -o tmp/<FILENAME>.js

// if(Meteor.isClient) {
// if(Meteor.isServer) {

	console.log("sadasdasd");

	// exec = Npm.require('child_process').exec;

	// var runCommand = function (error, stdout, stderr) {
	// 	console.log('stdout: ' + stdout);
	// 	console.log('stderr: ' + stderr);

	// 	if(error !== null) {
	// 		console.log('exec error: ' + error);
	// 	}
	// };


// runCmd = Meteor.wrapAsync(exec)
// var result = runCmd("git rev-parse HEAD");
// console.log(result);


	AutoForm.hooks({
		uploadCode: {
			endSubmit: function(){
				console.log("asd");
				throw new Meteor.Error( "HOOK OK" );
				runCmd = Meteor.wrapAsync(exec)
				var result = runCmd("ls");
				console.log(result);
			},

			// Called when any submit operation succeeds
  			// onSuccess: function(formType, result) {
  				// console.log("zxczxc");
  			// }

			// after: {
			// 	insert: function (doc) {

			// 		console.log("EXEC");
			// 		console.log(doc);

			// 		// Router.go("/project/" + result + "manage");
			// 	}
			// }
		}
	});

// }


// exec("ls -la", runCommand);
// exec("docker run -v /`pwd`:/tmp/ cmfatih/emscripten srv/var/emscripten/emcc tmp/"+filename+" -o tmp/"+filename+".js", runCommand);