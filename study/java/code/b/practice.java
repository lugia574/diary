package study.Java.code.b;

class A{
    public String x(){return "A.x";}
    public String z(){return "A.z";}
}
class B extends A{
    public String x(){return "B.x";}
    public String y(){return "y";}
}
class B2 extends A{
    public String x(){return "B2.x";}
}

class B3 extends B2{

}



public class practice {
    public static void main(String[] args) {
        B obj = new B();
        B2 obj2 = new B2();
        B3 obj3 = new B3();
        System.out.println(obj.x());
        System.out.println(obj2.x() );
        System.out.println(obj3.z() );
    }
}


