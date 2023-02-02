const tablica1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tablica2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const tablica3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const tablica4 = [2, 0, 9, 7, 1, 3, 4, 5, 8, 6];
const tablica5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tablica6 = ['a', 'b', 'c' ];
const tablica7 = ['abc', 'def', 'xyz', 'hwdp', 'cwks', 'chuwdu', 'dupa', 'x', 'jebac policje'];
const tablica8 = ['abc', 'def', 'xyz', 'hwdp', 'cwks', 'chuwdu', 'dupa', 'x', 'jebac policje'];
const tablica9 = ['elo-yo', 'marco-polo', 'thunder-flash', 'pin-zielony'];
const tablica10 = ['elo-yo', 'marco-polo', 'thunder-flash', 'pin-zielony'];
const tablica11 = [];
const tablica12 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const tablica13 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tablica14 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tablica15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tablica16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tablica17 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(tablica1);

const result1 = tablica1.filter(el => el % 2 !== 0);                
console.log("Wynik 1 :", result1);

const result2 = tablica2.filter(el => el > 50);                
console.log("Wynik 2 :", result2);

const result3 = tablica3.filter(el => el % 3 === 0);                
console.log("Wynik 3 :", result3);

const result4 = tablica4.sort();           
console.log("Wynik 4 :", result4);

const result5 = tablica5.map(el => el * 3);                
console.log("Wynik 5 :", result5);

const result6 = tablica6.map(el => 'Hi my name is ' + el);
console.log("Wynik 6 :", result6);

const result7 = tablica7.filter(el => el.length >= 5);
console.log("Wynik 7 :", result7);

const result8 = tablica8.find(el => el.length === 4);
console.log("Wynik 8 :", result8);

const result9 = tablica9.map(el => el.split('-')[1]);
console.log("Wynik 9 :", result9);

const result10 = tablica10.map(el => el.split('-')[0]).filter(el => el.length < 5);
console.log("Wynik 10 :", result10);

//11

// const result12 = tablica12.splice([6], 1).splice([9], 1);
// console.log("Wynik 12 :", result12);

const result13 = tablica13.splice([0], 4);
console.log("Wynik 13 :", result13);

const result14 = tablica14.splice(-3);
console.log("Wynik 14 :", result14);

//15

//16

const result17 = tablica17.filter(el => el * 3 > 15);
console.log("Wynik 17 :", result17);



    const originalArr1 = document.createElement('div');

        originalArr1.innerText = "Tablica 1 : " + tablica1;
        originalArr1.classList.add("display");

    document.body.appendChild(originalArr1)

    const smallButton1 = document.createElement('button');

        smallButton1.textContent = "Get result";
        smallButton1.classList.add("smallButton");
        smallButton1.addEventListener('click', () => draw1());


    document.body.appendChild(smallButton1)

    const outputArr1 = document.createElement('div');

        outputArr1.innerText = "Result: ";
        outputArr1.classList.add("display");

    document.body.appendChild(outputArr1)

    function createSquare1(el) {

        const mySquare1 = document.createElement('div');

            mySquare1.textContent = el;
            mySquare1.classList.add("square");

        document.body.appendChild(mySquare1)   
    }

    function draw1() {
        result1.forEach((el) => {
            createSquare1(el);
        })
    }

    // const originalArr2 = document.createElement('div');

    // originalArr2.innerText = "Tablica 2 : " + tablica2;
    // originalArr2.classList.add("display");

    // document.body.appendChild(originalArr2)

    // const smallButton2 = document.createElement('button');

    // smallButton2.textContent = "Get result";
    // smallButton2.classList.add("smallButton");
    // smallButton2.addEventListener('click', () => draw2());


    // document.body.appendChild(smallButton2)

    // const outputArr2 = document.createElement('div');

    // outputArr2.innerText = "Result: ";
    // outputArr2.classList.add("display");

    // document.body.appendChild(outputArr2)

    // function createSquare2(el) {

    // const mySquare2 = document.createElement('div');

    //     mySquare2.textContent = el;
    //     mySquare2.classList.add("square");

    //     document.body.appendChild(mySquare2)   
    // }

    // function draw2() {
    // result2.forEach((el) => {
    //     createSquare2(el);
    // })
    // }














