package study.java;

abstract class  test {
    int left;
    int right;

    public void setOprands(int left, int right){
        this.left = left;
        this.right = right;
    } 

    public abstract void sum();  
    public abstract void avg();
    public void run(){
        sum();
        avg();
    }

}

public class practice {
    public static void main(String[] args) {
        
    }
}


// class A{
//     final void b(){}
// }
// class B extends A{
//     void b(){}  
// }


// final class C{
//     final void b(){}
// }
// class D extends C{}