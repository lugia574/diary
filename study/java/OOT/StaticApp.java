package study.java.OOT;
class Foo {
    public static String ClassVar = "I ClassVar";
    public String InstanceVar = "I InstanceVar";

    public static void classMethode(){
        System.out.println(ClassVar); // OK
        // System.out.println(InstanceVar); // ERROR
    }
    public void InstancMethode(){
        System.out.println(ClassVar); // OK
        System.out.println(InstanceVar); // OK
    }
}
public class StaticApp {
    public static void main(String[] args) {
        System.out.println(Foo.ClassVar);
        // System.out.println(Foo.InstanceVar); //ERROR

        Foo.classMethode(); // OK
        // Foo.InstanceVar(); // ERROR

        Foo f1 =new Foo();
        Foo f2 =new Foo();

        //System.out.println(f1.ClassVar); // I ClassVar
        System.out.println(f1.InstanceVar); // I InstanceVar

        // f1.ClassVar = "changed by f1";
        // System.out.println(Foo.ClassVar); // changed by f1
        // System.out.println(f2.ClassVar); // changed by f1
        
        f1.InstanceVar = "changed by f1";
        System.out.println(f1.InstanceVar); // changed by f1
        System.out.println(f2.InstanceVar); // I I


    }
}
