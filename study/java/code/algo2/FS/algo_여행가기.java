package study.Java.code.algo2.FS;
import java.util.*;

public class algo_여행가기 {
    static Map<String, PriorityQueue<String>> graph = new HashMap<>();
    static List<String> itinerary = new ArrayList<>();

    public static String[] solution(String[][] tickets) {
        // 그래프 생성
        for (String[] ticket : tickets) {
            String from = ticket[0];
            String to = ticket[1];
            if (!graph.containsKey(from)) {
                graph.put(from, new PriorityQueue<>());
            }
            graph.get(from).add(to);
        }

        // DFS로 경로 구하기
        dfs("ICN");

        // 경로 알파벳순으로 정렬
        Collections.reverse(itinerary);

        // 배열로 반환
        return itinerary.toArray(new String[itinerary.size()]);
    }

    private static void dfs(String airport) {
        PriorityQueue<String> dests = graph.getOrDefault(airport, new PriorityQueue<>());
        while (!dests.isEmpty()) {
            dfs(dests.poll());
        }
        itinerary.add(airport);
    }


    public static void main(String[] args) {
        String[][] tickets = {{"ICN", "JFK"}, {"HND", "IAD"}, {"JFK", "HND"}};
        String[] res = {"ICN", "JFK", "HND", "IAD"};

        String[] ans = solution(tickets);

        System.out.println(Arrays.equals(res, ans));
    }
}

