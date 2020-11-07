var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
//create list element
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value))

//toggle onclick
	li.addEventListener("click", function toggleDone() {
		li.classList.toggle("done");
	})

//add button append it to li
	var deleteButton = document.createElement("button")
	deleteButton.appendChild(document.createTextNode("Delete"))
	li.appendChild(deleteButton)

//add to ul
	ul.appendChild(li)
	input.value = ""

//use button to delete element
	deleteButton.addEventListener("click", function deleteLi(){
		deleteButton.parentNode.parentNode.removeChild(li)
	})
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


// for(i=0;i<list.length;i++){
// 	list[i].onclick = list[i].classList.toggle("done");
// }



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
