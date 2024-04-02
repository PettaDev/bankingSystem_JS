
function login() {
	let nomeUsuario = prompt("Olá, qual é seu nome?");
	let senhaUsuario = prompt("Qual sua senha?");

	if (senhaUsuario == 3589) {
		window.location.href = "home.html";
		alert("Bem vindo ao CASH-OUT: " + nomeUsuario + " um prazer ter você por aqui.");
	} else if (senhaUsuario != 3589) {
		alert("Senha incorreta, por favor tente novamente.");
		login();
	}
}

function entrando() {
	window.location.href = "operacoes.html";
}

let saldo = 100.5;

function operacoes() {

	let escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Depósito 3.) Saque 4.) Sair'));

	switch (escolha){
		case 1:
			ver_saldo();
			break;
		case 2:
			fazer_deposito();
			break;
		case 3:
			fazer_saque();
			break;
		case 4:
			sair();
			break;
		default:
			erro();
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
	var confirma = confirm('Você deseja sair?');
	if (confirma) {
		window.close();
	} else { 
		inicio();
	}
}

inicio();