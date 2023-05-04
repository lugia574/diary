// https://jellyinghead.tistory.com/14
// 병신같은 vs가 그냥 멍청하게 오류를 처 뱉고 있음
package study.Java.code.algo2.FS.DFS;

import java.util.*;
import java.io.*;

public class algo_1707_이분그래프 {
	static int v, e;
	static ArrayList<Integer>[] graph;
	static int visit[];
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int T = Integer.parseInt(st.nextToken());

        for(int tr = 0; tr < T; tr++){
            st = new StringTokenizer(br.readLine());
            v = Integer.parseInt(st.nextToken());
            e = Integer.parseInt(st.nextToken());
            visit = new int[v+1];
            graph = new ArrayList[v+1];

            for(int i = 0; i <= v; i++) graph[i] = new ArrayList<>();

            for(int i = 0; i < e; i++){
                st = new StringTokenizer(br.readLine());
                int x = Integer.parseInt(st.nextToken());
                int y = Integer.parseInt(st.nextToken());

                // graph[x].add(y);
                graph[y].add(x);
            }
        }
    }
}
