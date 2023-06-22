package study.Java.code.algo2.grid;

import java.io.*;

public class algo_1213_팰린드롭만들기 {
    static int[] alpha;
    static int n;
    static String answer;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        alpha = new int [26];
        n = alpha.length;
        for (int i = 0; i < n; i++) {
            int idx = line.charAt(i) - 'A';
            alpha[idx]++;
        }

        int isOne = 0;
        for (int i = 0; i < n; i++) {
            if(alpha[i]%2 == 1) isOne ++; 
        }

        answer = "";
        StringBuilder sb = new StringBuilder();
        if (isOne>1) answer+= "I'm Sorry Hansoo";
        else{
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < alpha[i]/2; j++) {
                    sb.append((char)(i+65));
                }
            }

            answer += sb.toString();
            String end = sb.reverse().toString();

            sb = new StringBuilder();
            for (int i = 0; i < n; i++) {
                if(alpha[i] % 2 == 1){
                    sb.append((char)(i+65));
                }
            }

            answer += sb.toString() + end;
        }
        System.out.println(answer);
    }
}