// const setContainerx = document.createElement('div');

// //     setContainerx.classList.add("container");

//     const originalArr2 = document.createElement('div');

//         originalArr2.innerText = "Tablica 2 : " + tablica2;
//         originalArr2.classList.add("display");

//     document.body.appendChild(originalArr2)

//     const smallButton2 = document.createElement('button');

//         smallButton2.textContent = "Get result";
//         smallButton2.classList.add("smallButton");
//         smallButton2.addEventListener('click', () => createSquare2());
// //     smallButton1.addEventListener('click', () => smallButtonHandler('p'));

//     document.body.appendChild(smallButton2)

//     const outputArr2 = document.createElement('div');

//         outputArr2.innerText = "Result: ";
//         outputArr2.classList.add("display");

//     document.body.appendChild(outputArr2)

//     function createSquare2() {

//         const mySquare2 = document.createElement('div');

//             mySquare2.textContent = result1.el;
//             mySquare2.classList.add("square");


//         document.body.appendChild(mySquare2)
//     }

// document.body.appendChild(setContainer2);

// const myButton = document.createElement('button');
    
//     myButton.textContent = "List of Arrays";
//     myButton.classList.add("button");
//     // myButton.addEventListener('click', (evt) => buttonClickHandler(evt, i));

//     document.body.appendChild(myButton);
    
// // function myFunction(number) {
// //     console.log('Result ' + number);
    
// // }

// const button = document.createElement('button');

// button.textContent = "Click me 3";
// button.setAttribute('onclick', "myFunction('3')")

// document.getElementById('button3').append(button);

// const myNewButton = document.createElement('button');

// myNewButton.textContent = "Click me 4";
// myNewButton.addEventListener('click', () => myFunction('4'));

// document.body.appendChild(myNewButton)

// // function buttonClickHandler(event, content) {
// //     // console.log(event);
// //     // console.log(event.target);
// //     // sayHello(content)
// //     logMyId(event)
// // } 

// // const myNewerButton = document.createElement('button');

// // myNewerButton.textContent = "Click me 5";
// // myNewerButton.addEventListener('click', (evt) => buttonClickHandler(evt));

// // document.body.appendChild(myNewerButton)

// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // function sayHello(content) {
// //     console.log('Result ' + content);
// // }

// // function logMyId(event) {
// //         console.log('elo button id =', event.target.id)
    
// //         let x = event.target.id;
        
// //             if (x % 2 !== 0) {
// //             console.log("id jest nieparzyste");
// //             }else{
// //             console.log("id jest parzyste");
// //             }   
// // }

// // for (let i = 6; i < 11; i++) {  

// //     const myNewestButton = document.createElement('button');
    
// //     myNewestButton.textContent = "Click me " + i;
// //     myNewestButton.setAttribute("id", i);
// //     myNewestButton.addEventListener('click', (evt) => buttonClickHandler(evt, i));

// //     document.body.appendChild(myNewestButton);
// // }

// const parzyste = [];
// const nieparzyste = [];

// function buttonClickHandler(event, x) {
//     // createDot(x);
//     if (x % 2 === 0) {
//         parzyste.push(event.target.name);
        
        
//     } else {
//         nieparzyste.push(event.target.name);
        
        
//     }
//     console.log('parzyste, nieparzyste = ', parzyste, nieparzyste);
//     myCounter1.innerText = "Parzyste " + parzyste.length;
//     myCounter2.innerText = "Nieparzyste " + nieparzyste.length;

// }

// function smallButtonHandler(listName) {
//     if (listName === 'p') {
       
//         draw(parzyste, 'p');
//     } else if (listName === 'n') {
       
//         draw(nieparzyste, 'n');
//     }
// }


// function createButton(x, name) {
    
//     const myNextButton = document.createElement('button');

