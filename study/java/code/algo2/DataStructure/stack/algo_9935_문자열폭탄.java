package study.Java.code.algo2.DataStructure.stack;

import java.io.*;
import java.util.*;;
public class algo_9935_문자열폭탄 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        String boomb = br.readLine();
        int boombLength = boomb.length();

        Stack<Character> st = new Stack<>();

        for(int i = 0; i < str.length(); i++){
            st.push(str.charAt(i));
            int stackLength = st.size();
            if (stackLength >= boombLength){
                boolean ok = true;

                for(int j = 0; j < boombLength; j++){
                    if (st.get(stackLength - boombLength + j) != boomb.charAt(j)){
                        ok = false;
                        break;
                    } 
                }

                if (ok){
                    for(int j = 0; j < boombLength; j++){
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
