package study.Java.code.algo;

import java.util.Arrays;

// 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.
// 고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 
// 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 
// 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.4

// 제한사항

// 차량의 대수는 1대 이상 10,000대 이하입니다.
// routes에는 차량의 이동 경로가 포함되어 있으며 
// routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
// 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
// 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.


public class l3_단속카메라 {
    public static class Solution {
        public int solution(int[][] routes) {
            int answer = 0;
            int length = routes.length;
            int[] check = new int[length];

            for (int i = 0; i < length; i++) {
                if (check[i] != 0) continue;

                int start = routes[i][0];
                int end =  routes[i][1];
                int pointer = 0;
                int maxCnt = 0;

                for (int j = start; j < end; j++) {
                    int cnt = 0;
                    for (int car = 0; car < length; car++) {
                        if(routes[car][0] <= j && j <= routes[car][1]) cnt++;
                    }
                    if (maxCnt < cnt) {
                        maxCnt = cnt;
                        pointer = j;
                    }

                }

                for (int car = 0; car < length; car++) {
                    if(routes[car][0] <= pointer && pointer <= routes[car][1] && check[car] == 0) check[car] = 1;
                }

                if (Arrays.stream(check).sum() == length) break;

                answer ++;
                
            }
            return answer;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] routes = {{-20,-15}, {-14,-5}, {-18,-13}, {-5,-3}};
        int result = 2;

        int res = sol.solution(routes);
        System.out.println(result == res ? "True":"False");
    }
}