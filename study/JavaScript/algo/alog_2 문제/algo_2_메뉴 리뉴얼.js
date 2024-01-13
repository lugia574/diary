function solution(orders, course) {
  let answer = [];

  course.forEach((num) => {
    const menus = new Map();
    orders.forEach((order) => {
      const combinations = getCombination(order.split("").sort(), num);
      combinations.forEach((combs) => {
        const comb = combs.join("");
        menus.set(comb, menus.has(comb) ? menus.get(comb) + 1 : 1);
      });
    });

    let populate = Math.max(...menus.values());

    menus.forEach((count, menu) => {
      if (count === populate && count >= 2) answer.push(menu);
    });
  });

  return answer.sort();
}

function getCombination(arr, num) {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];

const course = [2, 3, 4];
const result = ["AC", "ACDE", "BCFG", "CDE"];

console.log(solution(orders, course));
