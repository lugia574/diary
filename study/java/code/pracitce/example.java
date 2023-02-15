package study.Java.code.pracitce;


public class example {
    int sum(int a, int b) {  // a, b 는 매개변수
        return a+b;
    }

    public static void main(String[] args) {
        example example = new example();
        int c = example.sum(3, 4);  // 3, 4는 인수

        System.out.println("example.sum의 값 : "+ c);  // 7 출력
    }
}