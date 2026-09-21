// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

function checkRepeatLetters(str: string) {
  return str
    .toLowerCase()
    .split("")
    .some((e, _, array) => {
      return array.includes(e);
    });
}
console.log(checkRepeatLetters(str1));
console.log(checkRepeatLetters(str2));
