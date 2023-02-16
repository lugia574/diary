package study.Java.code.pracitce;




class A{
    public int id;
    A(int id){
        this.id = id;
    }
}
public class ReferenceDemo1 {
 
    public static void runValue(){
        int a = 1;
       // int b = a;
        // b = 2;
        System.out.println("😎 runValue, "+a); 
    }
     
    public static void runReference(){
        A a = new A(1);
        A b = a;
        b.id = 2;
        System.out.println("😎 runReference, "+a.id);      
    }
 
    public static void main(String[] args) {
        runValue();
        runReference();
    }

    @Override
    public String toString() {
        return "ReferenceDemo1 []";
    }
 
}