package study.Java.code.algo;

import java.util.Arrays;


// 자연수 n 개로 이루어진 중복 집합
// 다음 두 조건을 만족하는 집합을 최고의 집합이라고 합니다.
// 1. 각 원소의 합이 S가 되는 수의 집합
// 2.위 조건을 만족하면서 각 원소의 곱 이 최대가 되는 집합

// 예를 들어서 자연수 2개로 이루어진 집합 중 합이 9가 되는 집합은 다음과 같이 4개가 있습니다.
// { 1, 8 }, { 2, 7 }, { 3, 6 }, { 4, 5 }
// 그중 각 원소의 곱이 최대인 { 4, 5 }가 최고의 집합입니다.
// 집합의 원소의 개수 n과 모든 원소들의 합 s가 매개변수로 주어질 때, 최고의 집합을 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 최고의 집합은 오름차순으로 정렬된 1차원 배열(list, vector) 로 return 해주세요.
// 만약 최고의 집합이 존재하지 않는 경우에 크기가 1인 1차원 배열(list, vector) 에 -1 을 채워서 return 해주세요.
// 자연수의 개수 n은 1 이상 10,000 이하의 자연수입니다.
// 모든 원소들의 합 s는 1 이상, 100,000,000 이하의 자연수입니다.

// 흠 아무리 생각해 봐도 어떻게 해야핳지 감이 잘 안 잡히는데?
// 5 대 5 로 시작해서 range 를 계속 조종하는 쪽으로 문제를 접근해야하나?
// 아 그래도 문제가 있어 n 이 문제야 n 이 단순히 두개면 상관없는데 그게 아니란 말이지 1~ 10000개 자너 흠흠

public class l3_최고의집합 {
    public static class Solution {
        public int[] solution(int n, int s) {
            if (n > s) {
                int[] ans = {-1};
                return ans;
            };

            int div = s/n;
            int remain = s%n;


            int[] answer = new int[n];

            for (int i = 0; i < n; i++){
                answer[i]= div;
            }

            for (int i = 0; i < remain; i++){
                answer[i] += 1;
            }
            
            Arrays.sort(answer);

            return answer;
        }
    }
    public static void main(String[] args) {
        Solution sol = new Solution();

        int n = 2;
        int s = 9;
        int[] result = {4, 5};

        int[] res = sol.solution(n,s);

        System.out.println(Arrays.equals(res, result) ? "True": "False");

        int n2 = 2;
        int s2 = 1;
        int[] result2 = {-1};

        int[] res2 = sol.solution(n2,s2);

        System.out.println(Arrays.equals(res2, result2) ? "True": "False");

        int n3 = 2;
        int s3 = 8;
        int[] result3 = {4, 4};

        int[] res3 = sol.solution(n3,s3);

        System.out.println(Arrays.equals(res3, result3) ? "True": "False");
    }
}
