package study.java.OOT;

class App{
    // 공급가액
    public double valueOfSupply;
    // 부가가치세율
    public static double vatRate = 0.1;

    public App(double valueOfSupply){
        this.valueOfSupply =valueOfSupply;
    }

    public double getVAT() {
        return this.valueOfSupply * vatRate;
    }

    public double getTotal() {
        return this.valueOfSupply + getVAT();
    }

}

public class AccountingApp {
    public static void main(String[] args) {
        App app1 = new App(10000.0);

        System.out.println("Value of supply : " + app1.valueOfSupply);
        System.out.println("VAT : " + app1.getVAT());
        System.out.println("Total : " + app1.getTotal());

    }

}