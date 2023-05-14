package study.Java.code.algo2.DataStructure.stack;
import java.util.*;
public class algo_기능개발 {
    public static void main(String[] args) {
        int[] progresses = {1, 1, 1, 1};
        int[] speeds = {100, 50, 99, 100};
        int[] res = {1, 2, 1};

        int[] ans = solution(progresses, speeds);
        for (int i = 0; i < ans.length; i++) {
            //System.out.println(ans[i]);
        }
    }

    private static int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> queue = new LinkedList<>();
        for(int i=0; i<progresses.length; i++){
            queue.add((int) (Math.ceil((100.0 - progresses[i]) / speeds[i])));
        }
        
        List<Integer> answer = new ArrayList<>();
        while (!queue.isEmpty()){
            int day = queue.poll();
            int cnt = 1;
            
            while(!queue.isEmpty() && day >= queue.peek()){
                cnt++;
                queue.poll();
            }
            answer.add(cnt);
        }
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}
