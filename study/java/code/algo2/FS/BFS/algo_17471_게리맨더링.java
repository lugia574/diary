package study.Java.code.algo2.FS.BFS;

import java.util.*;
import java.io.*;

public class algo_17471_게리맨더링 {
    static int N;
    static int peoples[]; // 구역별 인구수
    static List<ArrayList<Integer>> graph;
    static boolean selected[];
    static boolean visited[];
    static int res;

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine()); // 지역 갯수
        res = 1001; // 두 구역간의 인구수 차이
        peoples = new int[N]; // 지역별 인구 수
        selected = new boolean[N]; // 부분 집합 만들때 사용

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++)peoples[i] = Integer.parseInt(st.nextToken());

        graph = new ArrayList<>();
        for(int i = 0; i < N; i++)graph.add(new ArrayList<Integer>());

        for(int i = 0; i < N; i++){
            st = new StringTokenizer(br.readLine());
            int cnt = Integer.parseInt(st.nextToken()); // 연결 갯수
            for(int j = 0; j < cnt; j++){
                int num = Integer.parseInt(st.nextToken());
                graph.get(i).add(num - 1);
            }
        }

        divide(0);
        if (res == 1001)
			res = -1;
		System.out.println(res);
    }
    // 재귀를 쓸꺼임
    private static void divide(int idx) { // 선거구 나누기
        if (idx == N){
            List<Integer> aList = new ArrayList<>();
			List<Integer> bList = new ArrayList<>();
            for(int i = 0; i < N; i++){
                if(selected[i])
                    aList.add(i);
                else
                    bList.add(i);
            }
            if (aList.size() == 0 || bList.size() == 0) return;
            if (check(aList) && check(bList)){ // 두 구역 올바른지 판별
                getPeopleDiff(); // 인구차 구하기
            }

            return ;

        }
        selected[idx] = true;
        divide(idx + 1);
        selected[idx] = false;
        divide(idx + 1);
    }
    private static boolean check(List<Integer> checkList) {
        Deque<Integer> q = new ArrayDeque<>();
        visited = new boolean[N];
        visited[checkList.get(0)] = true;
        q.offerFirst(checkList.get(0));
        int count = 0;
        while(!q.isEmpty()){
            int cur = q.pollFirst();
            for(int i = 0; i < graph.get(cur).size(); i++){
                int y = graph.get(cur).get(i);
                if(checkList.contains(y) && !visited[y]){
                    q.offerFirst(y);
                    visited[y] = true;
                    count ++;
                }
            }
        }
        boolean ok = count==checkList.size();
        return ok;
    }

    private static void getPeopleDiff() {
        // a구역 사람수
		int pA = 0, pB = 0;
		for (int i = 0; i < N; i++) {
			if (selected[i])
				pA += peoples[i];
			else
				pB += peoples[i];
		}
		int diff = Math.abs(pA - pB);
		res = Math.min(res, diff);
    }

}
// 난 거의 그대로 똑같이 한거 같은데 틀렸다고 하드라?
// deque 를 써서 그런가?

// 6
// 5 2 3 4 1 2
// 2 2 4
// 4 1 3 6 5
// 2 4 2
// 2 1 3
// 1 2
// 1 2

// 1 
// 나와야하는데 -1 나옴 ㅋㅋㅋ