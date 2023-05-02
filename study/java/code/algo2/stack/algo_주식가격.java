// 뭔소리야 이게??
// https://velog.io/@geesuee/프로그래머스-주식가격자바
// 미친 프로그래머스는 그냥 글을 못쓰는듯??
// 왜 항상 이해하기 힘들게 글을 쓰냐 시발 
package study.Java.code.algo2.stack;
import java.util.*;
public class algo_주식가격 {
    
    
    private static int[] solution(int[] prices) {
        int len = prices.length;
        int[] answer = new int[len];

        for(int i = 0; i < len-1; i++){
            int cnt = 1;
            for(int j = i+1; j < len; j++){
                if(prices[i] <= prices[j]) cnt++;
                else break;
            }
            answer[i] = cnt;
            System.out.println(answer[i]);
        }

        return answer;
    }

    // 이 방식이 훨씬 깔끔함
    // 내가 한 방식은 우선 구현을 하고 돌려보니 틀리니까 수정을 한거고
    // 이건 처음부터 구상할때 해당 문제점을 인지하고 깔끔하게 구현을 한거
    public static int[] solution2(int[] prices) {
        int len = prices.length;
        int[] answer = new int[len];
        int i, j;
        for (i = 0; i < len; i++) {
            for (j = i + 1; j < len; j++) {
                answer[i]++;
                if (prices[i] > prices[j])
                    break;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int[] prices = {1, 2, 3, 2, 3};
        int[] res = {4, 3, 1, 1, 0};
        int[] ans = solution(prices);
        System.out.println(Arrays.equals(res, ans));
    }   
}
