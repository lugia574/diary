package study.java;

public class MyOOP {
    public static void main(String[] args) {
        Print p1 = new Print("----");
        Print p2 = new Print("####");


        p1.A();
        p1.A();
        p1.B();
        p1.B();
        
        System.out.println("----구분선----");
        p2.A();
        p2.A();
        p2.B();
        p2.B();
        
    }

}
