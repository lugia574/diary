// https://velog.io/@rari_1110/DFS-프로그래머스-여행경로-JAVA
// 캬 이 주소껄 보니까 이해가 확가네
// 진심 Ai 는 아직 멀었다! 

package study.Java.code.algo2.FS;
import java.util.*;

public class algo_여행가기 {
    static boolean[] visited;
    static ArrayList<String> allRoute; 
    static int len;

    public static String[] solution(String[][] tickets) {
            String[] answer = {};
            int cnt = 0;
            len = tickets.length;
            visited = new boolean[len];
            allRoute = new ArrayList<>();
            
            dfs("ICN", "ICN", tickets, cnt);
            
            Collections.sort(allRoute);
            answer = allRoute.get(0).split(" ");
            
            return answer;

    }

    public static void dfs(String start, String route, String[][] tickets, int cnt) {
        if(cnt == len){
            allRoute.add(route);
            return;
        }
        
        for(int i=0; i< len; i++){
            if(start.equals(tickets[i][0]) && !visited[i]){
                visited[i] = true;
                dfs(tickets[i][1], route+" "+tickets[i][1], tickets, cnt+1);
                visited[i] = false;
            }
        }
    }

    public static void main(String[] args) {
        String[][] tickets = {{"ICN", "JFK"}, {"HND", "IAD"}, {"JFK", "HND"}};
        String[] res = {"ICN", "JFK", "HND", "IAD"};
        String[] ans = solution(tickets);
        System.out.println(Arrays.equals(res, ans));
        
        String[][] tickets2 = {{"ICN", "SFO"}, {"ICN", "ATL"}, {"SFO", "ATL"}, {"ATL", "ICN"}, {"ATL","SFO"}};
        String[] res2 = {"ICN", "ATL", "ICN", "SFO", "ATL", "SFO"};
        String[] ans2 = solution(tickets2);
        System.out.println(Arrays.equals(res2, ans2));
    }
}

