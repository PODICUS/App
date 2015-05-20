(function(){
	console.log = function (message) {
		postMessage(message);
	};
})();

onmessage = function (e) {
	arguments = e.data.arguments;
	postMessage(arguments);
	run_program.apply(null, arguments);
}

function run_program() {