//
// Função que organiza a indentação dos blocos de comandos.
//
function organize() {
	var escopo = document.getElementById('escopo');
	var vetor = escopo.getElementsByTagName('li');

	for (var i = 1; i < vetor.length; i++) {
		
		if (vetor[i].getElementsByTagName('img').length > 0){
			var flag = false, j = i-1;
			var bt_atual = vetor[i].getElementsByTagName('img')[0];
			
			while (flag == false){
				
				if (vetor[j].getElementsByTagName('img').length > 0) {
					var bt_ant = vetor[j].getElementsByTagName('img')[0];
					
					if (bt_ant.id == 'bt_for' || bt_ant.id == 'bt_while' || (bt_ant.id == 'bt_if' &&  bt_atual.id != 'bt_else') || bt_ant.id == 'bt_else') {
						var p = parseInt(vetor[j].style.paddingLeft.substring(0, vetor[j].style.paddingLeft.length - 2)) + 35;
						vetor[i].style.paddingLeft = p.toString()+'px';
						flag = true;

					} else {
						vetor[i].style.paddingLeft = vetor[j].style.paddingLeft;
						j -= 1;
						if (j < 0) { flag=true; };
					}
				} else {
					vetor[i].style.paddingLeft = '0';
					flag = true;
				}
			}
		}
	}

	return false;
}

var static_url = '/static/images/'; // Diretório padrão das imagens do projeto.
var dragSrcEl = null; // Src do elemento selecionado.

//
// Função de inicialização do efeito Drag (Arrastar).
//
function handleDragStart(e) {

	dragSrcEl = this;

	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);

	return false;
}

//
// Função durante o efeito Drag (Arrastar).
//
function handleDragOver(e) {
	e.preventDefault();
	e.stopPropagation();

	e.dataTransfer.dropEffect = 'move';

	document.getElementById('escopo').style.border = "2px dashed #db6058";

	return false;
}

//
// Função após o efeito Drag (Arrastar).
//
function handleDragEnd(e) {
	document.getElementById('escopo').style.border = "1px solid #666";
}

//
// Função do efeito Drop (Soltar).
//
function handleDrop(e) {
	e.preventDefault();
	e.stopPropagation();

	if (dragSrcEl != this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}

	handleDragEnd(e);
	organize();

	return false;
}

//
// Adicionando os efeitos aos blocos de comandos.
//
var cols = document.querySelectorAll('#box_comandos figure');
[].forEach.call(cols, function(i) {
	i.addEventListener('dragstart', handleDragStart, false);
	i.addEventListener('dragover', handleDragOver, false);
	i.addEventListener('dragend', handleDragEnd, false);
});

//
// Adicionado os efeitos aos blocos de comandos dentro do escopo.
//
var linhas = document.querySelectorAll('#escopo li');
[].forEach.call(linhas, function(i) {
	i.addEventListener('dragstart', handleDragStart, false);
	i.addEventListener('dragover', handleDragOver, false);
	i.addEventListener('dragend', handleDragEnd, false);
	i.addEventListener('drop', handleDrop, false);
});