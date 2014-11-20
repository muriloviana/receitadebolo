function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("bloco", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("bloco");
	var copyimg = document.createElement("img");
	var original = document.getElementById(data);

	copyimg.src = original.src;
	ev.target.appendChild(copyimg);
}