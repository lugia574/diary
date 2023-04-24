// 어떻게 되는건지 이해가 안갔는데 이제 이해감
// subString 을 해서 왜 키값을 쪼개는 건지 설명해줄께
// 가령 123, 123151353 이라고 치면 123을 접두어로 가지고 있다고 할 수 있겠지
// 여기서 123 만 보고 단순히 map.containsKey("123") 이라고 하면 무조건 있다고 나올수 밖에 없어
// 이게 뭐가 문제냐면 123, 56785335 이라고 했을때도 있다고 나올꺼야
// 왜 그러냐면 map 에는 123 를 버젓히 가지고 있는데 123 을 찾는다고 하니 의미 없어지는거야
// 그렇다고 123 을 map.remove("123") 해서 빼고 나서 map.containsKey("123")  한다고 하면 무조건 없다고 할거야
// map.containsKey("123")  한다고 해도 1231523526 가 123 이라고 할 수 없거든
// 이때는 123에 포커싱 잡을게 아니라 1231523526 을 봐야해 큰값을 쪼개서 1 있냐 12 있냐 123 있냐 이렇게 substring 해서 보는거야

package study.Java.code.algo2.hash;
import java.util.*;
public class algo_전화번호 {
    public static void main(String[] args) {
        String[] phone_book = {"123","456","789", "12345"};
        //boolean res = true;

        boolean ans = solution(phone_book);
        System.out.println(ans);
        //System.out.println(res == ans ? "정답입니다." : "틀렸습니다 모지리 새끼야");
    }

    private static boolean solution(String[] phone_book) {
        Map<String, Integer> map = new HashMap<>();
        int len = phone_book.length;

        for (int i = 0; i < len; i++) 
            map.put(phone_book[i], phone_book[i].length());

        //System.out.println(map.toString());

        for (String k : map.keySet())
            for (int j = 0; j < map.get(k); j++)
                if (map.containsKey(k.substring(0, j)))
                    return false;

        return true;

    }
}


