// https://www.youtube.com/watch?v=Nl4OAzBgN00

package study.Java.code.algo2.sort;
import java.util.*;
public class algo_가장큰수 {
    public static void main(String[] args) {
        int[] numbers = {6, 10, 2};
        String res = "6210";

        String ans = solution(numbers);
       System.out.println(ans);
    }

    private static String solution(int[] numbers) {
        String answer = "";
        String []res =new String[numbers.length];

        for(int i=0; i<numbers.length; i++){
            res[i]=String.valueOf(numbers[i]);
        }

        //문자열을 합쳤을 때  비교
        Arrays.sort(res, (a,b)->{
            return (a+b).compareTo(b+a);
        }
        );

       //정렬한 값 더하기
       
        for(int i=numbers.length-1; i>=0; i--){
            answer+=res[i];
        }
        
        //ex) 000인 경우 0으로 리턴
        if(answer.charAt(0)=='0') return "0";
        
        return answer;
    }
}
