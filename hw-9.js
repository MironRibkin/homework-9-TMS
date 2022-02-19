//Task 0
const element = document.body;

function addText(tag, text) {
    const userTag = document.createElement(tag);
    // const userText = document.createTextNode(text);
    userTag.append(text);
    return userTag;
}

const usrAge = prompt('Введите ваш возраст');
const userName = prompt('Введите ваше имя');
const divElements = addText('div', userName);
const addTextUser = addText('p', usrAge);
element.append(divElements);
element.append(addTextUser);


// //Task 1
const divArray = document.getElementsByTagName('div');
console.log(divArray);
const divClassName = document.getElementsByClassName('wrapper');
divClassName[0].style.height = "20vw";
divClassName[0].style.width = "20vw";
divClassName[0].style.background = "#442363";
console.log(divClassName);
const divIdName = document.getElementById("divId");
divIdName.className = "div-class";
divIdName.classList.add("div-class_wrap");
console.log(divIdName);
//
//
// //Task 2
const divElement = document.querySelector(".div-Text");
console.log(divElement);
const allDivElement = document.querySelectorAll('.wrapper div')
console.log(allDivElement);


// //Task 3
const wrapperDiv = document.createElement('div');
const wrapperSpan = document.createElement('span');
wrapperSpan.append('Какой-то текст');
wrapperDiv.append(wrapperSpan);
console.log(wrapperDiv);
element.append(wrapperDiv);


// //Task 1 Advance lvl
const userInfoArray = [
    prompt('Введите ваше имя'),
    prompt('Введите вашу фамилию'),
    prompt('Введите ваш возраст'),
    prompt('Какое у вас настроение?')
]
const addUserInfo = (array) => {
    array.forEach(item => {
        let creatDivElement = document.createElement('div')
        let creatSpanElement = document.createElement('span')
        creatDivElement.style.cssText = 'background: #123321; min-width: 4vw; min-height: 3vw; text-align: center';
        creatSpanElement.style.cssText = 'background: #000; color: #143611';
        creatSpanElement.append(item);
        creatDivElement.append(creatSpanElement);
        element.append(creatDivElement);
    })
}
addUserInfo(userInfoArray);


//Task 2
// const getTagElements = (tag) => {
//     return document.getElementsByTagName(tag).length;
// }
// console.log("div: " + getTagElements("div"));
// console.log("span: " + getTagElements("span"));
//
// const allDocumentClasses = {};
// const getClassElements = () => {
//     let allClassesElements = element.getElementsByTagName('*');
//     allDocumentClasses.classes = [];
//     for (let i = 0; i < allClassesElements.length; i++) {
//         for (let j = 0; j < allClassesElements[i].classList.length; j++) {
//             if (!allDocumentClasses.classes.includes(allClassesElements[i].classList[j])) {
//                 allDocumentClasses.classes.push(allClassesElements[i].classList[j]);
//             }
//         }
//     }
//     console.log(allDocumentClasses.classes);
// }
// getClassElements()

const wrapper = document.querySelector('.wrapper').childNodes;

let classesElements = {
    classes: []
};
wrapper.forEach(item => {
    if (item.className && !classesElements.classes.includes(item)) {
        console.log(item);
        console.log(item.className);
        classesElements.classes.push(item.className)
    }
})
console.log(classesElements)



//Task 3
const ulElement = document.getElementsByClassName('list')
const liElements = ulElement[0].getElementsByTagName('li');
console.log(liElements);
const creatRandomColor = () => {
    let firstEl = "#";
    for (let i = 1; i <= 6; i++) {
        firstEl += Math.round(Math.random() * 9);
    }
    return firstEl;
}
creatRandomColor()
const setRandomColor = () => {
    liElements[Math.round(Math.random() * (liElements.length - 1))].style.color = creatRandomColor();
}
setInterval(setRandomColor, 1000);