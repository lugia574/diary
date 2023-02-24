package study.Java.code.algo;

// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
// 제한 사항 n은 2 이상 100,000 이하인 자연수입니다.

class Solution1 {
    public int solution(int n) {
        int[] res = new int[n+1];
        
        for (int i = 0; i < res.length; i++) {
            if (i <= 1) res[i] = i;
            else{
                res[i] = (res[i-1] + res[i-2]) % 1234567;
            }
        }
        
        int answer =  res[n] % 1234567;

        return answer;
    }
}

public class l2_피보나치 {
    public static void main(String[] args) {
        int n = 3;
        int res = 2;
        Solution1 sol = new Solution1();
        int ans = sol.solution(n);
        System.out.println(ans);
        System.out.println(res == ans ? "True":"False");
    }
    
}
