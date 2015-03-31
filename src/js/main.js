	//forge.logging.info("main.js");

	function onFailure(e) {
				alert("Error: " + e);
	}
	function onSuccess() {
				alert("all good.");
	}

			
	function myFunction() {			
		forge.nanookmod.showPrompt("any text", onSuccess, onFailure);

	}
			