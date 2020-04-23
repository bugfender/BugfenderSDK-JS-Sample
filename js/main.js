var listArr = [];
var inputDOM = document.querySelector('#add-list');
var button = document.querySelector('#submit');
var lists = document.querySelector('#list');
var list;
var text;
var arrPos;
var update;

Bugfender.init({
	appKey: '1EJdilMFdmx1sdr5RMcdOzdDnDCcm9jd',
	// apiURL: 'https://api.bugfender.com',
	// frontendURL: 'https://dashboard.bugfender.com',
	// overrideConsoleMethods: true,
	// printToConsole: true,
	// registerErrorHandler: true,
	version: '0.0.1',
	build: '123',
});

Bugfender.log('main.js loaded');

button.addEventListener('click', function(e){
	Bugfender.log("Add Item (" + inputDOM.value + ")");

	e.preventDefault();
	listArr.push(inputDOM.value);
	inputDOM.value = "";
	populateList();
})

// listen to li clicks
lists.addEventListener('click', checkClick);

function populateList() {
	lists.innerHTML = listArr.map(item => {
		return `<li>
				<div class="item">${item}</div><div class="delete">x</div>
			</li>`
	}).join('');
	list = Array.from(document.querySelectorAll('ul#list li'));
}

function checkClick (e) {
	if (e.target.className == 'item') {
		updateItem(e);
		populateList();
	} else if(e.target.className == 'delete') {
		deleteItem(e);
		populateList();
	}
}

function deleteItem (e) {
	text = e.target.parentNode.childNodes[1].innerHTML;
	arrPos = listArr.indexOf(text);
	listArr.splice(arrPos,1);
	Bugfender.log("Delete Item (" + text + ")");
}

function updateItem (e) {
	text = e.target.parentNode.childNodes[1].innerHTML;
	update = prompt("Update Item", text);
	arrPos = listArr.indexOf(text);
	listArr[arrPos] = update;
	Bugfender.log("Update Item (" + text + " => " + update + ")");
}
