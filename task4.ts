// Написать функцию, которая поменяет переменные местами, не создавая дополнительную переменную

const num = [5, 7];

function replaceNumbers(num: number[]) {
  [num[0], num[1]] = [num[1]!, num[0]!];
  return num;
}
console.log(replaceNumbers(num));
