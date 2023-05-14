package study.Java.code.algo2.DataStructure.stack;
import java.util.*;
public class algo_같은숫자싫 {
    public static void main(String[] args) {
        int[] arr = {1,1,3,3,0,1,1};
        int[] res = {1,3,0,1};
        //int[] ans = solution(arr);
        // 뭐냐 맞는데 왜 틀렸다고 하냐
        //System.out.println(res.equals(ans)? "정답입니다" : "틀렸습니다 모지리 새끼야");
    }   

    private static int[] solution(int []arr) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        int len = arr.length;
        int value = -1;
        for(int i=0; i<len; i++) {
            if(arr[i] != value) {
                answer.add(arr[i]);
                value = arr[i];
            }
        }
        int[] ans = new int[answer.size()];
        for(int j = 0; j < answer.size(); j++) {ans[j] = answer.get(j);}
        return ans;
    }
}
