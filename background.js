chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({color: 'pink'}, () => {
		console.log('color changed!');
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				
			})
		],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});