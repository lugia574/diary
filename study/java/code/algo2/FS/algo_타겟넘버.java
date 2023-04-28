
// 이건 DFS 로 풀어야해 그래서 level 이 numbers.length 랑 딱 맞으면 그때 값 비교해서 target 값이랑 같으면 cnt 해주면 됨
package study.Java.code.algo2.FS;
import java.util.*;

public class algo_타겟넘버 {
   static int answer = 0;
   static int len;
 public static void main(String[] args) {
    int[] numbers = {1, 1, 1, 1, 1};
    int targer = 3;
    int res = 5;

    int ans = solution(numbers, targer);
    System.out.println(ans);
    System.out.println(res== ans);
 }  
 
 private static int solution(int[] numbers, int target) {
   len = numbers.length;

   DFS(0, numbers, target, 0);
   return answer;
}

   public static void DFS(int lev, int[] numbers, int target,int sumValue){
      if(lev == len) {if(sumValue == target) answer++;}
      else{
         DFS(lev+1, numbers, target, sumValue + numbers[lev]);
         DFS(lev+1, numbers, target, sumValue - numbers[lev]);
      }  
   }
}
