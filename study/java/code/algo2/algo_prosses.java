// 와씨 빡센데 진짜
// 이게 뭐냐 대체
// 이렇게까지 해야해?
// 파이썬으면 그냥 튜플에 박아서 해버리는데 자바는 이렇게 까지 해야한다고? 막말로 그냥 배열로도 할 수 있을텐데 와씨
// 개빡센데???

package study.Java.code.algo2;
import java.util.*;

public class algo_prosses {
    public static void main(String[] args) {
        int[] priorities = {2, 1, 3, 2};
        int location = 2;
        int res = 1;

        int ans = s(priorities, location);

        System.out.println(ans);
    }

    static int s(int[] priorities, int location) {
        int answer = 0;
        int order = 0;
        Queue<Pair> q = init(priorities, location);

        while (!q.isEmpty()) {
            // 값 꺼내기
            Pair poll = q.poll();
            boolean state = false;

            // 남은 q 를 돌려서 꺼낸 값이랑 비교 꺼낸 값보다 높은 우선순위 있으면 state true 로 만들고 break
            for (Pair p : q) {
                if (poll.value < p.value) {
                    state = true;
                    break;
                }
            }

            // state true 면 q 에 다시 넣거 continue
            if (state) {
                q.offer(poll);
                continue;
            }

            // 아니야 젤 높은거야 그래서 버려야해 그럼 order ++
            order++;

            // 로케 값이 우리가 원하는 값이냐 따져서 
            // 맞으면 order 값을 answer 에 넣어 근데 이러면 굳이 answer, order 나눌 필요가 없는거 같은데
            if (poll.location) {
                answer = order;
            }
        }
        return answer;
    }

    // q 만들어주는 메소드임
    // q 선언하고 해당 형식은 Pair
    // 그리고 포문 돌려가지고 문제에서 원하는 loc 는 true 로 주입
    // 그렇게 만들어진 q 를 리턴
    private static Queue<Pair> init(int[] priorities, int location) {
        Queue<Pair> q = new LinkedList<>();

        for (int i = 0; i < priorities.length; i++) {
            boolean state = false;
            if (i == location) {
                state = true;
            }
            q.offer(new Pair(priorities[i], state));
        }
        return q;
    }

    // 우선 구현체? 클래스를 만들어
    // 우선순위 밸류값이랑 해당 위치를 나타내는 로컬 값
    // 그리고 초기화 해주는걸로 끝
    private static class Pair {
        int value;
        boolean location;

        public Pair(int value, boolean location) {
            this.value = value;
            this.location = location;
        }
    }
}
