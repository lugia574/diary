package study.Java.code.algo2.DataStructure.stack;

import java.io.*;
import java.util.*;;
public class algo_9935_문자열폭탄 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        String boomb = br.readLine();
        int boombLen = boomb.length();

        Stack<Character> st = new Stack<>();

        for(int i = 0; i < str.length(); i++){
            st.push(str.charAt(i));
            int stackLength = st.size();
            if (stackLength >= boombLen){
                boolean ok = true;

                for(int j = 0; j < boombLen; j++){
                    if (st.get(stackLength - boombLen + j) != boomb.charAt(j)){
                        ok = false;
                        break;
                    } 
                }

                if (ok){
                    for(int j = 0; j < boombLen; j++){
                        st.pop();
                    }
                }

            }
        }
    
        StringBuilder sb = new StringBuilder();
        for(Character c : st)sb.append(c);

        System.out.println(sb.length() == 0 ? "FRULA" : sb.toString());
    }
    
}
