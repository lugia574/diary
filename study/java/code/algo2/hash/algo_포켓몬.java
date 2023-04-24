package study.Java.code.algo2.hash;

import java.util.*;

public class algo_포켓몬 {
    public static void main(String[] args) {
        int[] nums = {3,3,3,2,2,4};
        int ans = solution(nums);
        System.out.println(ans);
    }

    private static int solution(int[] nums) {
        int answer = 0;
        Map<Integer, Integer> map = new HashMap<>();
        int len = nums.length;
        for (int i = 0; i < len; i++){
            map.put(nums[i], map.getOrDefault(map.get(nums[i]), 0) + 1);
        }
        if (map.size() > (len/2)) answer = len/2;
        else answer = map.size();
        
        return answer;
    }
}
