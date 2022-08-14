package study.java;

public class MyOOP {
    public static String delimiter;
    public static void main(String[] args) {
        delimiter = "----";
        printA();
        
        delimiter = "####";
        printB();
    }
    private static void printA() {
        System.out.println(delimiter);
        System.out.println("A");
        System.out.println("A");
    }
    private static void printB() {
        System.out.println(delimiter);
        System.out.println("B");
        System.out.println("B");
    }
}
