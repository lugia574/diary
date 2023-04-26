package study.Java.code.algo2.Heap;
import java.util.*;

public class algo_디스크컨트롤러 {
    public static void main(String[] args) {
        int[][] jobs = {{0, 3}, {1, 9}, {2, 6}};
        int res = 9;
        int ans = solution(jobs);
        System.out.println(ans);
        System.out.println(res == ans);

    }   

    private static int solution(int[][] jobs) {
        int answer = 0;
        int len = jobs.length;
        int cnt = 0;
        int idx = 0;
        int end = 0;

        Arrays.sort(jobs, (o1, o2) -> o1[0] - o2[0]);
        PriorityQueue<int[]> pq = new PriorityQueue<>((o1, o2) -> o1[1] - o2[1]);

        while(cnt < len){
            while(idx < len && jobs[idx][0] <= end) pq.add(jobs[idx++]);

            if(pq.isEmpty())end = jobs[idx][0];
            else{
                int[] tmp = pq.poll();
                answer += tmp[1] + end - tmp[0];
                end += tmp[1];
                cnt++;
            }
        }
        return answer/ len;
    }
}
