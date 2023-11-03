-- https://school.programmers.co.kr/learn/courses/30/lessons/132201?language=oracle
-- PATIENT 테이블에서 12세 이하인 여자환자의 환자이름, 환자번호, 성별코드, 나이, 전화번호를 조회하는 SQL문을 작성해주세요. 
-- 이때 전화번호가 없는 경우, 'NONE'으로 출력시켜 주시고 결과는 나이를 기준으로 내림차순 정렬하고, 
-- 나이 같다면 환자이름을 기준으로 오름차순 정렬해주세요.

SELECT PT_NAME, PT_NO, GEND_CD, AGE, COALESCE(TLNO, 'NONE') as TLNO from PATIENT
WHERE AGE < 13 AND  GEND_CD = 'W'
ORDER BY AGE DESC, PT_NAME ASC;



-- COALESCE는 SQL에서 사용되는 함수로, 여러 개의 값 중에서 첫 번째로 NULL이 아닌 값을 반환합니다. 
-- 이 함수는 주로 NULL 처리나 기본값 설정에 사용됩니다.

-- 일반적인 사용법은 다음과 같습니다:

-- COALESCE(value1, value2, value3, ...)
-- value1, value2, value3 등은 비교하고자 하는 값들입니다.
-- COALESCE 함수는 이러한 값들 중에서 첫 번째로 NULL이 아닌 값을 반환합니다.
-- 모든 값이 NULL인 경우, COALESCE는 NULL을 반환합니다.
-- 예를 들어, 다음의 쿼리는 COALESCE를 사용하여 전화번호가 NULL인 경우 대신 'NONE'을 출력하도록 합니다:


-- SELECT COALESCE(TLNO, 'NONE') AS TLNO
-- FROM PATIENT;
-- 이렇게 하면 전화번호가 NULL인 레코드의 경우 'NONE'으로 표시되며, NULL이 아닌 레코드의 경우 실제 전화번호가 유지됩니다.