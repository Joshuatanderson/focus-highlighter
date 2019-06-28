init = () => {
	highlightActiveTab();
}

let focused = null;

highlightActiveTab = () => {
	setInterval(() => {
		if(focused === document.activeElement || focused === null) {
			// do stuff
		} else {
			console.log(focused);
			focused.classList.remove("ext-focused-element");
		}
		focused = document.activeElement;
		console.log("I am running");
		focused.classList.add("ext-focused-element");
	}, 100);
}


init();
