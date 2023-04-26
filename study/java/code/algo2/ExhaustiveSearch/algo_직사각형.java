package study.Java.code.algo2.ExhaustiveSearch;

public class algo_직사각형 {
    public static void main(String[] args) {
        int[][] sizes = {{60, 50}, {30, 70}, {60, 30}, {80, 40}};
        int res = 4000;
        int ans = solution(sizes);

        System.out.println(ans);
        System.out.println(res == ans);
    }

    private static int solution(int[][] sizes) {
        int len = sizes.length;
        for (int i = 0; i < len; i++) {
            if(sizes[i][0] < sizes[i][1]){
                int tmp = sizes[i][0];
                sizes[i][0] = sizes[i][1];
                sizes[i][1] = tmp;
            }
        } 
        int maxRow = 0;
        int maxCol = 0;
        for(int j = 0; j < len; j++){
            if (maxRow < sizes[j][0]) maxRow = sizes[j][0];
            if (maxCol < sizes[j][1]) maxCol = sizes[j][1];
        }
        return maxRow * maxCol;
    }
}
