package study.Java.code.algo2.DataStructure.Que;
import java.io.*;
import java.util.*;

public class algo_1021_회전하는큐 {
    private static int queFnc(int[] targetArr, Deque<Integer> queue){
        int cnt = 0;
        for(int x : targetArr){
            int len = queue.size();
            int x_index = Arrays.asList(queue.toArray()).indexOf(x);
            // System.out.println(x_index);
            boolean circuit = (x_index < len - x_index) ? true: false; 
            while (true){
                if (queue.peek() == x){
                    queue.poll();
                    break;
                }
                if (circuit){
                    int tmp = queue.poll();
                    queue.offer(tmp);
                }else{
                    int tmp = queue.pollLast();
                    queue.offerFirst(tmp);
                }
                cnt ++;
            }
        }
        return cnt;
    }
 public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());

    st = new StringTokenizer(br.readLine());
    int [] arr = new int[m];
    for(int i = 0; i < m; i++)arr[i] = Integer.parseInt(st.nextToken());

    Deque<Integer> queue = new ArrayDeque<>();
    for(int i = 1; i < n+1; i++)queue.add(i);

    int answer = queFnc(arr, queue);
    System.out.println(answer);
 }   
}
