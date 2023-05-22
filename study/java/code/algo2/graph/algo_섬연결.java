package study.Java.code.algo2.graph;

import java.util.*;

public class algo_섬연결 {
    private static int solution(int n, int[][] costs) {
        int answer = 0;
        Arrays.sort(costs, Comparator.comparingInt(a -> a[2]));
        Set link = new HashSet<Integer[]>();
        link.add(costs[0][0]);
        while(link.size() != n){
            for(int[] v : costs){
                if (link.contains(v[0]) && link.contains(v[1])) continue;
                if (link.contains(v[0]) || link.contains(v[1])){
                    link.add(v[0]);
                    link.add(v[1]);
                    answer += v[2];
                    break;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int n = 4;
        int[][] costs = {{0,1,1},{0,2,2},{1,2,5},{1,3,1},{2,3,8}};
        int res = 4;
        int ans = solution(n, costs);
        System.out.println(res == ans);
    }
}
