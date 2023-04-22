import java.util.*;     
public class sol6_n행 {
    // 자 어떻게 할것인지 생각을 해보면
    // 우선 int [][] arr = net int [n][n];
    // 이렇게 생성을 하고
    // for (i i < n i++) for (j j < n j ++) 2중 포문으로 해서
    // 값을 넣어줘 i >= j  까지 해서 값을 i + 1 값을 넣어주면 될듯?
    // arr[i][j] = i+ 1, arr[j][i] = i + 1 이렇게 하면 되나?

    // 자 그렇게 했다고 쳐 그럼 이제 [n] 만큼 짤라서 그냥 그대로 String 열로 붙여버리면 되는거 아녀?
    // 그리고 그 짜르는 거 쓰면 되자너 ㅇㅇ substring

    //////////////////////////////////////////
    // 라고 생각했는데 개같이 사기~ 
    // https://taehoung0102.tistory.com/93
    // 이건 솔직히 불쾌하네 십 ㅋㅋㅋ
    // 나중에 다시 보자

    public  List<Long> solution(int n, long left, long right) {
        
        List<Long> list = new ArrayList<>();
        
        for(long i=left;i<right+1;i++){
             list.add(Math.max(i/n,i%n) + 1);
        }
        
        return list;
    }
}
