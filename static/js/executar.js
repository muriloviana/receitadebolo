//
// Função que sortea um número no intervalo setado
//
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min+1) + min);
}


//
// Função que retorna o objetivo de cada fase: true or false.
// Params:
// 		num = (int) Número da fase.
//		total_chocolate = (int) Quantidade de bolos de chocolate feitos pelo usuário.
//		total_morango = (int) Quantidade de bolos de morango feitos pelo usuário.
//		pedidos = (array string) Lista de pedidos do cliente, o tamanha deste lista varia entre 5 e 8.
//		qp_chocolate = (int) Quantidade de bolos de chocolate pedidos dentro do array pedidos.
//		qp_morango = (int) Quantidade de bolos de morango pedidos dentro do array pedidos.
//
function fase(num, total_chocolate, total_morango, pedidos, qp_chocolate, qp_morango){

	if (num == 1 && total_chocolate == 1) {

		return true

	} else if (num == 2 && total_chocolate == 5){
		
		return true

	} else if (num == 3 && total_chocolate == 10){

		return true

	} else if (num == 4 && total_morango == 1){

		return true

	} else if (num == 5 && total_morango == 5){

		return true

	} else if (num == 6 && total_morango == 5 && total_chocolate == 5){

		return true

	} else if (num == 7 && total_chocolate == pedidos.length){

		return true

	} else if (num == 8 && total_morango == pedidos.length){

		return true

	} else if (num == 9 && ((pedidos[0] == 'chocolate' && total_chocolate == 1 && total_morango == 0) || (pedidos[0] == 'morango' && total_morango == 1 && total_chocolate == 0))){

		return true

	} else if (num == 10 && total_chocolate == qp_chocolate && total_morango == qp_morango){

		return true

	} else if (num == 11 && total_chocolate == qp_chocolate && total_morango == qp_morango){

		return true

	} else {

		return false

	};

}


//
// Função que adiciona mais um bolo no placar de bolos.
// Param:
//		tipo = (string) Tipo de bolo a ser incrementado no placar: "chocolate" ou "morango".
//		bloco = (HTMLelement) Bloco que será marcado.
//		tempo = (int) Multiplicador do tempo de espera entre um bloco de comando e outro.
//		pedidos = (string) No caso dos pedidos serem apenas de um sabor.
//		pedidos = (array) Lista dos pedidos sortidos.
//
function fazerBolo(tipo, bloco, tempo, pedidos){
	setTimeout( function(){
		document.getElementById('t'+tipo).innerHTML = parseInt(document.getElementById('t'+tipo).innerHTML) + 1;
		if (tempo == 3 || tempo == 6 || tempo == 9){
			bloco.style.border = '2px solid #f6a19c';
		} else if (tempo == 1 || tempo == 4 || tempo == 7 || tempo == 10){
			bloco.style.border = '2px solid #2f8cc5';
		} else {
			bloco.style.border = '2px solid #3bb398';
		}
		if (pedidos){
			if (pedidos == 'pedido_chocolate') {
				document.getElementById('balao').style.display = 'none';
				document.getElementById('balao_pedido').style.display = 'block';
				document.getElementById('balao_pedido').innerHTML = '<article>Novo pedido [' + tempo.toString() + ']:<br/>Bolo de Chocolate</article>';
			} else if (pedidos == 'pedido_morango') {
				document.getElementById('balao').style.display = 'none';
				document.getElementById('balao_pedido').style.display = 'block';
				document.getElementById('balao_pedido').innerHTML = '<article>Novo pedido [' + tempo.toString() + ']:<br/>Bolo de Morango</article>';
			}
		}
	}, 1000 * tempo);
	var escopo = document.getElementById('escopo');
	var vetor = escopo.getElementsByTagName('li');
	for (var i = 0; i < vetor.length; i++) {
		if (vetor[i].getElementsByTagName('img').length > 0){
			vetor[i].getElementsByTagName('img')[0].style.border = 'none';
		}	
	};
}


