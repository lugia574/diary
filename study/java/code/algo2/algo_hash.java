package study.Java.code.algo2;

import java.util.*;

public class algo_hash {
    public static void main(String[] args) {
        String[][] clothes = {{"qqqq", "wwww"}, {"www", "wwwww"}};
        int ans = sol(clothes);
    }

    static int sol(String[][] clothes){
        int answer = 1;
        Map<String, Integer> map = new HashMap<>();
        int len = clothes.length;
        for (int i = 0; i < len; i ++){
            map.put(clothes[i][1], map.getOrDefault(clothes[1][0], 0)+ 1);
        }

        for(String str : map.keySet()){
            answer *= map.get(str) + 1;
        }
        answer -= 1;

        return answer;
    }
}
