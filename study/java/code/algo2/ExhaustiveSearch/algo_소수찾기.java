// https://www.youtube.com/watch?v=pF368QqdQb4
// 결국 핵심은 뭐냐
// 1. 주어진 String 값을 하나씩 쪼개
// 2. 쪼갠 배열로 조합을 만들어서 Set 에 박아 (Set 을 쓰는 이유는 중복 제거를 위해서)
//    가령 117 이면 11, 11 ,17, 17, 71, 71 이렇게 중복된 조합이 만들어지 질 수 밖에 없엄
//    조합을 만들때는 재귀(DFS)를 이용할꺼임
// 3. 해당 조합이 소수인지 판별해서 그걸 answer++ 해주면 되것지
package study.Java.code.algo2.ExhaustiveSearch;
import java.util.*;
public class algo_소수찾기 {
    static HashSet<Integer> numberSet = new HashSet<>();
    static boolean[] check;
    static char[] arr;
    static int len;
    public static void main(String[] args) {
        String numbers = "23"; // 2, 3, 23, 32
        int res = 3;

        int ans = solution(numbers);
        //System.out.println(ans);
        //System.err.println(res == ans);
    }

    private static int solution(String numbers) {
        int answer = 0;
        len = numbers.length();
        arr = new char[len];
        check = new boolean[len];

        // 조합 만들기
        for(int i = 0; i < len; i++)arr[i] = numbers.charAt(i);
        DFS("", 0);
        
       // 조합이 소수인지 판별
       Iterator<Integer> iter = numberSet.iterator();
       while(iter.hasNext())if(isPrime(iter.next()))answer++;
        return answer;
    }

    private static boolean isPrime(Integer num) {
        if (num == 0 || num == 1) return false;
        int eratos = (int) Math.sqrt(num) + 1;
        for (int i = 2; i < eratos; i++) if(num % i == 0) return false;
        // System.out.println("나는 소수다" + num);
        return true;
    }

    private static void DFS(String str, int idx) {
        int num;
        if(str != ""){
            num = Integer.parseInt(str);
            numberSet.add(num);
        }

        if(idx == len) return;

        for(int i = 0; i < len; i++){
            if(check[i]) continue;
            check[i] = true;
            DFS(str+ arr[i], idx + 1);
            check[i] = false;
        }
    }
}
