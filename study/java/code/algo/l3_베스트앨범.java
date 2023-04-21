

import java.util.ArrayList;
import java.util.Collections;
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



// 1. 어떻게 푸냐면 각각 값을 해쉬에 넣어서 가장 play 수 값을 뽑아 그럼 pop 이 나오겠지 뭐 그리고 pop 장르 삭제  >>> while 문으로 할것
// 2. 해당 장르의 노래 최대 플레이 노래 준최대 플레이 노래 이렇게 2개 뽑고 idx 해당 저장해  >>> for 문 2 회 로 하면 될듯
// 3. 1번을 다시 돌려 pop 이 사라졌으니까 이번에는 pop 다음 최대 나오겠네
// 4. 해당 과정을 map 이 사라질때까지 계속 해버려~ 가버렷~~ 응기잇~
// class MusicAlbum{
//     String genre;
//     int playCnt;
//     int idx;

//     public MusicAlbum(String genre, int playCnt, int idx){
//         this.genre = genre;
//         this.playCnt = playCnt;
//         this.idx = idx;
//     }
// }

class BestAlbumSolution {
    public int[] solution(String[] genres, int[] plays) {
        int genresLength = genres.length;
        int[] answer = new int[genresLength];
        HashMap<String, Integer> map = new HashMap<>();
        HashMap<Integer, Integer> playMusic = new HashMap<>();
        ArrayList<Integer> orderList = new ArrayList<>();

        // 우선 앨법을 다 집어 넣엇
        for (int i = 0; i < genres.length; i++) {
            map.put(genres[i], map.getOrDefault(genres[i], 0)+plays[i]);

        }

        while(map.size()!=0){
            // map 중에 가장 높은 장르 뽑기
            Integer maxPlay = Collections.max(map.values());
            String maxPlayGenre = "";
            for (String key : map.keySet()) {
                if(map.get(key).equals(maxPlay)){
                    maxPlayGenre = key;
                    map.remove(key);
                    break;
                }
            }
            // 이거 아닌거 같은데 흠흠흠
            for (int i = 0; i < genresLength; i++) {
                if (genres[i].equals(maxPlayGenre)){
                    playMusic.put(i, plays[i]);
                }
            }
            // 플레이수 가장 높은 2개 뽑아내기
            for (int j = 0; j < 2; j++) {
                
            }

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
