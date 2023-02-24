package study.Java.code.algo;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;



// 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
// 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매
// 이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.
// 가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 하도록 하며, 
// 만약 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return 합니다.

// gems 배열의 크기는 1 이상 100,000 이하입니다.
// gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.
// gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.
// gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다

class GemsSolution {
    public int[] solution(String[] gems) {
        HashSet<String> gemSet = new HashSet<>(Arrays.asList(gems));
        int setSize = gemSet.size();
        int gemsLength = gems.length;
        if (setSize == 1 || setSize == gemsLength) {int[] answer = {1,setSize}; return answer;}

        HashMap<String, Integer> map = new HashMap<>();
        int left = 0, right = 0;
        int start = 0, end = 0;
        int minDistance = Integer.MAX_VALUE;

        while (true) {
            // System.out.println(map);
            // set cnt 값과 map cnt 값이 같을때
            // 그럼 이제 최저치를 찾아 left  값을 올려야지
            if (setSize == map.size()){
                map.put(gems[left], map.get(gems[left])-1);

                // 다 까버려서 없는건 제거
                if (map.get(gems[left]) == 0) {
                    map.remove(gems[left]);
                }
                left++;
            }else if (right == gemsLength){
                // while 문 벗어나기
                break;

            }else {
                // end 포인터를 한칸씩 전진
                map.put(gems[right], map.getOrDefault(gems[right], 0) + 1);
                right ++;
            }

            
            // 거리 갱신
            if(setSize == map.size()  && right - left < minDistance){
                start = left + 1;
                end = right;
                minDistance = right - left;
            }
        }
        


        int[] answer = {start, end};
        return answer;
    }
}
public class l3_보석쇼핑 {
    public static void main(String[] args) {
        
        GemsSolution sol = new GemsSolution();
        String[] gems = {"DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"};
        int[] result = {3, 7};
    
        int[] res = sol.solution(gems);
        System.out.println(res[0]+" " + res[1]);
        System.out.println(Arrays.equals(result,res) ? "정답입니다." : "틀렸습니다 모지리 새끼야");

        String[] gems2 = {"AA", "AB", "AC", "AA", "AC"};
        int[] result2 = {1, 3};
    
        int[] res2 = sol.solution(gems2);
        System.out.println(res2[0]+" " + res2[1]);
        System.out.println(Arrays.equals(result2,res2) ? "정답입니다." : "틀렸습니다 모지리 새끼야");

        String[] gems3 = {"XYZ", "XYZ", "XYZ"};
        int[] result3 = {1, 1};
    
        int[] res3 = sol.solution(gems3);
        System.out.println(res3[0]+" " + res3[1]);
        System.out.println(Arrays.equals(result3,res3) ? "정답입니다." : "틀렸습니다 모지리 새끼야");
        
        
        String[] gems4 = {"ZZZ", "YYY", "NNNN", "YYY", "BBB"};
        int[] result4 = {1, 5};
    
        int[] res4 = sol.solution(gems4);
        System.out.println(res4[0]+" " + res4[1]);
        System.out.println(Arrays.equals(result4,res4) ? "정답입니다." : "틀렸습니다 모지리 새끼야");
        
    }
    
}
