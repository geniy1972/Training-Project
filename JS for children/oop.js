let speak = function () {
    console.log(this.sound + "! My name is " + this.name);
};

let dog = {
    name: 'Oladushek',
    legs: 4,
    isAwesome: true,
    sound: 'Waf',
    speak: speak
};
dog.age = 6;
console.log(dog);
dog.bark = function () {
    console.log('My name is ' + this.name + '!');
};
dog.bark();



let cat = {
    sound: "Miy",
    name: "Varezhka",
    speak: speak
};
cat.speak();
dog.speak();
