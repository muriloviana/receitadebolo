function chat(sel, ato) {
	var a = document.getElementById('chat' + (parseInt(sel) - 1));
	var prox = document.getElementById('chat' + sel);
	a.style.display = 'none';
	prox.style.display = 'block';

	if (ato == 'placar'){
		document.getElementById('placar_bolos').style.border = '5px solid yellow';
		document.getElementById('box_comandos').style.opacity = '0.5';
		document.getElementById('escopo').style.opacity = '0.5';
		document.getElementById('bt_interrogacao').style.opacity = '0.5';
		document.getElementById('bt_estrela').style.opacity = '0.5';
	} else if (ato == 'comandos'){
		document.getElementById('placar_bolos').style.opacity = '0.5';
		document.getElementById('placar_bolos').style.border = 'none';
		document.getElementById('box_comandos').style.opacity = '1';
		document.getElementById('box_comandos').style.border = '5px solid yellow';
	} else if (ato == 'escopo'){
		document.getElementById('box_comandos').style.opacity = '0.5';
		document.getElementById('box_comandos').style.border = 'none';
		document.getElementById('escopo').style.opacity = '1';
		document.getElementById('escopo').style.border = '5px solid yellow';
	} else if (ato == 'estrela'){
		document.getElementById('escopo').style.opacity = '0.5';
		document.getElementById('escopo').style.border = '1px solid #666';
		document.getElementById('bt_estrela').style.opacity = '1';
		document.getElementById('bt_estrela').style.border = '5px solid yellow';
	} else if (ato == 'ajuda'){
		document.getElementById('bt_estrela').style.opacity = '0.5';
		document.getElementById('bt_estrela').style.border = 'none';
		document.getElementById('bt_interrogacao').style.opacity = '1';
		document.getElementById('bt_interrogacao').style.border = '5px solid yellow';
	} else if (ato == 'normal'){
		document.getElementById('bt_interrogacao').style.opacity = '1';
		document.getElementById('bt_interrogacao').style.border = 'none';
		document.getElementById('bt_estrela').style.opacity = '1';
		document.getElementById('escopo').style.opacity = '1';
		document.getElementById('box_comandos').style.opacity = '1';
		document.getElementById('placar_bolos').style.opacity = '1';
	} else if (ato == 'novo_bloco_for'){
		document.getElementById('novo_bloco_for').style.display = 'block';
	} else if (ato == 'novo_bolo_morango'){
		document.getElementById('novo_bolo_morango').style.display = 'block';
	} else if (ato == 'novo_bloco_while'){
		document.getElementById('novo_bloco_while').style.display = 'block';
	} else if (ato == 'novo_botao_if_else'){
		document.getElementById('novo_botao_if').style.display = 'block';
		document.getElementById('novo_botao_else').style.display = 'block';
	}
}