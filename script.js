var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";

	const deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('DELETE'));
	li.appendChild(deleteButton);
	deleteButton.onclick = deleteItem;

	const doneButton = document.createElement('button');
	doneButton.appendChild(document.createTextNode('Done'));
	li.appendChild(doneButton);
	doneButton.addEventListener('click', (e)=> {
		e.target.parentNode.classList.toggle('done');
	});

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function deleteItem(evt){
	evt.target.parentNode.remove();

}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