//     myNextButton.textContent = "Dodaj element " + name;
//     myNextButton.setAttribute("id", x);
//     const btnName = 'btn-' + x
//     myNextButton.setAttribute("name", btnName);
//     myNextButton.classList.add("button");
//     // myNextButton.addEventListener('click', () => createDot(x));
//     myNextButton.addEventListener('click', (evt) => buttonClickHandler(evt, x));

//     document.body.appendChild(myNextButton)
// }

// // createButton("id1", "dupa");
// // createButton("id2", "cipa");
// // createButton("id3", "chuj");

// for (let i = 0; i < 5; i++) { 
//     createButton(i, "elo " + i)
// }

// const myCounter1 = document.createElement('div');

//     myCounter1.innerText = "Parzyste " + parzyste.length;
//     myCounter1.classList.add("counter");

// document.body.appendChild(myCounter1)


//     const smallButton1 = document.createElement('button');

//     smallButton1.textContent = "Rysuj";
//     // smallButton1.setAttribute("id", p);
//     // const smallBtnName1 = 'smallBtn-' + p
//     // smallButton1.setAttribute("name", smallBtnName1);
//     smallButton1.classList.add("smallButton");
//     // smallButton1.addEventListener('click', () => createDot(x));
//     smallButton1.addEventListener('click', () => smallButtonHandler('p'));

//     document.body.appendChild(smallButton1)


// const myCounter2 = document.createElement('div');

//     myCounter2.innerText = "Nieparzyste " + nieparzyste.length;
//     myCounter2.classList.add("counter");

// document.body.appendChild(myCounter2)

// const smallButton2 = document.createElement('button');

//     smallButton2.textContent = "Rysuj";
//     // smallButton2.setAttribute("id", n);
//     // const smallBtnName2 = 'smallBtn2-' + n
//     // smallButton2.setAttribute("name", smallBtnName2);
//     smallButton2.classList.add("smallButton");
//     // smallButton1.addEventListener('click', () => createDot(x));
//     smallButton2.addEventListener('click', () => smallButtonHandler('n'));

//     document.body.appendChild(smallButton2)

// function createDot(y, list) {
    
//     const myDot = document.createElement('div');
//     const colorClass = "color-" + y;
//     const listClass = "list-" + list;

//     myDot.textContent = y;
//     myDot.classList.add("dot", colorClass, listClass);


//     document.body.appendChild(myDot)
// }

// function draw(arrayToDraw, list) {
//     console.log('Draw, array List', arrayToDraw, list);
    
//     const existingDots = [...document.getElementsByClassName('list-' + list)];
//     if (existingDots.length) {
//         existingDots.forEach((dot) => {
//             console.log('existing dot=', dot);
//             dot.remove();
//         })
//     }
    
    

//     console.log('existingDots', existingDots);

//     arrayToDraw.forEach((el) => {
//         console.log('Parzyste for each, el=', el)
//         const argumentToPass = el.split('-');
//         console.log('argumentToPassArr= ', argumentToPass);
//         console.log('argumentToPass= ', argumentToPass[1]);
//         createDot(argumentToPass[1], list);        
//     })
// }
// //
// // ARRAY
// // const myArr = ['dupa', 'cipa', 'chuj'];
// // console.log('my arr = ', myArr);
// // console.log('first elem  = ', myArr[0])
// // console.log('sec elem  = ', myArr[1])
// // console.log('third elem  = ', myArr[2])
// // console.log('4th elem  = ', myArr[3])

// // myArr.push('cwel');

// // console.log('my arr afetr add = ', myArr);
// // console.log('4th elem  = ', myArr[3])

// // myArr.pop();
// // console.log('my arr afetr pop = ', myArr);

// // tu bedziemy wyjebywac 2 elem
// // const indexToRemove = myArr.indexOf('cipa');
// // console.log('index to remove = ', indexToRemove);
// // myArr.splice(indexToRemove, 1);
// // // myArr.splice(indexToRemove, 2);
// // console.log('my arr afetr splice = ', myArr);

// // myArr.forEach((el) => {
// //     console.log('here elem =', el);
// // })

// // myArr.forEach((el, index) => {
// //     console.log('here elem, my index =', el, index);
// // })