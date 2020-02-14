// Создаем массив со словами
let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];

// Выбираем случайное слово
//let word = words[Math.floor(Math.random() * words.length)];
function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}
let word = pickWord();
console.log(word)

// Создаем итоговый массив
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = '_';
// }
function setupAnswerArray(word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
}
// let answerArray = setupAnswerArray(word);
// setupAnswerArray(word);
console.log(setupAnswerArray(word))


// let remainingLetters = word.length;

// // Игровой цикл
// while (remainingLetters > 0) {

//     // Показываем состояние игры
//     alert(answerArray.join(" "));
//     // Запрашиваем вариант ответа
//     var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
//     if (guess === null) {
//         // Выходим из игрового цикла
//         break;
//     }
//     else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     }
//     else {
//         // Обновляем состояние игры
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
//     // Конец игрового цикла
// }

// // Отображаем ответ и поздравляем игрока
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);