package study.Java.code.algo;

import java.util.Arrays;

// 구명보트를 이용하여 구출하려고 합니다.
// 구명보트는 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
// 제한사항
// 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
// 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
// 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
// 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
// List<Integer> arr = Arrays.stream(people).boxed().collect(Collectors.toList());

public class l2_구명보트 {
    public static class Solution {
        public int solution(int[] people, int limit) {
            Arrays.sort(people);
            int answer = 0;
            int len = people.length;
            int st = 0;
            int end = len  - 1;

            while (st <= end) {
                int a = people[st];
                int b = people[end];
                if (a + b > limit){
                    answer ++;
                    end--;
                }else if (a + b <= limit){
                    answer ++;
                    end--;
                    st++;
                }else if (st == end){
                    answer ++;
                    break;
                }
            }

            return answer;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] people = {50, 50, 60, 70, 80, 160};
        int limit = 200;
        int answer = 4;
        int ans = sol.solution(people, limit);
        System.out.println(ans);
        System.out.println(answer == ans ? "True": "False");

        int[] people2 = {100, 50, 50};
        int limit2 = 100;
        int answer2 = 2;
        int ans2 = sol.solution(people2, limit2);

        System.out.println(answer2 == ans2 ? "True": "False");
    }
}
