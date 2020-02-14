//#1. Новые дразнилки
//Сделайте генератор случайных дразнилок со своим набором слов.
let randomBodyParts = ['нос', 'ухо', 'глаз', 'нога', 'зуб', 'рука'];
let randomAdjectives = ['кривая', 'грязная', 'отвратительная', 'вонючая', 'мерзкая', 'тупая'];
let randomWords = ['Обезьяна', 'Выдра', 'Кролик', 'Енот', 'Попугай', 'Осел'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let randonInsult = ['У тебя', randomBodyPart, 'словно', randomAdjective, randomWord + '!!!'].join(" ");
console.log(randonInsult);


// #2. Изощренные дразнилки
// Усовершенствуйте генератор дразнилок, чтобы он создавал драз-
// нилки такого типа: «У тебя [часть тела] еще более [прилагатель-
// ное], чем [часть тела животного] у [животное]».
// Подсказка: нужно будет создать еще один массив.
let randomBodyParts2 = ['нос', 'ухо', 'глаз', 'нога', 'зуб', 'рука'];
let randomAdjectives2 = ['кривая', 'грязная', 'отвратительная', 'вонючая', 'мерзкая', 'тупая'];
let randomWords2 = ['Обезьяна', 'Выдра', 'Кролик', 'Енот', 'Попугай', 'Осел'];
let randomAnimals = ['Обезьяны', 'Выдры', 'Кролика', 'Енота', 'Попугая', 'Осла'];

let randomBodyPart2 = randomBodyParts2[Math.floor(Math.random() * randomBodyParts2.length)];
let randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];
let randomWord2 = randomWords2[Math.floor(Math.random() * randomWords2.length)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

let randonInsult2 = ['У тебя', randomBodyPart2, 'еще более', randomAdjective2, 'чем', randomBodyPart2, 'у', randomAnimal + '!!!'].join(" ");
console.log(randonInsult2);

let cat1 = {
    breed: "canadian Sphinx",
    name: "Persi",
    age: 1.5,
    color: 'Grey'
}
console.log(cat1);
console.log(Object.keys(cat1));

let cat2 = {};
cat2["breed"] = "Metis of Britain";
cat2["name"] = "Greisy";
cat2["age"] = 3.5;
cat2["color"] = "Grey";
console.log(cat2);

let dinosaurs = [
    { name: "Тираннозавр рекс", period: "Верхнемеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
];
console.log(dinosaurs[0].name);
console.log(dinosaurs[1]['period']);

var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends1 = [anna, dave, kate];
console.log(friends1[0]['luckyNumbers'][2])
console.log(friends1[1].luckyNumbers[2]);

let sheepCounted = 1;
while (sheepCounted <= 10) {
    console.log("Подсчитано овец: " + sheepCounted + "!");
    sheepCounted++
}
console.log("Хрррррррррр-псссс");

for (let i = 3; i < 10000; i = i * 3) {
    console.log(i);
}

let i = 3;
while (i < 10000) {
    console.log(i);
    i *= 3;
}

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

var animals2 = ["Кот", "Рыба", "Лемур", "Комодский варан"];
let beatyAnimal = animals2.map(function (item) {
    return item + " - прекрасное животное";
});
console.log(beatyAnimal);

// let randomString = "";
// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomletters = Math.floor(Math.random() * alphabet.length);
// console.log(randomletters)

let randomString = "";
while (randomString.length < 6) {
    let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let randomletters = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomletters]
}
console.log(randomString)


// #3. h4ck3r sp34k
// Переведите англоязычный текст на «хакерский язык» (h4ck3r
// sp34k)!
var input = "javascript is awesome";
var output = "";

for (i = 0; i < input.length; i++) {
    if (input[i] == 'a') {
        output += 4;
    }
    else if (input[i] == 'e') {
        output += 3;
    }
    else if (input[i] == 'i') {
        output += 1;
    }
    else if (input[i] == 'o') {
        output += 0;
    }
    else output += input[i];

}
console.log(output) //"j4v4scr1pt 1s 4w3s0m3".



var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};

printMultipleTimes(5, '=^.^=');

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}
console.log(add(multiply(36325, 9824), 777)); // 356857577



let areArraysSame = function (argument1, argument2) {
    for (let i = 0; i < argument1.length; i++) {
        if (argument1[i] !== argument2[i] || argument1.length !== argument2.length) {
            1
            return false;
        }
    }
    return true;
}

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// for (let i = 0; i < 3; i++) {
//     let hobby = prompt("Назови одно из своих хобби!");
//     $("body").append("<p>" + hobby + "</p>");
// }

let friends = ["Alexey", "Sergey", "Svetlana"];
for (i = 0; i < friends.length; i++) {
    console.log(friends[i])
    // let p = $("<p></p>");
    // p.text('My friend is ' + friends[i]);
    // $('body').append(p);
    $('body').append("<p>" + 'My friend is ' + friends[i] + "</p>");
}

function showTime() {
    let time = new Date;
    let hour = time.getHours();
    let minutes = time.getMinutes();
    console.log(minutes.length)

    let seconds = time.getSeconds();
    console.log(time);
    console.log(hour + ":" + minutes + ":" + seconds);
    console.log(hour + ":" + minutes + ":" + seconds);
}
showTime();

console.log(setInterval(showTime, 1000));
let realTime = setInterval(showTime, 1000);
$('body').append("<p> realTime() </p>");


let h = $('h1');
let offset = h.offset();
//console.log(offset);
$('body').append("<p>" + 'Top: ' + offset.top + ', Left: ' + offset.left + "</p>");

function offsetSquare() {
    let square = $('#sq');
    let offset = square.offset();
    // square.offset({ top: 85, left: 30 });
    square.offset(function (i, coord) {
        let newCoord = {};
        newCoord.top = coord.top + 10;
        newCoord.left = coord.left + 10;
        return newCoord;
    });
    //square.offset();
    // $('body').append("<p>" + "Square top: " + offset.top + ", Square left:" + offset.left + "</p>");

};
// offsetSquare();

setInterval(offsetSquare, 1000);
