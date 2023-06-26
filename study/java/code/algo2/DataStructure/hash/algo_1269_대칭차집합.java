package study.Java.code.algo2.DataStructure.hash;

import java.io.*;
import java.util.*;


public class algo_1269_대칭차집합 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        Set<Integer> setA = new HashSet<>();
        Set<Integer> setB = new HashSet<>();

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            setA.add(Integer.parseInt(st.nextToken()));
        }
        
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < m; i++) {
            setB.add(Integer.parseInt(st.nextToken()));
        }

        int cnt = 0;
        for(int num: setA){
            if(!setB.contains(num)){
                cnt += 1;
            }
        }

        for(int num: setB){
            if(!setA.contains(num)){
                cnt+= 1;
            }
        }

        System.out.println(cnt);
    }
}
