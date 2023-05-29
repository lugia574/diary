package study.Java.code.algo2.DataStructure.stack;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class algo_17413_단어뒤집기 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String strArr = br.readLine().trim();
        Stack<Character> stack = new Stack<>();
        boolean tag = false;
        StringBuilder res = new StringBuilder();

        for (char s : strArr.toCharArray()) {
            if (s == ' ') {
                while (!stack.isEmpty()) {
                    res.append(stack.pop());
                }
                res.append(s);
            } else if (s == '<') {
                while (!stack.isEmpty()) {
                    res.append(stack.pop());
                }
                tag = true;
                res.append(s);
            } else if (s == '>') {
                tag = false;
                res.append(s);
            } else if (tag) {
                res.append(s);
            } else {
                stack.push(s);
            }
        }

        while (!stack.isEmpty()) {
            res.append(stack.pop());
        }

        System.out.println(res);
    }
}
