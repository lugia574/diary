package study.Java.code.algo;
// 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시
// 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

import java.util.ArrayList;
import java.util.HashMap;

// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
//  베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하시오

// 제한사항
// genres[i]는 고유번호가 i인 노래의 장르입니다.
// plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// 장르 종류는 100개 미만입니다.
// 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// 모든 장르는 재생된 횟수가 다릅니다.

// Integer genreCnt = Collections.max(map.values());


class MusicAlbum{
    String genre;
    int playCnt;
    int idx;

    public MusicAlbum(String genre, int playCnt, int idx){
        this.genre = genre;
        this.playCnt = playCnt;
        this.idx = idx;
    }
}

class BestAlbumSolution {
    public int[] solution(String[] genres, int[] plays) {
        int[] answer = new int[genres.length];
        HashMap<String, Integer> map = new HashMap<>();

        for (int i = 0; i < genres.length; i++) {
            map.put(genres[i], map.getOrDefault(genres[i], 0)+plays[i]);

        }

        ArrayList<String> genres_ordered = new ArrayList<>();
        while(map.size()!=0){
            int max = -1;
            String max_key = "";
            for(String key : map.keySet()){
                int tmp_cnt = map.get(key);
                if(tmp_cnt>max){
                    max = tmp_cnt;
                    max_key = key;
                }
            }
            genres_ordered.add(max_key);
            map.remove(max_key);
        }

        
        return answer;
    }
}

public class l3_베스트앨범 {
    BestAlbumSolution sol = new BestAlbumSolution();

    String[] genres = {"classic", "pop", "classic", "classic", "pop"};
    int[] plays = {500, 600, 150, 800, 2500};
    int[] result = {4, 1, 3, 0};

    int[] res = sol.solution(genres, plays);
}
