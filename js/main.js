var listArr = [];
var inputDOM = document.querySelector('#add-list');
var button = document.querySelector('#submit');
var lists = document.querySelector('#list');
var list;
var text;
var arrPos;
var update;

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
    Bugfender.log("Delete Item");
	text = e.target.parentNode.childNodes[1].innerHTML;
	arrPos = listArr.indexOf(text);
	listArr.splice(arrPos,1);
}

function updateItem (e) {
    Bugfender.log("Upadte Item");
	update = prompt("Update Item", "enter new value");
	text = e.target.parentNode.childNodes[1].innerHTML;
	arrPos = listArr.indexOf(text);
	listArr[arrPos] = update;
}