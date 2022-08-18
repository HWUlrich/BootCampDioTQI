public class Calculadora {

    public static void soma(double n1, double n2) {
        double result = n1 + n2;
        System.out.println("Resultado da soma de " + n1 + " + " + n2 + " é igual a " + result);
    }

    public static void subtracao(double n1, double n2) {
        double result = n1 - n2;
        System.out.println("Resultado da subtração de " + n1 + " - " + n2 + " é igual a " + result);
    }

    public static void produto(double n1, double n2) {
        double result = n1 * n2;
        System.out.println("Resultado do produto de " + n1 + " X " + n2 + " é igual a " + result);
    }

    public static void quociente(double n1, double n2) {
        double result = n1 / n2;
        System.out.println("Resultado do quociente entre " + n1 + " / " + n2 + " é igual a " + result);
    }

    public static void resto(double n1, double n2) {
        double result = n1 % n2;
        System.out.print("Resultado do resto de " + n1 + " com " + n2 + " é igual a " + result);
    }

    public static void potencia(double n1, double n2) {
        double result = n1 **n2;
        System.out.println("Resultado de " + n1 + " elevado a " + n2 + " é igual a " + result);
    }
}
