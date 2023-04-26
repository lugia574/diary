package study.Java.code.algo2.sort;
import java.util.*;
public class algo_Hindex {
    // 왜 이렇게 되는지 이해 됐음
    // 자 보면 sort 를 하자나 가령 3 0 1 6 5 이라고 하면 0 1 3 5 6 이 되겠지 
    // 그리고 나서 포문을 돌리면서 int h 변수 값을 정해
    // 이 변수가 뭔지를 이해를 해야해
    // 이 변수는 해당 HIndex 값을 정한거임
    // 변수의 예측 최대의 값은 해당 배열의 길이겠지 거기서 포문 i 만큼 하나하나 줄여서
    // 거기서 값이 맞는지 if 문으로 따져보고 break를 해버리는거야 
    // 값이 맞으면 굳이 더 내려갈 이유가 없으니까 그냥 break ㅇㅋ?
    // 그럼 조건을 보자고 만약에 h 값이 5 라고 해보자 그럼 5가 되기위해선 배열 전부가 조건에 맞아야해
    // 그러니까 정렬한  i 번째 값이랑 비교를 따져보는거야 여기서 i 는 0 이지 0번째부터 조건에 맞아해 전부 맞는거니까
    // 이런식으로 하나하나 i 값을 올리면서 비교 하다 끝내는거야 끝
    public int solution(int[] citations) {
        int answer = 0;
        int len = citations.length;
        Arrays.sort(citations);
        for (int i = 0; i < len; i++){
            int h = len - i;
            
            if (citations[i] >= h) {
                answer = h;
                break;
            }
        }
        
        return answer;
    }
}

