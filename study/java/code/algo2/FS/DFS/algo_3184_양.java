package study.Java.code.algo2.FS.DFS;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class algo_3184_양 {
    static int r, c, totalSheep, totalWolf, cntSheep, cntWolf;
    static char[][] board;
    static final int[] dx = {1, 0, -1, 0}, dy = {0, 1, 0, -1};

    private static void dfs(int x, int y){
        if (board[x][y] == 'o') cntSheep++;
        else if (board[x][y] == 'v') cntWolf ++;
        board[x][y] = '#';

        for(int i = 0; i < 4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(0 <= nx && nx < r && 0 <= ny && ny < c){
                if (board[nx][ny] == '#') continue;
                dfs(nx, ny);
            }
        }
    }

    private static void solution(){
        for(int i = 0; i < r; i++){
            for(int j = 0; j < c; j++){
                if(board[i][j] == 'v' || board[i][j] == 'o' || board[i][j] == '.'){
                    cntSheep = 0;
                    cntWolf = 0;
                    dfs(i, j);
                    if (cntSheep > cntWolf) totalSheep += cntSheep;
                    else totalWolf += cntWolf;
                };
            }
        }

        System.out.println(String.format("%d %d",totalSheep, totalWolf));
    }
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String[] str = bf.readLine().split(" ");
        r = Integer.parseInt(str[0]);
        c = Integer.parseInt(str[1]);
        board = new char[r][c];

        for(int i = 0; i < r; i++){
            String st = bf.readLine();
            board[i] = st.toCharArray();
        }
        
        solution();
    }
}
