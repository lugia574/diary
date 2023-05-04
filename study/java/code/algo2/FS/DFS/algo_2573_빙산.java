package study.Java.code.algo2.FS.DFS;

import java.util.*;
import java.io.*;

public class algo_2573_빙산 {
    static int[][] graph;
    static boolean[][] visited;
    static int[][] count;
    static int n, m, day;
    static boolean check;
    static Queue<int[]> queue;
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};

    public static int bfs(int a, int b) {
        queue.offer(new int[]{a, b});
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];
            visited[x][y] = true;
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                    if (graph[nx][ny] != 0 && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        queue.offer(new int[]{nx, ny});
                    } else if (graph[nx][ny] == 0) {
                        count[x][y]++;
                    }
                }
            }
        }
        return 1;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] nm = br.readLine().split(" ");
        n = Integer.parseInt(nm[0]);
        m = Integer.parseInt(nm[1]);
        graph = new int[n][m];
        visited = new boolean[n][m];
        count = new int[n][m];
        queue = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            String[] row = br.readLine().split(" ");
            for (int j = 0; j < m; j++) {
                graph[i][j] = Integer.parseInt(row[j]);
            }
        }

        while (true) {
            visited = new boolean[n][m];
            count = new int[n][m];
            int result = 0;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    if (graph[i][j] != 0 && !visited[i][j]) {
                        result += bfs(i, j);
                    }
                }
            }
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    graph[i][j] -= count[i][j];
                    if (graph[i][j] < 0) {
                        graph[i][j] = 0;
                    }
                }
            }
            if (result == 0) {
                break;
            }
            if (result >= 2) {
                check = true;
                break;
            }
            day++;
        }

        if (check) {
            System.out.println(day);
        } else {
            System.out.println(0);
        }
    }
}
