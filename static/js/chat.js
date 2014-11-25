function chat(sel) {
	var a = document.getElementById('chat' + (parseInt(sel) - 1));
	var prox = document.getElementById('chat' + sel);
	a.style.display = 'none';
	prox.style.display = 'block';
}