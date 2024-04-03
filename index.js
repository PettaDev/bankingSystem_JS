/*
function login() {
	let nomeUsuario = prompt("Olá, qual é seu nome?");
	let senhaUsuario = prompt("Qual sua senha?");

	if (senhaUsuario == 3589) {
		window.location.href = "home.html";
		alert("Bem vindo ao CASH-OUT: " + nomeUsuario + " um prazer ter você por aqui.");
	} else if (senhaUsuario != 3589) {
		alert("Senha incorreta, por favor tente novamente.");
	}
}

function entrando() {
	window.location.href = "operacoes.html";
}



function operacoes() {

	let escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Depósito 3.) Saque 4.) Sair'));
	let saldo = 100.5;

	switch (escolha){
		case 1:
			alert('Seu saldo atual é: ' + saldo);
			break;
		case 2:
			let valordep = parseFloat(prompt("Digite o valor do Deposito"));
			let saldoapd = valordep + saldo;
	
			alert("Seu saldo após o deposito é igual a: " + saldoapd + "0");
		  break;
			break;
		case 3:
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			}
			if (saque > saldo || saque <= 0) {
				alert("Operação não autorizada, você não tem dinheiro suficiente!");
			} else {
				saldo -= saque;
				ver_saldo();
			}
		case 4:
			let confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else { 
				inicio();
			}
			break;
		default:
			alert("Nenhuma opção valida, voltando para a pagina de operações");
	}

}		



function ver_saldo() {
	alert('Seu saldo atual é: ' + saldo);
	inicio();
}

function fazer_deposito() {
	var deposito = parseFloat(prompt('Qual o valor para depósito?'));
	if (isNaN(deposito) || deposito === '') {
		alert('Por favor, informe um número:');
		fazer_deposito();
	} else {
		saldo += deposito;
		ver_saldo();
	}
}

function fazer_saque() {
	var saque = parseFloat(prompt('Qual o valor para saque?'));
	if (isNaN(saque) || saque === '') {
		alert('Por favor, informe um número:');
		fazer_saque();
	}
	if (saque > saldo || saque <= 0) {
		alert("Operação não autorizada, você não tem dinheiro suficiente!");
	} else {
		saldo -= saque;
		ver_saldo();
	}
}

function erro() {
	alert('Por favor, informe um número entre 1 e 4');
	inicio();
}

function sair() {
	let confirma = confirm('Você deseja sair?');
	if (confirma) {
		window.close();
	} else { 
		inicio();
	}
}

inicio();
*/

function entrar() {
	let nome = prompt("Digite seu Nome: ");
	let senha = parseInt(prompt("Digite a sua senha: "));
  
	if (senha == 3589) {
	  alert("Bem vindo ao CASH-OUT, " + nome + " é um prazer ter você por aqui.");
	} else if (senha != 3589) {
	  alert("Senha incorreta, por favor tente novamente.");
	  entrar();
	}
  }
entrar();

function operacoes() {
	let escolha = parseInt(prompt("Selecione uma opção 1.) Saldo 2.) Depósito 3.) Saque 4.) Sair"));
	let saldo = 100.5;
  
	switch (escolha) {
		
	  case 1:
		alert("O seu Saldo é: R$" + saldo + "0");
		break;
	  case 2:
		let valordep = parseFloat(prompt("Digite o valor do Deposito"));
        let saldoapd = valordep + saldo;

	    alert("Seu saldo após o deposito é igual a: " + saldoapd + "0");
		break;

	  case 3:
		let saque = parseFloat(prompt("Digite o valor do Saque: "));
		let novosaldo = saldo - saque;
  
		  if (saque >= saldo) {
				alert("O valor da transferencia não pode ser maior que o saldo");
		  } else if (saque <= 0) {
				alert("O valor da transferencia não pode ser negativo ou ZERO");
		  } else if (saque < saldo) {
				alert("Seu saldo apos a transferência é igual a: " + novosaldo + "0" + " para a conta: " + conta);
				operacoes()

		  }
		break;

	  case 4:
		alert("Obrigado por acessar CASH-OUT Solutions. Te vejo na próxima!");
		operacoes()
		break;
	}
  }
  

