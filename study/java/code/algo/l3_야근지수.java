

import java.util.Arrays;
import java.util.Collections;
import java.util.PriorityQueue;

// 야근을 하면 야근 피로도가 쌓입니다. 
// 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값
// N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 
// 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 
// 리턴하는 함수 solution을 완성해주세요.
// 제한 사항
// works는 길이 1 이상, 20,000 이하인 배열입니다.
// works의 원소는 50000 이하인 자연수입니다.
// n은 1,000,000 이하인 자연수입니다.
public class l3_야근지수 {
     static class Solution {
        public long solution(int n, int[] works) {
            long answer = 0;
            int length = works.length;
            if(Arrays.stream(works).sum() < n) return answer;
            
            PriorityQueue<Integer> overworks = new PriorityQueue<>(Collections.reverseOrder());

            for (int work : works) {
                overworks.add(work);
            }
    
            while (n > 0){
                int overTime = overworks.poll() - 1;
                overworks.add(overTime);
                n --;
            }

            for (int i = 0; i <length; i++) {
                int overTime = overworks.poll();
                answer += overTime * overTime;
            }


            return answer;
        }
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int n = 4;
        int[]works = {4, 3, 3};
        long result = 12;

        long res = sol.solution(n, works);
        System.out.println(result == res ? "True": "False");

        int n2 = 1;
        int[]works2 = {2, 1, 2};
        long result2 = 6;

        long res2 = sol.solution(n2, works2);
        System.out.println(result2 == res2 ? "True": "False");
    
    
        int n3 = 999;
        int[]works3 = {800, 100, 55, 45};
        long result3 = 1;

        long res3 = sol.solution(n3, works3);
        System.out.println(result3 == res3 ? "True": "False");
    }
}
