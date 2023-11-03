-- BOOK 테이블에서 2021년에 출판된 '인문' 카테고리에 속하는 도서 리스트를 찾아서 도서 ID(BOOK_ID), 
-- 출판일 (PUBLISHED_DATE)을 출력하는 SQL문을 작성해주세요.
-- 결과는 출판일을 기준으로 오름차순 정렬해주세요.


SELECT BOOK_ID, TO_CHAR(PUBLISHED_DATE, 'YYYY-MM-DD') AS PUBLISHED_DATE
FROM BOOK 
WHERE TO_CHAR(PUBLISHED_DATE, 'YYYY') = '2021'
AND CATEGORY = '인문'
ORDER BY PUBLISHED_DATE ASC;

-- 여기서 TO_CHAR 는 주로 데이터베이스에서 날짜와 숫자를 문자열로 변환하기 위해 사용되는 SQL 함수 중 하나입니다. 
-- 특히 날짜 데이터를 원하는 형식으로 문자열로 변환할 때 많이 활용됩니다.

-- 이걸 이용해서 where 도 년도만 표시하게 하고 그 중 21 년도껏만 한것