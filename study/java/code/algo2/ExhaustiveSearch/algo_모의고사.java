package study.Java.code.algo2.ExhaustiveSearch;
import java.util.*;

public class algo_모의고사 {
    public static void main(String[] args) {
        int[] answers = {1,2,3,4,5};
        int[] res = {1};

        int[] ans = solution(answers);
        System.out.println(Arrays.equals(res, ans));

        int[] answers2 = {1,3,2,4,2};
        int[] res2 = {1,2,3};

        int[] ans2 = solution(answers2);
        System.out.println(Arrays.equals(res2, ans2));
    }
    private static int[] solution(int[] answers) {
        ArrayList<Integer> ans = new ArrayList<>();
        int[] p1 = {1, 2, 3, 4, 5};
        int[] p2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] p3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5,};
        int[] r = new int[3];
        
        

        for (int i = 0; i< answers.length; i++){
            int answer = answers[i];
            if (p1[i % 5] == answer) r[0] += 1;
            if (p2[i % 8] == answer) r[1] += 1;
            if (p3[i % 10] == answer) r[2] += 1;
        }
        int maxVal = 0;
        for(int i=0; i<3; i++) maxVal = Math.max(maxVal, r[i]);
        for(int i=0; i<3; i++) if(r[i] ==maxVal) ans.add(i+1);

        return ans.stream().mapToInt(Integer::intValue).toArray();
    }
}
