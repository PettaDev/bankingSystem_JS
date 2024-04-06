function entrar() {
	let nome = prompt("Digite seu Nome: ");
	let senha = parseInt(prompt("Digite a sua senha: "));
  
	if (senha == 3589) {
	  alert("Bem vindo ao CASH-OUT, " + nome + " é um prazer ter você por aqui.");
	  operacoes(); // chama a função "operacoes" apenas se "senha" == 3589
	} else if (senha != 3589) {
	  alert("Senha incorreta, por favor tente novamente.");
	  entrar();
	}
  }

function operacoes() {
	let escolha = parseInt(prompt("Selecione uma opção 1.) Saldo 2.) Depósito 3.) Saque 4.) Sair"));
	let saldo = 100.5;
  
	// SUGESTÃO: colocar um while para sempre que o usuário escolher uma opção voltar para as escolhas de operação, se o usuário escolher sair(opção 4) sai do looping.

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

// Adicionei as chamada da funão "entrar" aqui em baixo.
entrar(); 
