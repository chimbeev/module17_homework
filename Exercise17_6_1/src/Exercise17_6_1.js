//Реализуйте и протестируйте функцию (проведите хотя бы один тест).
//Напишите функцию, которая принимает строку и возвращает эту строку в перевёрнутом виде (например, “строка” — “акортс”).

function str_convert(str) {
    const reverse = str.split('').reverse().join('');
    return reverse
}

console.log(str_convert('Проверка'))
module.exports = str_convert();