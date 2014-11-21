// Variável do diretório das imagens
var static_url = '/static/images/'

// Função que permite o drop dos elementos em uma determinada área (DnD)
function allowDrop(ev) {
	ev.preventDefault();
}

// Função que arrasta o elemento (DnD)
function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

// Função que solta o elemento (DnD)
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	var original = document.getElementById(data);
	var caixa = document.getElementById('cx_codigo');
	var qimg = caixa.getElementsByTagName('img').length;

	if (original.id == 'bt_bolo_chocolate' || original.id == 'bt_bolo_morango') {

		var imgbolo = document.createElement('img');
		imgbolo.src = original.src;
		imgbolo.alt = original.alt;
		if (qimg == 0) {
			ev.target.appendChild(imgbolo);
		};
	
	} else if (original.id == 'bt_for'){
		
		var imgfor = document.createElement('img'), imgend = document.createElement('img');
		imgfor.src = static_url + 'bt_for.jpg';
		imgend.src = static_url + 'bt_endfor.jpg';
		imgfor.alt = imgend.alt = original.alt;
		if (qimg == 0) {
			ev.target.appendChild(imgfor);
			ev.target.appendChild(imgend);
		};
	
	} else if (original.id == 'bt_while'){

		var imgwhile = document.createElement('img'), imgend = document.createElement('img');
		imgwhile.src = static_url + 'bt_while.jpg';
		imgend.src = static_url + 'bt_endwhile.jpg';
		imgwhile.alt = imgend.alt = original.alt;
		if (qimg == 0) {
			ev.target.appendChild(imgwhile);
			ev.target.appendChild(imgend);
		};

	} else if (original.id == 'bt_if'){

		var imgif = document.createElement('img'), imgelse = document.createElement('img'), imgend = document.createElement('img');
		imgif.src = static_url + 'bt_if.jpg';
		imgelse.src = static_url + 'bt_else.jpg';
		imgend.src = static_url + 'bt_endif.jpg';
		imgif.alt = imgelse.alt = imgend.alt = original.alt;
		if (qimg == 0) {
			ev.target.appendChild(imgif);
			ev.target.appendChild(imgelse);
			ev.target.appendChild(imgend);
		};

	};
}