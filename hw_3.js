//Task 1 💻
let tex = 'true';
let bol2 = false;
let num = 17;
let und = undefined;
let nu = null;
console.log(typeof tex)
console.log(typeof bol2)
console.log(typeof num)
console.log(typeof und)
console.log(typeof nu)


//Task 2
let height = 15
let width = 20
if (height <= width) {
    console.log(width)
}


//Task 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}


//Task 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = key && documents && pen && (apple || orange) ? "Все взял, можно идти на работу" : "Что то забыл!";
console.log(shouldGoToWork);


//Task 5
let number = prompt("Введите число")
let output = number % 3 === 0 && number % 5 === 0 ? "FizBuz" : number % 3 === 0 ? "Buz" : number % 5 === 0 ? "Fiz" : "Фигня какаята";
console.log(output);


//Task 6
let age = prompt("Ведите ваш возраст");
if (age > 16 && age < 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори")
} else if (age >= 18) {
    console.log("Попей пивка")
} else {
    console.log("Пей колу")
}


//Task 7
let site = prompt("В какую сторону светa вы бы хотели отправиться?")
switch (site) {
    case "юг":
        console.log("на юг пойдешь счастье найдешь")
        break;
    case "север":
        console.log("на север пойдешь много денег найдешь")
        break;
    case "запад":
        console.log("на запад пойдешь верного друга найдешь")
        break;
    case "восток":
        console.log("на восток пойдешь разработчиком станешь")
        break;
    default:
        console.log("Попробуйте еще раз!")
}


//ADVANCED level
// Task 1 👨‍🏫
let nameUser = prompt("Введите ваше имя")
let userName = nameUser.toLowerCase()
userName = userName.charAt(0).toUpperCase() + userName.slice(1, userName.indexOf(' ') + 1) + userName.charAt(userName.indexOf(' ') + 1).toUpperCase() + userName.slice(userName.indexOf(' ') + 2)
alert("Привет, " + userName)


//Task 2
let n1 = prompt("Введите число");
let n2 = prompt("Сколько отнять от предыдущего результата?");
let n3 = prompt("Сколько прибавить к предыдущему результату?");
let n4 = prompt("На сколько умножить предыдущий результат?");
let n5 = prompt("На сколько поделить предыдущий результат?");
let equal = (((n1 - n2) + n3) * n4) / n5;
alert("(((" + n1 + " - " + n2 + ") + " + n3 + ") * " + n4 + ") / " + n5 + " = " + equal)


//Task 3
let lesenka = "#";
for (let i = 1; i <= 10; i++){
    console.log(lesenka)
    lesenka += "#";
}




