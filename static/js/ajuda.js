//
// Efeito onMouseOver botão de ajuda.
//
function ajudaOver(obj){
	obj.innerHTML = 'Ajuda';
}

//
// Efeito onMouseOut botão de ajuda.
//
function ajudaOut(obj){
	obj.innerHTML = '';
}

//
// Ajuda referente a fase.
//
function ajuda(fase){

	if (fase == 1) {
		alert('-> Clique, segure e arraste os blocos de comando para dentro do Escopo (área com a marca d\'água do jogo). Depois clique no botão "Executar".');
	} else if (fase == 2){
		alert('-> Clique, segure e arraste os blocos de comando para dentro do Escopo (área com a marca d\'água do jogo). Depois clique no botão "Executar".');
	} else if (fase == 3){
		alert('-> Não deixe linhas em branco entre os blocos de comando.\n-> Lembre-se de que o bloco "Repetir N vezes" só repete os blocos que estiverem abaixo dele.');
	} else if (fase == 4){
		alert('-> Clique, segure e arraste os blocos de comando para dentro do Escopo (área com a marca d\'água do jogo). Depois clique no botão "Executar".');
	} else if (fase == 5){
		alert('-> Não deixe linhas em branco entre os blocos de comando.\n-> Lembre-se de que o bloco "Repetir N vezes" só repete os blocos que estiverem abaixo dele.');
	} else if (fase == 6){
		alert('-> Não deixe linhas em branco entre os blocos de comando.\n-> Lembre-se de que o bloco "Repetir N vezes" só repete os blocos que estiverem abaixo dele.');
	} else if (fase == 7){
		alert('-> Leia com atenção o objetivo da fase.\n-> Não deixe linhas em branco entre os blocos de comando.\n-> Lembre-se de que o bloco "Enquanto houver pedido" só repete os blocos que estiverem abaixo dele.');
	} else if (fase == 8){
		alert('-> Leia com atenção o objetivo da fase.\n-> Não deixe linhas em branco entre os blocos de comando.\n-> Lembre-se de que o bloco "Enquanto houver pedido" só repete os blocos que estiverem abaixo dele.');
	} else if (fase == 9){
		alert('-> Leia com atenção o objetivo da fase.\n-> Evite deixar linhas em branco entre os blocos de comando.\n-> O bloco de comando "Senão" deve estar sempre em alguma linha após o comando "Se pedir ...", nunca antes.');
	} else if (fase == 10){
		alert('-> Leia com atenção o objetivo da fase.\n-> Não deixe linhas em branco entre os blocos de comando.\n-> O bloco de comando "Senão" deve estar sempre em alguma linha após o comando "Se pedir ...", nunca antes.\n-> Lembre-se de que o bloco "Repetir N vezes" só repete os blocos que estiverem abaixo dele.');
	} else if (fase == 11){
		alert('-> Leia com atenção o objetivo da fase.\n-> Não deixe linhas em branco entre os blocos de comando.\n-> O bloco de comando "Senão" deve estar sempre em alguma linha após o comando "Se pedir ...", nunca antes.\n-> Lembre-se de que o bloco "Enquanto houver pedido" só repete os blocos que estiverem abaixo dele.');
	};

	return false
}