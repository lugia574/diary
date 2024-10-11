# HashMap

```java
HashMap<Integer, Integer> hash = new HashMap<>();

Map<Integer, Integer> map = new HashMap<>();
```

## insert

```java
hash.put(a, hash.getOrDefault(a, 0) + 1);
```

## select

### get

```java
hash.get(key)

hash.getOrDefault(a, 0)
```

### size

```java
hash.size()
```

### key 값 뽑기

```java
for(int key : hash.keySet())
```

### value 로 key 값 찾기

```java
map.containsValue(3);
```

## 예시 문제

https://school.programmers.co.kr/learn/courses/30/lessons/181916

```java
import java.util.*;

class Solution {
    public int solution(int a, int b, int c, int d) {
        int answer = 0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(a, map.getOrDefault(a, 0) + 1);
        map.put(b, map.getOrDefault(b, 0) + 1);
        map.put(c, map.getOrDefault(c, 0) + 1);
        map.put(d, map.getOrDefault(d, 0) + 1);

        if (map.size() == 1) return a * 1111;
        if (map.size() == 2) {
            if (map.containsValue(3)) {
                for (Map.Entry<Integer, Integer> el : map.entrySet())
                    answer += el.getKey() * (el.getValue() == 3 ? 10 : 1);
                return answer * answer;
            }
            int x = (a + b + c + d - 2 * a) / 2;
            return (a + x) * Math.abs(a - x);
        }
        if (map.size() == 3) {
            answer = 1;
            for (Map.Entry<Integer, Integer> el : map.entrySet())
                if (el.getValue() != 2) answer *= el.getKey();
            return answer;
        }
        return Math.min(Math.min(a, b), Math.min(c, d));
    }
}
```
