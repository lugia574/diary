package study.Java.code.algo2.FS.DFS;

import java.io.*;
import java.util.*;

public class algi_1967_트리의지름 {
    static int[] distance;
    static int n;
    static ArrayList<int[]>[] graph;
    
    private static void dfs(int node, int weight){
        
    }
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        
        n = Integer.parseInt(br.readLine());
        graph = new ArrayList[n+1];

        for(int i = 1; i <= n; i++) graph[i] = new ArrayList<int[]>();

        for (int i = 1; i <= n; i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            graph[a].add(new int[] {b, cost});
            graph[b].add(new int[] {a, cost});
        }

        distance = new int[n+1];
        for(int i = 0; i < n+1; i++)distance[i] = -1;
        distance[1] = 0;
        dfs(1, 0);

        int start= 2; // 여기서 최고값 indx 를 찾을꺼고
        distance = new int[n+1];
        for(int i = 0; i < n+1; i++)distance[i] = -1;
        distance[start] = 0;
        dfs(start, 0);

        int MaxWeight = 0; // 여기서 distance 배열의 최고값만 찾아주면 됨
    }
}
