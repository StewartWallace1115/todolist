document.getElementById("demo").addEventListener("keydown", function(e) {
	if(e.keyCode === 13){
		addToList();
    }
});

function addToList(){
	var textValue = document.getElementById("demo").value;
	var list = document.getElementById("list");
	var item = document.createElement("li");
	item.id = list.childElementCount;
	item.innerText = textValue;
	item.setAttribute("onclick","markOutItem(this.id)");
	var button = document.createElement("button");
	button.style.float = "right";
	button.style.height = "18px";
	button.innerHTML = "Delete";
	button.style.color = "white";
	button.style.border = "none";
	button.style.backgroundColor = "red";
	button.setAttribute("onclick","removeItem(this.parentNode.id)");
	item.appendChild(button);
		console.log(button.parentNode)

	list.appendChild(item);
}

function markOutItem(id){
	var elem = document.getElementById(id);
	if(elem === null)
		return;
	if(elem.innerHTML.includes("<del>")){
		let string = elem.innerHTML;

		string = string.replace("<del>", "");
		string = string.replace("</del>", "");
		elem.innerHTML = string;
	}
	else
		elem.innerHTML = "<del>"+elem.innerHTML+"</del>";

}

function valid(value) {
	return !(/[<>]$/.test(value));  //Test for HTML injection. 
}

function removeItem(id) {
	if(id === undefined)
		return;
	console.log(id)
	var elem = document.getElementById(id);
	console.log(elem);
	elem.parentNode.removeChild(elem);
}