

import java.util.Arrays;

    // 카펫을 사러 갔다가 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
    // 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
    // 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
    // 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
    // 제한사항
    // 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
    // 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
    // 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

    // 봐봐 그럼 결국 브라운 + 엘로우 합은 전체 사각형 값이고 이걸 나눈값이 x,y 값이겠네

public class l2_카펫 {
    public static class Solution {
    
        public int[] solution(int brown, int yellow) {
            int s = yellow + brown; // w * h
            int[] answer = new int[2];

            for (int i = 3; i < s; i++) {
                int j = s/i;

                if (s % i == 0 && j >= 3){
                    int col = Math.max(i, j);
                    int row = Math.min(i, j);
                    int center = (col - 2) * (row - 2);

                    if (center == yellow) {
                        answer[0] = col;
                        answer[1] = row;
                        return answer;
                    }
                }
            }
            return answer;
        }
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int brown = 10;
        int yellow = 2;
        int[] result = {4, 3};

        int[] res = sol.solution(brown, yellow);
        System.out.println(Arrays.equals(res, result) ? "True" : "False");

        int brown2 = 8;
        int yellow2 = 1;
        int[] result2 = {3, 3};

        int[] res2 = sol.solution(brown2, yellow2);
        System.out.println(Arrays.equals(res2, result2) ? "True" : "False");

        int brown3 = 24;
        int yellow3 = 24;
        int[] result3 = {8, 6};

        int[] res3 = sol.solution(brown3, yellow3);
        System.out.println(Arrays.equals(res3, result3) ? "True" : "False");
    }
}
