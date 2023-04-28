-- https://school.programmers.co.kr/learn/courses/30/lessons/131114

-- FOOD_WAREHOUSE 테이블에서 경기도에 위치한 창고의 ID, 
-- 이름, 주소, 냉동시설 여부를 조회하는 SQL문을 작성해주세요. 
-- 이때 냉동시설 여부가 NULL인 경우, 'N'으로 출력시켜 주시고 
-- 결과는 창고 ID를 기준으로 오름차순 정렬해주세요.

SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, NVL(FREEZER_YN, 'N') AS FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '%경기도%'
ORDER BY WAREHOUSE_ID ASC;


-- NVL()은 오라클에서 사용하는 함수 중 하나로, 첫 번째 인자가 NULL인 경우, 두 번째 인자를 반환합니다.

-- 예를 들어, NVL(column_name, 'default_value')는 column_name이 NULL인 경우 'default_value'를 반환합니다. 이는 데이터베이스에서 NULL 값을 처리할 때 유용하게 사용됩니다.

-- NVL() 함수는 주로 SELECT문에서 컬럼 값을 처리할 때 사용합니다. 예를 들어, 아래와 같은 쿼리에서는, 주소가 NULL인 경우 '주소 없음'이라는 값을 출력하게 됩니다.

-- SELECT NVL(address, '주소 없음') AS address FROM food_warehouse;