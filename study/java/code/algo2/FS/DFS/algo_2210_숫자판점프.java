package study.Java.code.algo2.FS.DFS;

import java.io.*;
import java.util.*;

public class algo_2210_숫자판점프 {
    static final int[] dx = {1, 0, -1, 0};
    static final int[] dy = {0, 1, 0, -1};
    static Set<String> ans;

    private static void DFS(int x, int y, String num, int lev, String[][] board){
        if (lev == 6) {
            ans.add(num);
        } else {
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                if (0 <= nx && nx < 5 && 0 <= ny && ny < 5) {
                    DFS(nx, ny, num + board[nx][ny], lev + 1, board);
                }
            }
        }
    }
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[][] board = new String[5][5];
        for (int i = 0; i < 5; i++) {
            board[i] = br.readLine().split(" ");
        }
        ans = new HashSet<>();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                DFS(i, j, board[i][j], 1, board);
            }
        }
        System.out.println(ans.size());
    }
}
