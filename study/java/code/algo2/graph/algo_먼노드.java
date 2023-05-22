package study.Java.code.algo2.graph;

import java.util.*;

public class algo_먼노드 {
    
    static class Pair<K, V> {
        private K key;
        private V value;
        
        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }
        
        public K getKey() {
            return key;
        }
        
        public V getValue() {
            return value;
        }
    }

    private static int solution(int n, int[][] edge) {
        int answer = 0;
        List<List<Integer>> graph = new ArrayList<>();
        int[] distance = new int[n+1];
        Queue<Pair<List<Integer>, Integer>> queue = new LinkedList<>();
        
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] e : edge) {
            int x = e[0];
            int y = e[1];
            graph.get(x).add(y);
            graph.get(y).add(x);
        }


        distance[1] = -1;
        while (!queue.isEmpty()) {
            Pair<List<Integer>, Integer> pair = queue.poll();
            List<Integer> list = pair.getKey();
            int x = pair.getValue();
            for (int i : list) {
                if (distance[i] == 0) {
                    distance[i] = x + 1;
                    queue.offer(new Pair<>(graph.get(i), x + 1));
                }
            }
        }
        
        int maxVal = Arrays.stream(distance).max().getAsInt();
        for (int i = 1; i <= n; i++) {
            if (distance[i] == maxVal) {
                answer++;
            }
        }
        return answer;
    }
    public static void main(String[] args) {
        int n = 6;
        int[][] edge = 	{{3, 6}, {4, 3}, {3, 2}, {1, 3}, {1, 2}, {2, 4}, {5, 2}};
        int res = 3;
        int ans = solution(n, edge);
        System.out.println(res == ans);
    }
}
