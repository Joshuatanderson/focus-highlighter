let focusColor = document.getElementById("focus-color");

chrome.storage.sync.get("focus-color", (data) => {
	focusColor.style.borderColor = data.color;
	focusColor.setAttribute('value', data.color);
});

focusColor.onclick = (element) => {

};