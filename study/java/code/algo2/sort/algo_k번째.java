package study.Java.code.algo2.sort;
import java.util.*;
public class algo_k번째 {
    public static void main(String[] args) {
        int[] array = {1, 5, 2, 6, 3, 7, 4};
        int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
        int [] res = {5,6,3};

        int[] ans = solution(array, commands);
        // for(int i = 0; i < ans.length; i++) System.out.print(ans[i] + " ");
        System.out.println(Arrays.equals(res, ans));
    }

    private static int[] solution(int[] array, int[][] commands) {
        int commandsLen = commands.length;
        int[] answer = new int [commandsLen];
        int n = 0;
        for(int i = 0; i < commandsLen; i++){
            int k = 0;
            int[] list = new int[commands[i][1] - commands[i][0] + 1]; 
 
            for (int j = commands[i][0]; j <= commands[i][1]; j++) { 
            list[k++] = array[j - 1];
            }
            Arrays.sort(list);\
            answer[n++] = list[commands[i][2] - 1];
        }

        return answer;
    }
}
