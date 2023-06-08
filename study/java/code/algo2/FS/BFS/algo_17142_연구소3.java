package study.Java.code.algo2.FS.BFS;

import java.io.*;
import java.util.*;


public class algo_17142_연구소3 {
    static int [][] board;
    static int n, m;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    static class Point{
        int x, y, t;
        public Point(int x, int y, int t){
            this.x = x;
            this.y = y;
            this.t = t;
        }
    }

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        board = new int[n][n];

        ArrayList<Point> v = new ArrayList<>();
        int cnt = 0;
        int res = n * n + 1;

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < n; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());

                if (board[i][j] == 2) v.add(new Point(i, j, 0));
                else if (board[i][j] == 0) cnt++;
            }
        }

        ArrayList<ArrayList<Point>> vComb = new ArrayList<>();
        combination(v, new boolean[v.size()], 0, m, vComb);

        for(ArrayList<Point> vArr : vComb){
            int ans = BFS(vArr, cnt);
            res = Math.min(ans, res);
        }

        if(res == n * n + 1)System.out.println(-1);
        else System.out.println(res);
    }

    private static int BFS(ArrayList<Point> vArr, int cnt) {
        int time = 0;
        int[][] visited = new int[n][n];
        Deque<Point> q = new LinkedList<>();

        for (Point p: vArr){
            q.offer(p);
            visited[p.x][p.y] = 1;
        }

        while (!q.isEmpty()){
            Point cur = q.poll();
            time = Math.max(time, cur.t);
            if (cnt == 0) continue;
            for (int i = 0; i < 4; i++) {
                int nx = cur.x + dx[i];
                int ny = cur.y + dy[i];
                if (0 <= nx && nx < n && 0 <= ny && ny < n){
                    if(visited[nx][ny] == 0 && board[nx][ny] != 1){
                        q.offer(new Point(nx, ny, cur.t + 1));
                        visited[nx][ny] = 1;
                        if(board[nx][ny] == 0) cnt--;
                    }
                }
            }
        }

        if(cnt > 0) time = n * n + 1;
        return time;
    }

    private static void combination(ArrayList<Point> v, boolean[] visited, int start, int r, ArrayList<ArrayList<Point>> result) {
        if (r == 0){
            ArrayList<Point> comb = new ArrayList<>();
            for (int i = 0; i < v.size(); i++) {
                if(visited[i]){
                    comb.add(v.get(i));
                }
            }

            result.add(comb);
            return;
        }

        for (int i = start; i < visited.length; i++) {
            visited[i] = true;
            combination(v, visited, i + 1, r - 1, result);
            visited[i] = false;   
        }
    }
}
