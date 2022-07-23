
public class Main {

	public static void main(String[] args) {
		Cliente hans = new Cliente();
		hans.setNome("Hans Ulrich");
		
		Conta cc = new ContaCorrente(hans);
		Conta poupanca = new ContaPoupanca(hans);

		cc.depositar(2500);
		cc.transferir(2500, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
