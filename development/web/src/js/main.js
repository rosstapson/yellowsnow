	forge.logging.info("main.js");

	function onFailure(e) {
				forge.logging.error("Error: " + e);
	}
	function onSuccess() {
				forge.logging.info("all good.");
	}

			
	function myFunction() {			
		forge.yellowmod.showAlert("any text", onSuccess, onFailure);

	}
			