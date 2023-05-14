// 이게 개 같은게 Tim Sort 를 알아야함
// https://d2.naver.com/helloworld/0315536
// https://gogigood.tistory.com/70

package study.Java.code.algo2.DataStructure.hash;
import java.util.*;
public class algo_베스트앨범 {
    public static void main(String[] args) {
        String[] genres = {"classic", "pop", "classic", "classic", "pop"};
        int[] plays = {500, 600, 150, 800, 2500};
        int[] ans = solution(genres, plays);

        System.out.println(ans.toString());
    }
    static class Music{
        String genre;
        int play;
        int idx;

        public Music(String genre, int play, int idx){
            this.genre = genre;
            this.play = play;
            this.idx = idx;
        }
    }

    private static int[] solution(String[] genres, int[] plays) {
        int len = genres.length;

        Map<String, Integer> map = new HashMap<>();
        for(int i = 0; i < len; i++)
            map.put(genres[i], map.getOrDefault(genres[i], 0) + plays[i]);
        
        ArrayList<String> ordered = new ArrayList<>();

        while(map.size() > 0){
            int max = -1;
            String max_key = "";
            for(String k : map.keySet()){
                int tmp = map.get(k);
                if(tmp > max){
                    max = tmp;
                    max_key = k;
                }
            }

            ordered.add(max_key);
            map.remove(max_key);
        }

        ArrayList<Music> result = new ArrayList<>();
        for(String g : ordered){
            ArrayList<Music> list = new ArrayList<>();
            for(int i = 0; i < len; i++){
                if(genres[i].equals(g)){
                    list.add(new Music(genres[i], plays[i], i));
                }
            }
            Collections.sort(list, (o1, o2) -> o2.play - o1.play); // 내림차순 소팅
            result.add(list.get(0)); 	// 1개는 무조건 수록
            if(list.size()!=1){ 	// 더 수록할 곡이 있으면(==장르 내의 노래가 1개보다 많으면) 수록
                result.add(list.get(1));
            }
        }

        // print result
        int[] answer = new int[result.size()];
        for(int i=0; i<result.size(); i++){
            answer[i] = result.get(i).idx;
        }
        return answer;
    
        }
    }
