package study.Java.code.algo2.combination;

import java.io.*;
import java.util.*;

public class algo_6603_로또 {
    static int[] combi;
    static int[] s;
    public static void dfs(int start, int depth) {
        if (depth == 6) {
            for (int i = 0; i < 6; i++) {
                System.out.print(combi[i] + " ");
            }
            System.out.println();
            return;
        }
        for (int i = start; i < s.length; i++) {
            combi[depth] = s[i];
            dfs(i + 1, depth + 1);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
        while (true) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
        
            if (n == 0) break;
        
        
            s = new int[n];
            combi = new int[6];
        
            for (int i = 0; i < n; i++) 
                s[i] = Integer.parseInt(st.nextToken());
        
        
            dfs(0, 0);
            System.out.println();
        }
    
        br.close();
    }
    
}
