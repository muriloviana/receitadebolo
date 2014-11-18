function selecionar(sel, desel){
	document.getElementById(desel).classList.remove('selecionado');
	document.getElementById(sel).classList.add('selecionado');
	document.getElementById('id_avatar').value = sel;
}

function link(url){
	var avatar = document.getElementById('id_avatar');
	var player = document.getElementById('id_player')

	if (avatar.value && player.value) {

		window.location.href = url + '?avatar=' + avatar.value + '&player=' + player.value;

	} else if (! avatar.value) {

		alert('Você deve escolher um ajudante clicando em uma das imagens.');

	} else if (! player.value) {

		alert('Por favor digite seu nome.');
		player.focus();

	};
}