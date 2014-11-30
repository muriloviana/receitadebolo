function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min+1) + min);
}


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

	} else if (num == 9 && ((pedidos[0] == 'chocolate' && total_chocolate == 1) || (pedidos[0] == 'morango' && total_morango == 1))){

		return true

	} else if (num == 10 && total_chocolate == qp_chocolate && total_morango == qp_morango){

		return true

	} else {

		return false

	};

}


function fazerBolo(tipo){
	document.getElementById('t'+tipo).innerText = parseInt(document.getElementById('t'+tipo).innerText) + 1;
}


function executar(num){
	var escopo = document.getElementById('escopo');
	var vetor = escopo.getElementsByTagName('li');
	var box_comandos = document.getElementById('box_comandos');

	if (box_comandos.getElementsByTagName('img').length > 0){
		document.getElementById('bg_aviso').style.display = 'block';
		document.getElementById('box_aviso').style.display = 'block';
		return false
	}

	document.getElementById('tchocolate').innerText = '0';
	document.getElementById('tmorango').innerText = '0';

	var pedidos = [], qp_chocolate = 0, qp_morango = 0;
	for (var p = 0; p < randomIntFromInterval(5,8); p++) {
		if (randomIntFromInterval(1,2) % 2 == 0){
			pedidos[p] = 'chocolate';
			if (p < 5) {
				qp_chocolate += 1;
			};
		} else {
			pedidos[p] = 'morango';
			if (p < 5) {
				qp_morango += 1;
			};
		}
	};

	var total_chocolate = 0, total_morango = 0;

	for (var i = 0; i < vetor.length; i++) {

		if (vetor[i].getElementsByTagName('img').length > 0){
			var bt_atual = vetor[i].getElementsByTagName('img')[0];

			if (bt_atual.id == 'bt_bolo_chocolate') {

				fazerBolo('chocolate');
				total_chocolate += 1;
			
			} else if (bt_atual.id == 'bt_bolo_morango') {
			
				fazerBolo('morango');
				total_morango += 1;
			
			} else if (bt_atual.id == 'bt_for') {

				var loop = parseInt(document.getElementById('qloop').value);
				for (var count = 0; count < loop; count++) {

					var stop = false;
					var j = i+1;
					while (stop == false){

						if (vetor[j].getElementsByTagName('img').length > 0){

							var bt_sel = vetor[j].getElementsByTagName('img')[0];

							if (bt_sel.id == 'bt_bolo_chocolate') {

								fazerBolo('chocolate');
								total_chocolate += 1;

							} else if (bt_sel.id == 'bt_bolo_morango') {

								fazerBolo('morango');
								total_morango += 1;

							} else if (bt_sel.id == 'bt_if' || bt_sel.id == 'bt_else'){

								if (pedidos[count] == document.getElementById('verificar').value) {
									var condicao = true;
								} else {
									var condicao = false;
								}

								var k = j+1;
								if (condicao == true && bt_sel.id == 'bt_if'){
									for (k; k < vetor.length; k++) {
										if (vetor[k].getElementsByTagName('img').length > 0){
											var bt_prox = vetor[k].getElementsByTagName('img')[0];
											if (bt_prox.id == 'bt_bolo_chocolate') {
												fazerBolo('chocolate');
												total_chocolate += 1;
											} else if (bt_prox.id == 'bt_bolo_morango'){
												fazerBolo('morango');
												total_morango += 1;
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
												fazerBolo('chocolate');
												total_chocolate += 1;
											} else if (bt_prox.id == 'bt_bolo_morango'){
												fazerBolo('morango');
												total_morango += 1;
											}
										} else {
											k -= 1;
											break
										}
									}
								}
								j = k;

							}
							j += 1;
						} else {
							stop = true;
						}
					}
				};
				i = j;

			} else if (bt_atual.id == 'bt_while') {

				for (var count = 0; count < pedidos.length; count++) {

					var stop = false;
					var j = i+1;
					while (stop == false){

						if (vetor[j].getElementsByTagName('img').length > 0){

							var bt_sel = vetor[j].getElementsByTagName('img')[0];

							if (bt_sel.id == 'bt_bolo_chocolate') {

								fazerBolo('chocolate');
								total_chocolate += 1;

							} else if (bt_sel.id == 'bt_bolo_morango') {

								fazerBolo('morango');
								total_morango += 1;

							}
							j += 1;
						} else {
							stop = true;
						}
					}
				};
				i = j;

			} else if (bt_atual.id == 'bt_if' || bt_atual.id == 'bt_else') {

				if (pedidos[0] == document.getElementById('verificar').value) {
					var condicao = true;
				} else {
					var condicao = false;
				}

				var j = i+1;
				if (condicao == true && bt_atual.id == 'bt_if'){
					for (j; j < vetor.length; j++) {
						if (vetor[j].getElementsByTagName('img').length > 0){
							var bt_sel = vetor[j].getElementsByTagName('img')[0];
							if (bt_sel.id == 'bt_bolo_chocolate') {
								fazerBolo('chocolate');
								total_chocolate += 1;
							} else if (bt_sel.id == 'bt_bolo_morango'){
								fazerBolo('morango');
								total_morango += 1;
							} else if (bt_sel.id == 'bt_else'){
								j -= 1;
								break
							}
						} else {
							j -= 1;
							break
						}
					}
				} else if (condicao == false && bt_atual.id == 'bt_else') {
					for (j; j < vetor.length; j++) {
						if (vetor[j].getElementsByTagName('img').length > 0){
							var bt_sel = vetor[j].getElementsByTagName('img')[0];
							if (bt_sel.id == 'bt_bolo_chocolate') {
								fazerBolo('chocolate');
								total_chocolate += 1;
							} else if (bt_sel.id == 'bt_bolo_morango'){
								fazerBolo('morango');
								total_morango += 1;
							}
						} else {
							j -= 1;
							break
						}
					}
				}
				i = j;

			}
		}
	}

	console.log(pedidos);
	console.log(qp_chocolate);
	console.log(total_chocolate);
	console.log(qp_morango);
	console.log(total_morango);
	objetivo = fase(num, total_chocolate, total_morango, pedidos, qp_chocolate, qp_morango);
	if (objetivo) {
		document.getElementById('bg_sucesso').style.display = 'block';
		document.getElementById('box_sucesso').style.display = 'block';
	} else {
		document.getElementById('bg_erro').style.display = 'block';
		document.getElementById('box_erro').style.display = 'block';
	}
}


function fechar_erro(){
	document.getElementById('bg_erro').style.display = 'none';
	document.getElementById('box_erro').style.display = 'none';
}

function fechar_aviso(){
	document.getElementById('bg_aviso').style.display = 'none';
	document.getElementById('box_aviso').style.display = 'none';
}