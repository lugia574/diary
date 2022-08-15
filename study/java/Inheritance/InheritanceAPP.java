package study.java.Inheritance;

class Cal {
    int v1,v2;
    Cal (int v1, int v2){
        System.out.println("Cal init");
        this.v1 = v1;
        this.v2 = v2;
    }

    public int sum() {
        return this.v1+v2;
    }
}

class CalInheritance extends Cal{
    

    CalInheritance(int v1, int v2) {
        super(v1, v2);
        System.out.println("Cal2 init");

    }


    public int minus (){return this.v1-v2;}
}

public class InheritanceAPP {
    public static void main(String[] args) {
        Cal cal1 = new Cal(2,3);
        CalInheritance cal2 = new CalInheritance(3,5);

        System.out.println(cal1.sum());
        System.out.println(cal2.sum());
        System.out.println(cal2.minus());
    }
}
