package study.Java.code.algo2.구현;

import java.util.*;
public class algo_기둥과보 {
    static boolean check(List<int[]> answer) {
        for (int[] build : answer) {
            int x = build[0];
            int y = build[1];
            int stuff = build[2];

            if (stuff == 0) { // 기둥 체크
                // '바닥 위' or '보의 한쪽 끝 위' or '또 다른 기둥 위'
                if (y == 0 || contains(answer, x-1, y, 1) || contains(answer, x, y, 1) || contains(answer, x, y-1, 0)) {
                    continue;
                }
                return false;
            } else if (stuff == 1) { // 보 체크
                // '한쪽 끝 부분이 기둥 위' or '양쪽 끝 부분이 다른 보와 동시 연결'
                if (contains(answer, x, y-1, 0) || contains(answer, x+1, y-1, 0) || (contains(answer, x-1, y, 1) && contains(answer, x+1, y, 1))) {
                    continue;
                }
                return false;
            }
        }
        return true;
    }

    static boolean contains(List<int[]> answer, int x, int y, int stuff) {
        for (int[] build : answer) {
            if (build[0] == x && build[1] == y && build[2] == stuff) {
                return true;
            }
        }
        return false;
    }

    static int[][] solution(int n, int[][] build_frame) {
        List<int[]> answer = new ArrayList<>();
        for (int[] build : build_frame) {
            int x = build[0];
            int y = build[1];
            int stuff = build[2];
            int operation = build[3];

            if (operation == 1) { // 설치
                answer.add(new int[] {x, y, stuff});
                if (!check(answer)) {
                    answer.remove(answer.size() - 1);
                }
            } else if (operation == 0) { // 삭제
                int[] removed = null;
                for (int i = 0; i < answer.size(); i++) {
                    int[] buildToRemove = answer.get(i);
                    if (buildToRemove[0] == x && buildToRemove[1] == y && buildToRemove[2] == stuff) {
                        removed = answer.remove(i);
                        break;
                    }
                }
                if (!check(answer)) {
                    answer.add(removed);
                }
            }
        }
        answer.sort((a, b) -> {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            } else if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            } else {
                return Integer.compare(a[2], b[2]);
            }
        });
        int[][] result = new int[answer.size()][3];
        for (int i = 0; i < answer.size(); i++) {
            result[i] = answer.get(i);
        }
        return result;
    }

     public static void main(String[] args) {

        int n = 5;
        int[][] build_frame = {{1,0,0,1}, {1,1,1,1}, {2,1,0,1}, {2,2,1,1}, {5,0,0,1}, {5,1,0,1}, {4,2,1,1}, {3,2,1,1}};
        int[][] result = {{1,0,0}, {1,1,1}, {2,1,0}, {2,2,1}, {3,2,1}, {4,2,1}, {5,0,0}, {5,1,0}};
    
        System.out.println("세에엑스!!!!");
        int[][] answer = solution(n, build_frame);
        //System.out.println(Arrays.equals(result, answer));
        

    }   
}
