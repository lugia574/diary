package study.Java.code.algo2;
import java.util.*;
public class algo_scovil {
    public static void main(String[] args) {
        
    }

    public int solution(int[] scoville, int K) {
        int answer = 0;
        // 아니 이걸 어떻게 자동완성 없이 써 이런 시이발 
        PriorityQueue<Integer> heap = new PriorityQueue();

        for (int aScoville : scoville) {
            heap.offer(aScoville);
        }
    
        while (heap.peek() < K) {
            if (heap.size() == 1) {
                return -1;
            }
            int a = heap.poll();
            int b = heap.poll();


            int result = a + (b * 2);

            heap.offer(result);
            answer ++;
        }

        return answer;
    }
}
