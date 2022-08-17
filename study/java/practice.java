package study.java;

class A{
    public String x(){return "A.x";}
}
class B extends A{
    public String x(){return "B.x";}
    public String y(){return "y";}
}
class B2 extends A{
    public String x(){return "B2.x";}
}
public class practice {
    public static void main(String[] args) {
        B obj = new B();
        B2 obj2 = new B2();
        System.out.println(obj.x());
        System.out.println(obj2.x() );
    }
}
