package study.Java.code.algo2.DataStructure.Que;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.StringTokenizer;

public class algo_13335_트럭 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        int l = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        Queue<Integer> arr = new ArrayDeque<>();
        for(int i = 0; i < n; i++)
            arr.add(Integer.parseInt(st.nextToken()));
        
        Queue<Integer> bridge = new ArrayDeque<>();
        for(int i = 0; i < w; i++)
            bridge.add(0);

        int res = 0;

        while(!bridge.isEmpty()){
            res++;
            bridge.poll();
            if (arr.isEmpty()) continue;
            int bridgeSum = 0;
            for(int num: bridge) bridgeSum += num;

            if(bridgeSum + arr.peek() <= l){
                bridge.add(arr.poll());
            }else{
                bridge.add(0);
            }
        }

        System.out.println(res);
    }
}
