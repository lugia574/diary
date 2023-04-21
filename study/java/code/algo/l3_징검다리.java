

// 징검다리를 건널 수 있도록 다음과 같이 규칙을 만들었습니다.
// 징검다리는 일렬로 놓여 있고 각 징검다리의 디딤돌에는 모두 숫자가 적혀 있으며 
// 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듭니다.
// 디딤돌의 숫자가 0이 되면 더 이상 밟을 수 없으며 이때는 그 다음 디딤돌로 한번에 여러 칸을 건너 뛸 수 있습니다.
// 단, 다음으로 밟을 수 있는 디딤돌이 여러 개인 경우 무조건 가장 가까운 디딤돌로만 건너뛸 수 있습니다.

// while 문을 돌려서 배열값들을 하나씩 빼
// 다 빼면 answer ++
// 근데 만약 뺄 값이 0이라 넘어가는게 k 번 넘어가면?
// 그땐 break 걸고 나와서 조져버려

// 이렇게 해서 정확성 테스트는 다 맞았는데
// 효율성 테스트는 지금 죄다 틀리는 중 ㅋ
// 흠 어떻게 해야 효율성에서 통과가 될까나
// 슬라이딩 윈도우 알고리즘을 쓰면 On 으로 풀수 있다고 하데?
// 대충 원리는 어떻게 돌아가는지 알게 됐음
// 근데 이걸 어떻게 적용하지?

class SSSolution {
    public int normalSolution(int[] stones, int k) {
        int answer = 0;
        while(true){
            boolean pass= true;
            int jump = 0;
            
            for (int i = 0; i < stones.length; i++) {
                // 0 칸이면
                if(stones[i] == 0){
                    jump ++;
                    if(jump == k) {pass = false; break;}
                    continue;
                }else{
                    jump = 0;
                }
                stones[i] --;   
            }

            
            if (!pass) break;
            // for (int i : stones) {
            //     System.out.print(i + "  ");
            // }
            // System.out.println();
            answer ++;
        }
        return answer;
    }


    
    public int SlideWidowSolution(int[] stones, int k) {
        int s = 1, e = Integer.MAX_VALUE;

        while(s <= e){
            int mid = s + (e - s) / 2;
            
        }

        
        return s;
    }
} 
public class l3_징검다리 {
    public static void main(String[] args) {
        SSSolution sol = new SSSolution();

        int[] stones = {2, 4, 5, 3, 2, 1, 4, 2, 5, 1};
        int k = 3; // 최대 넘을 수 있는 칸 수
        int result = 3;

        int res = sol.SlideWidowSolution(stones, k);
        System.out.println(res);
        System.out.println(res == result ? "정답입니다." : "틀렸습니다 모지리새끼야");
    }
}
