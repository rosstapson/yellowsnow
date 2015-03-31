	//forge.logging.info("main.js");

	function onFailure(e) {
				console.log("Error: " + e);
	}
	function onSuccess() {
				console.log("all good.");
	}

			
	function myFunction() {			
		forge.nanookmod.showPrompt("any text", onSuccess, onFailure);

	}
			