//
// Função que executa os blocos de comando do escopo.
// Param:
//		num = (int) Número da fase.
//
function executar(num){
	var escopo = document.getElementById('escopo');
	var vetor = escopo.getElementsByTagName('li');
	var box_comandos = document.getElementById('box_comandos');

	//
	// Verificando se ainda existe algum bloco de comando que não está sendo utilizado.
	//
	if (box_comandos.getElementsByTagName('img').length > 0){
		document.getElementById('bg_aviso').style.display = 'block';
		document.getElementById('box_aviso').style.display = 'block';
		return false
	}

	document.getElementById('tchocolate').innerText = '0'; // Zerar o placar de bolos de chocolate, ao iniciar uma execução.
	document.getElementById('tmorango').innerText = '0'; // Zerar o placar de bolos de morango, ao iniciar uma execução.

	//
	// Criando array de pedidos.
	//
	var pedidos = [], qp_chocolate = 0, qp_morango = 0;
	for (var p = 0; p < randomIntFromInterval(5,8); p++) {
		if (randomIntFromInterval(1,2) % 2 == 0){
			pedidos[p] = 'chocolate';
			if (p < 5 && num == 10) {
				qp_chocolate += 1;
			} else if (num == 11){
				qp_chocolate += 1;
			};
		} else {
			pedidos[p] = 'morango';
			if (p < 5 && num == 10) {
				qp_morango += 1;
			} else if (num == 11){
				qp_morango += 1;
			};
		}
	};

	var total_chocolate = 0, total_morango = 0; total = 0; // Inicializando os contadores de bolos feitos de chocolate e morango.

	//
	// Percorrendo todas as tags li do escopo para executar os blocos de comandos.
	//
	for (var i = 0; i < vetor.length; i++) {

		//
		// Verificando se o li atual tem um bloco de comando.
		//
		if (vetor[i].getElementsByTagName('img').length > 0){

			var bt_atual = vetor[i].getElementsByTagName('img')[0];

			//
			// Verificando se o bloco de comando no li atual é um "Fazer Bolo de Chocolate".
			//
			if (bt_atual.id == 'bt_bolo_chocolate') {

				fazerBolo('chocolate', bt_atual, (total+1));
				total_chocolate += 1;
				total += 1;
			
			//
			// Verificando se o bloco de comando no li atual é um "Fazer Bolo de Morango".
			//
			} else if (bt_atual.id == 'bt_bolo_morango') {
			
				fazerBolo('morango', bt_atual, (total+1));
				total_morango += 1;
				total += 1;
			
			//
			// Verificando se o bloco de comando no li atual é um "For".
			//
			} else if (bt_atual.id == 'bt_for') {

				//
				// Gerando o loop do bloco de comando for com base na quantidade de loops (qloop) passados pelo usuário.
				//
				var loop = parseInt(document.getElementById('qloop').value);
				for (var count = 0; count < loop; count++) {

					var stop = false; // Variável que indicará o fim dos blocos de comandos de um loop.
					var j = i+1; // Índice da próxima tag li.

					//
					// Executando os blocos de comandos abaixo do for até encontrar uma tag li vazia ou o fim do escopo.
					//
					while (stop == false){

						//
						// Verificando se o li+1 (prosterior) tem um bloco de comando dentro.
						//
						if (vetor[j].getElementsByTagName('img').length > 0){

							var bt_sel = vetor[j].getElementsByTagName('img')[0];

							//
							// Verificando se o bloco de comando do li+1 (posterior) é um "Fazer Bolo de Chocolate".
							//
							if (bt_sel.id == 'bt_bolo_chocolate') {

								fazerBolo('chocolate', bt_sel, (total+1));
								total_chocolate += 1;
								total += 1;

							//
							// Verificando se o bloco de comando do li+1 (posterior) é um "Fazer Bolo de Morango".
							//
							} else if (bt_sel.id == 'bt_bolo_morango') {

								fazerBolo('morango', bt_sel, (total+1));
								total_morango += 1;
								total += 1;

							//
							// Verificando se o bloco de comando do li+1 (posterior) é um "If" ou um "Else".
							//
							} else if (bt_sel.id == 'bt_if' || bt_sel.id == 'bt_else'){

								//
								// Checando se o pedido equivalente ao loop é igual a condição passada pelo usuário.
								// Exemplo:
								// 		Pedido[0] é igual a "Chocolate" e o cliente verificou "Se pedir Bolo de Chocolate".
								//		Ou seja, a condição é verdadeira.
								//
								if (pedidos[count] == document.getElementById('verificar').value) {
									var condicao = true;
								} else {
									var condicao = false;
								}

								var k = j+1; // Criando o índice da tag li+2 (duplamente posterior).
								//
								// Verificando se a condição é verdadeira e se o bloco de comando do li+1 (posterior) é um "If".
								//
								if (condicao == true && bt_sel.id == 'bt_if'){

									//
									// Varrendo o escopo a partir da tag li+2 (duplamente posterior).
									//
									for (k; k < vetor.length; k++) {

										//
										// Verifincado se a tag li+2 (duplamente posterior) tem um bloco de comando dentro.
										//
										if (vetor[k].getElementsByTagName('img').length > 0){
											var bt_prox = vetor[k].getElementsByTagName('img')[0];

											//
											// Checando se a tag li+2 (duplamente posterior) é um bloco de comando "Fazer Bolo de Chocolate".
											//
											if (bt_prox.id == 'bt_bolo_chocolate') {

												fazerBolo('chocolate', bt_prox, (total+1), 'pedido_chocolate');
												total_chocolate += 1;
												total += 1;

											//
											// Checando se a tag li+2 (duplamente posterior) é um bloco de comando "Fazer Bolo de Morango".
											//
											} else if (bt_prox.id == 'bt_bolo_morango'){

												fazerBolo('morango', bt_prox, (total+1), 'pedido_morango');
												total_morango += 1;
												total += 1;

											//
											// Checando se a tag li+2 (duplamente posterior) é um bloco de comando "Else".
											// Neste caso a condição if chegará ao fim.
											//
											} else if (bt_prox.id == 'bt_else'){
												k -= 1;
												break
											}
										//
										// Caso a tag li+2 (duplamente posterior) não tenha um bloco de comando dentro,
										// a condição if chegará ao fim.
										//
										} else {
											k -= 1;
											break
										} // Fim da verificação se existe um bloco de comando na tag li+2 (duplamente posterior)
									} // Fim da varredura do escopo a partir da tag li+2 (duplamente posterior).

								//
								// Verificando se a condição é falsa e se o bloco de comando do li+1 (posterior) é um "Else".
								//
								} else if (condicao == false && bt_sel.id == 'bt_else') {

									//
									// Varrendo o escopo a partir da tag li+2 (duplamente posterior).
									//
									for (k; k < vetor.length; k++) {

										//
										// Verifincado se a tag li+2 (duplamente posterior) tem um bloco de comando dentro.
										//
										if (vetor[k].getElementsByTagName('img').length > 0){
											var bt_prox = vetor[k].getElementsByTagName('img')[0];

											//
											// Checando se a tag li+2 (duplamente posterior) é um bloco de comando "Fazer Bolo de Chocolate".
											//
											if (bt_prox.id == 'bt_bolo_chocolate') {

												fazerBolo('chocolate', bt_prox, (total+1), 'pedido_chocolate');
												total_chocolate += 1;
												total += 1;

											//
											// Checando se a tag li+2 (duplamente posterior) é um bloco de comando "Fazer Bolo de Morango".
											//
											} else if (bt_prox.id == 'bt_bolo_morango'){
												fazerBolo('morango', bt_prox, (total+1), 'pedido_morango');
												total_morango += 1;
												total += 1;
											}
										//
										// Caso a tag li+2 (duplamente posterior) não tenha um bloco de comando dentro,
										// a condição else chegará ao fim.
										//
										} else {
											k -= 1;
											break
										} // Fim da verificação se existe um bloco de comando na tag li+2 (duplamente posterior)
									} // Fim da varredura do escopo a partir da tag li+2 (duplamente posterior).
								} // Fim da condição if ou else.
								j = k;
							} // Fim da verificação se o bloco de comando do li+1 (posterior) é um "If" ou um "Else".
							j += 1;
						//
						// Caso não haja bloco de comando dentro do li+1 (prosterior), chegamos ao fim dos blocos de comando for.
						// Passando para o próximo loop, caso haja.
						//
						} else {
							stop = true;
						}
					} // Fim da execução dos blocos de comandos abaixo do for.
				} // Fim do loop do bloco de comando for.
				i = j;

			//
			// Verificando se o bloco de comando no li atual é um "While".
			//
			} else if (bt_atual.id == 'bt_while') {

				//
				// Percorrendo o vetor de pedidos do cliente.
				//
				for (var count = 0; count < pedidos.length; count++) {

					var stop = false; // Variável que define o fim de um loop.
					var j = i+1; // Índice da tag li+1 (posterior).
					while (stop == false){

						//
						// Verificando se existe um bloco de comando na tag li+1 (posterior).
						//
						if (vetor[j].getElementsByTagName('img').length > 0){

							var bt_sel = vetor[j].getElementsByTagName('img')[0];

							//
							// Checando se o bloco de comando da tag li+1 (posterior) é um "Fazer Bolo de Chocolate".
							//
							if (bt_sel.id == 'bt_bolo_chocolate') {

								fazerBolo('chocolate', bt_sel, (total+1), 'pedido_chocolate');
								total_chocolate += 1;
								total += 1;

							//
							// Checando se o bloco de comando da tag li+1 (posterior) é um "Fazer Bolo de Morango".
							//
							} else if (bt_sel.id == 'bt_bolo_morango') {

								fazerBolo('morango', bt_sel, (total+1), 'pedido_morango');
								total_morango += 1;
								total += 1;
							//
							// Checando se o bloco de comando da tag li+1 (posterior) é um "If" ou "Else".
							//
							} else if (bt_sel.id == 'bt_if' || bt_sel.id == 'bt_else') {
								if (pedidos[count] == document.getElementById('verificar').value) {
									var condicao = true;
								} else {
									var condicao = false;
								}

								var k = j+1; // Índice da tag li+2 (duplamente posterior).

								if (condicao == true && bt_sel.id == 'bt_if'){
									for (k; k < vetor.length; k++) {
										if (vetor[k].getElementsByTagName('img').length > 0){
											var bt_prox = vetor[k].getElementsByTagName('img')[0];
											if (bt_prox.id == 'bt_bolo_chocolate') {
												fazerBolo('chocolate', bt_prox, (total+1), 'pedido_chocolate');
												total_chocolate += 1;
												total += 1;
											} else if (bt_prox.id == 'bt_bolo_morango'){
												fazerBolo('morango', bt_prox, (total+1), 'pedido_morango');
												total_morango += 1;
												total += 1;
											} else if (bt_prox.id == 'bt_else'){
												k -= 1;
												break
											}
										} else {
											k -= 1;
											break
										}
									}
								} else if (condicao == false && bt_sel.id == 'bt_else') {
									for (k; k < vetor.length; k++) {
										if (vetor[k].getElementsByTagName('img').length > 0){
											var bt_prox = vetor[k].getElementsByTagName('img')[0];
											if (bt_prox.id == 'bt_bolo_chocolate') {
												fazerBolo('chocolate', bt_prox, (total+1), 'pedido_chocolate');
												total_chocolate += 1;
												total += 1;
											} else if (bt_prox.id == 'bt_bolo_morango'){
												fazerBolo('morango', bt_prox, (total+1), 'pedido_morango');
												total_morango += 1;
												total += 1;
											}
										} else {
											k -= 1;
											break
										}
									}
								}
								j = k;
							}
							j += 1; // Próximo índice
						//
						// Caso não haja bloco de comando na tag li+1 (posterior), este loop chegará ao fim.
						//
						} else {
							stop = true;
						} 
					} // Fim de um loop.
				} // Fim do vetor de pedidos do cliente.
				i = j;

			//
			// Verificando se o bloco de comando no li atual é um "If" ou um "Else".
			//
			} else if (bt_atual.id == 'bt_if' || bt_atual.id == 'bt_else') {

				//
				// Checando se o primeiro pedido é equivalente a condição passada pelo usuário.
				// Exemplo:
				//		Pedido[0] é igual a "Chocolate" e o cliente verificou "Se pedir Bolo de Chocolate".
				//		A condição será verdadeira.
				//
				if (pedidos[0] == document.getElementById('verificar').value) {
					var condicao = true;
				} else {
					var condicao = false;
				}

				var j = i+1; // Índice da tag li+1 (posterior).

				//
				// Verifincado se o bloco de comando atual é "If" e se a condição é verdadeira.
				//
				if (condicao == true && bt_atual.id == 'bt_if'){

					//
					// Percorrendo o escopo a partir da posição li+1 (posterior).
					//
					for (j; j < vetor.length; j++) {

						//
						// Verificando se na tag li+1 (posterior) existe algum bloco de comando.
						//
						if (vetor[j].getElementsByTagName('img').length > 0){
							var bt_sel = vetor[j].getElementsByTagName('img')[0];

							//
							// Checando se o bloco de comando li+1 (posterior) é um "Fazer Bolo de Chocolate".
							//
							if (bt_sel.id == 'bt_bolo_chocolate') {

								fazerBolo('chocolate', bt_sel, (total+1), 'pedido_chocolate');
								total_chocolate += 1;
								total += 1;

							//
							// Checando se o bloco de comando li+1 (posterior) é um "Fazer Bolo de Morango".
							//
							} else if (bt_sel.id == 'bt_bolo_morango'){

								fazerBolo('morango', bt_sel, (total+1), 'pedido_morango');
								total_morango += 1;
								total += 1;

							//
							// Checando se o bloco de comando li+1 (posterior) é um "Else".
							// Caso seja, a condição chegará ao fim e o valor de j será decrescido 1.
							//
							} else if (bt_sel.id == 'bt_else'){

								j -= 1;
								break

							}
						//
						// Caso não exista nenhum bloco de comando dentro da tag li+1 (posterior) a condição chegará ao fim.
						//
						} else {
							j -= 1;
							break
						} // fim da verificação na tag li+1 (posterior).
					} // Fim do comando "If"
				//
				// Verifincado se o bloco de comando atual é "Else" e se a condição é falsa.
				//
				} else if (condicao == false && bt_atual.id == 'bt_else') {

					//
					// Percorrendo o escopo a partir da posição li+1 (posterior).
					//
					for (j; j < vetor.length; j++) {

						//
						// Verificando se na tag li+1 (posterior) existe algum bloco de comando.
						//
						if (vetor[j].getElementsByTagName('img').length > 0){
							var bt_sel = vetor[j].getElementsByTagName('img')[0];

							//
							// Checando se o bloco de comando li+1 (posterior) é um "Fazer Bolo de Chocolate".
							//
							if (bt_sel.id == 'bt_bolo_chocolate') {

								fazerBolo('chocolate', bt_sel, (total+1), 'pedido_chocolate');
								total_chocolate += 1;
								total += 1;

							//
							// Checando se o bloco de comando li+1 (posterior) é um "Fazer Bolo de Morango".
							//
							} else if (bt_sel.id == 'bt_bolo_morango'){

								fazerBolo('morango', bt_sel, (total+1), 'pedido_morango');
								total_morango += 1;
								total += 1;

							}
						//
						// Caso não exista nenhum bloco de comando dentro da tag li+1 (posterior) a condição chegará ao fim.
						//
						} else {
							j -= 1;
							break
						} // Fim da verificação na tag li+1 (posterior).
					} // Fim do comando "Else"
				}
				i = j;
			} // Fim da verificação se o bloco de comando no li atual é um "If" ou um "Else".
		} // Fim da verificação se existe um bloco de comando dentro do li atual.

	}

	//
	// Verificando se o objetivo foi completo ou não.
	//
	setTimeout( function(){
		objetivo = fase(num, total_chocolate, total_morango, pedidos, qp_chocolate, qp_morango);
		if (objetivo) {
			document.getElementById('bg_sucesso').style.display = 'block';
			document.getElementById('box_sucesso').style.display = 'block';
		} else {
			document.getElementById('bg_erro').style.display = 'block';
			document.getElementById('box_erro').style.display = 'block';
		}
		for (var x = 0; x < vetor.length; x++) {
		if (vetor[x].getElementsByTagName('img').length > 0){
			vetor[x].getElementsByTagName('img')[0].style.border = 'none';
		}
		document.getElementById('balao').style.display = 'block';
		document.getElementById('balao_pedido').style.display = 'none';
	};
	}, 1000 * (total_chocolate+total_morango+1));
}


//
// Função que fecha a tela de erro.
//
function fechar_erro(){
	document.getElementById('bg_erro').style.display = 'none';
	document.getElementById('box_erro').style.display = 'none';
}

//
// Função que fecha a tela de aviso.
//
function fechar_aviso(){
	document.getElementById('bg_aviso').style.display = 'none';
	document.getElementById('box_aviso').style.display = 'none';
	document.getElementById('balao').style.display = 'block';
	document.getElementById('balao_pedido').style.display = 'none';
}



