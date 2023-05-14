// https://minhamina.tistory.com/241

package study.Java.code.algo2.DataStructure.stack;

import java.util.*;

public class algo_다리트럭 {
    public static void main(String[] args) {
        int bridge_length = 2;
        int weight = 10;
        int[] truck_weights = {7,4,5,6};
        int res = 8;

        int ans = solution(bridge_length, weight, truck_weights);
        System.out.println(ans+ " 아닌데 뭐냐 시이발?");
    }

    private static int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        Queue<Integer> q = new LinkedList<>();
        int len = truck_weights.length;
        int tsum = 0;
        for(int i = 0; i < len; i++){
            int truck = truck_weights[i];

            while(true){
                if (q.isEmpty()){
                    q.offer(truck);
                    tsum += truck;
                    answer ++;
                    break;
                }else if (q.size() == bridge_length) tsum -= q.poll();
                else{
                    if(tsum + truck <= weight){
                        q.offer(truck);
                        tsum += truck;
                        answer ++;
                        break;
                    }else{
                        q.offer(0);
                        answer ++;
                    }
                }
            }
        }

        return answer + bridge_length;
    }
}
