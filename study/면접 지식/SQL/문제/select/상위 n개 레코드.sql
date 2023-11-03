-- 동물 보호소에 가장 먼저 들어온 동물의 이름을 조회하는 SQL 문을 작성해주세요.

select name from 
(select * from ANIMAL_INS
 order by DATETIME)
 WHERE ROWNUM = 1
 

--  와 mysql은 존나 간단한거든??? 그냥 셀렉 해서 limit 1 하면 끝나버려
--  근데 오라클은 그렇게 안됨
--  먼저 rownum 으로 잘라서 그걸 where 을 하든 뭘 하든 하는거라
--  우선 from 에 내가 원하는 순으로 order by 한 테이블에 rownum 해야함 ㅋㅋㅋ
