function calculadora() {
    const operacao = number(prompt("Escolha uma operação:/n 1 - SOMA/n 2 - SUBTRAÇÃO/n 3 - PRODUTO/n 4 - QUOCIENTE/n 5 - RESTO/n 6 - POTÊNCIA"));
  
    if (!operacao || operacao > 6) {
      alert("Erro! - Operação Inválida!");
      calculadora();
    } else {
      let n1 = number(prompt("Insira o primeiro valor:"));
      let n2 = number(prompt("Insira o segundo valor:"));
      let resultado;
  
      if (!n1 || !n2) {
        alert("Erro! - Parâmetro Inválido!");
      } else {
        function soma() {
          resultado = n1 + n2;
          alert(`${n1} + ${n2} = ${resultado}`);
          novaOperacao();
        }
  
        function subtracao() {
          resultado = n1 - n2;
          alert(`${n1} - ${n2} = ${resultado}`);
          novaOperacao();
        }
  
        function produto() {
          resultado = n1 * n2;
          alert(`${n1} * ${n2} = ${resultado}`);
          novaOperacao();
        }
  
        function quociente() {
          resultado = n1 / n2;
          alert(`${n1} / ${n2} = ${resultado}`);
          novaOperacao();
        }
  
        function resto() {
          resultado = n1 % n2;
          alert(`O resto da divisão entre ${n1} e ${n2} é igual à ${resultado}`);
          novaOperacao();
        }
  
        function potencia() {
          resultado = n1 ** n2;
          alert(`${n1} elevado à ${n2} é igual à ${resultado}`);
          novaOperacao();
        }
      }
  
      /*  if (operacao == 1) {
          soma();
        } else if (operacao == 2) {
          subtracao();
        } else if (operacao == 3) {
          produto();
        } else if (operacao == 4) {
          quociente();
        } else if (operacao == 5) {
          resto();
        } else if (operacao == 6) {
          potencia();
        } */
  
      switch (operacao) {
        case 1:
          soma();
          break;
        case 2:
          subtracao();
          break;
        case 3:
          produto();
          break;
        case 4:
          quociente();
        case 5:
          resto();
          break;
        case 6:
          potencia();
          break;
      }
  
      function novaOperacao() {
        const opcao = prompt("Deseja fazer uma nova operação?/n 1 - SIM/n 2 - NÃO");
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até à próxima!");
        } else {
          alert("Digite uma das opções!");
          novaOperacao();
        }
      }
    }
}