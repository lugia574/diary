package study.java;

class Print{
    public String delimiter;
    public Print(String str) {
        this.delimiter= str;
    }
    public  void A() {
        System.out.println(this.delimiter);
        System.out.println("A");
        System.out.println("A");
    }
    public  void B() {
        System.out.println(this.delimiter);
        System.out.println("B");
        System.out.println("B");
        
    }

}