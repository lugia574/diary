package study.Java.code.algo2.hash;
import java.util.*;

public class algo_완주하지못한선수 {
    public static void main(String[] args) {
      String[] participant = {"mislav", "stanko", "mislav", "ana"};
      String[] completion = {"stanko", "ana", "mislav"};
      String res = "mislav";
      
      String ans = solution(participant, completion);
      System.out.println(res == ans? true : false);
    } 

    private static String solution(String[] participant, String[] completion) {
        String answer = "";
        Map<String, Integer> map = new HashMap<>();
        int len = participant.length;

        for(int i = 0; i < len; i++){
            map.put(participant[i], map.getOrDefault(participant[i], 0) + 1);
        }

        for (int j = 0; j < len-1; j++){
            if(map.get(completion[j]) == 1)
                map.remove(completion[j]);
            else map.put(completion[j], map.get(completion[j])-1);             
        }

        for(String k : map.keySet())
        answer = k;
        return answer;
    }
}
