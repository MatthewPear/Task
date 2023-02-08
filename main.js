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

//console.log(tablica11);

const result1 = tablica1.filter(el => el % 2 !== 0);                
console.log("Wynik 1 :", result1);

const result2 = tablica2.filter(el => el > 50);                
console.log("Wynik 2 :", result2);

const result3 = tablica3.filter(el => el % 3 === 0);                
console.log("Wynik 3 :", result3);

const result4 = [...tablica4].sort();           
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

let y = 'dupa';
console.log("Wynik 11 :", tablica11);

const resultA = [...tablica12];
    resultA.splice([8],1);
    resultA.splice([5],1);
const result12 = resultA;      
console.log("Wynik 12 :", result12);

const result13 = [...tablica13].splice([0], 4);
console.log("Wynik 13 :", result13);

const result14 = [...tablica14].splice(-3);
console.log("Wynik 14 :", result14);

console.log("Wynik 15 :", tablica15);

const x = 7;
const result16 = tablica16.filter(el => el > x);
console.log("Wynik 16 :", result16);

const result17 = tablica17.filter(el => el * 3 > 15);
console.log("Wynik 17 :", result17);

const container1 = document.createElement('div');

    container1.classList.add("container");

    const originalArr1 = document.createElement('div');

        originalArr1.innerText = "Tablica 1 : " + tablica1;
        originalArr1.classList.add("display");

    container1.appendChild(originalArr1);

    const smallButton1 = document.createElement('button');

        smallButton1.textContent = "Get result";
        smallButton1.classList.add("smallButton");
        smallButton1.addEventListener('click', () => draw1());

    container1.appendChild(smallButton1);

    const outputArr1 = document.createElement('div');

        outputArr1.innerText = "Result: ";
        outputArr1.classList.add("display");

    container1.appendChild(outputArr1);

    function createSquare1(el) {

        const mySquare1 = document.createElement('div');

            mySquare1.textContent = el;
            mySquare1.classList.add("square");

         container1.appendChild(mySquare1);   
    }

    function draw1() {
        result1.forEach((el) => {
            createSquare1(el);
        })
    }
    
document.body.appendChild(container1);

const container2 = document.createElement('div');

    container2.classList.add("container");

    const originalArr2 = document.createElement('div');

        originalArr2.innerText = "Tablica 2 : " + tablica2;
        originalArr2.classList.add("display");

    container2.appendChild(originalArr2);

    const smallButton2 = document.createElement('button');

        smallButton2.textContent = "Get result";
        smallButton2.classList.add("smallButton");
        smallButton2.addEventListener('click', () => draw2());

    container2.appendChild(smallButton2);

    const outputArr2 = document.createElement('div');

        outputArr2.innerText = "Result: ";
        outputArr2.classList.add("display");

    container2.appendChild(outputArr2);

    function createSquare2(el) {

        const mySquare2 = document.createElement('div');

            mySquare2.textContent = el;
            mySquare2.classList.add("square");

        container2.appendChild(mySquare2);
    }

    function draw2() {
        result2.forEach((el) => {
            createSquare2(el);
        })
    }
    
document.body.appendChild(container2);

const container3 = document.createElement('div');

    container3.classList.add("container");

    const originalArr3 = document.createElement('div');

        originalArr3.innerText = "Tablica 3 : " + tablica3;
        originalArr3.classList.add("display");

    container3.appendChild(originalArr3);

    const smallButton3 = document.createElement('button');

        smallButton3.textContent = "Get result";
        smallButton3.classList.add("smallButton");
        smallButton3.addEventListener('click', () => draw3());

    container3.appendChild(smallButton3);

    const outputArr3 = document.createElement('div');

        outputArr3.innerText = "Result: ";
        outputArr3.classList.add("display");

    container3.appendChild(outputArr3);

    function createSquare3(el) {

        const mySquare3 = document.createElement('div');

            mySquare3.textContent = el;
            mySquare3.classList.add("square");

        container3.appendChild(mySquare3);   
    }

    function draw3() {
        result3.forEach((el) => {
            createSquare3(el);
        })
    }
    
document.body.appendChild(container3);

const container4 = document.createElement('div');

    container4.classList.add("container");

    const originalArr4 = document.createElement('div');

        originalArr4.innerText = "Tablica 4 : " + tablica4;
        originalArr4.classList.add("display");

    container4.appendChild(originalArr4);

    const smallButton4 = document.createElement('button');

        smallButton4.textContent = "Get result";
        smallButton4.classList.add("smallButton");
        smallButton4.addEventListener('click', () => draw4());

    container4.appendChild(smallButton4);

    const outputArr4 = document.createElement('div');

        outputArr4.innerText = "Result: ";
        outputArr4.classList.add("display");

    container4.appendChild(outputArr4);

    function createSquare4(el) {

        const mySquare4 = document.createElement('div');

            mySquare4.textContent = el;
            mySquare4.classList.add("square");

        container4.appendChild(mySquare4);   
    }

    function draw4() {
        result4.forEach((el) => {
            createSquare4(el);
        })
    }
    
document.body.appendChild(container4);

const container5 = document.createElement('div');

    container5.classList.add("container");

    const originalArr5 = document.createElement('div');

        originalArr5.innerText = "Tablica 5 : " + tablica5;
        originalArr5.classList.add("display");

    container5.appendChild(originalArr5);

    const smallButton5 = document.createElement('button');

        smallButton5.textContent = "Get result";
        smallButton5.classList.add("smallButton");
        smallButton5.addEventListener('click', () => draw5());

    container5.appendChild(smallButton5);

    const outputArr5 = document.createElement('div');

        outputArr5.innerText = "Result: ";
        outputArr5.classList.add("display");

    container5.appendChild(outputArr5);

    function createSquare5(el) {

        const mySquare5 = document.createElement('div');

            mySquare5.textContent = el;
            mySquare5.classList.add("square");

        container5.appendChild(mySquare5);   
    }

    function draw5() {
        result5.forEach((el) => {
            createSquare5(el);
        })
    }
    
document.body.appendChild(container5);

const container6 = document.createElement('div');

    container6.classList.add("container");

    const originalArr6 = document.createElement('div');

        originalArr6.innerText = "Tablica 6 : " + tablica6;
        originalArr6.classList.add("display");

    container6.appendChild(originalArr6);

    const smallButton6 = document.createElement('button');

        smallButton6.textContent = "Get result";
        smallButton6.classList.add("smallButton");
        smallButton6.addEventListener('click', () => draw6());

    container6.appendChild(smallButton6);

    const outputArr6 = document.createElement('div');

        outputArr6.innerText = "Result: ";
        outputArr6.classList.add("display");

    container6.appendChild(outputArr6);

    function createSquare6(el) {

        const mySquare6 = document.createElement('div');

            mySquare6.textContent = el;
            mySquare6.classList.add("square");

        container6.appendChild(mySquare6);   
    }

    function draw6() {
        result6.forEach((el) => {
            createSquare6(el);
        })
    }
    
document.body.appendChild(container6);

const container7 = document.createElement('div');

    container7.classList.add("container");

    const originalArr7 = document.createElement('div');

        originalArr7.innerText = "Tablica 7 : " + tablica7;
        originalArr7.classList.add("display");

    container7.appendChild(originalArr7);

    const smallButton7 = document.createElement('button');

        smallButton7.textContent = "Get result";
        smallButton7.classList.add("smallButton");
        smallButton7.addEventListener('click', () => draw7());

    container7.appendChild(smallButton7);

    const outputArr7 = document.createElement('div');

        outputArr7.innerText = "Result: ";
        outputArr7.classList.add("display");

    container7.appendChild(outputArr7);

    function createSquare7(el) {

        const mySquare7 = document.createElement('div');

            mySquare7.textContent = el;
            mySquare7.classList.add("square");

        container7.appendChild(mySquare7);   
    }

    function draw7() {
        result7.forEach((el) => {
            createSquare7(el);
        })
    }
    
document.body.appendChild(container7);

const container8 = document.createElement('div');

    container8.classList.add("container");

    const originalArr8 = document.createElement('div');

        originalArr8.innerText = "Tablica 8 : " + tablica8;
        originalArr8.classList.add("display");

    container8.appendChild(originalArr8);

    const smallButton8 = document.createElement('button');

        smallButton8.textContent = "Get result";
        smallButton8.classList.add("smallButton");
        smallButton8.addEventListener('click', () => draw8());

    container8.appendChild(smallButton8);

    const outputArr8 = document.createElement('div');

        outputArr8.innerText = "Result: ";
        outputArr8.classList.add("display");

    container8.appendChild(outputArr8);

    function createSquare8(el) {

        const mySquare8 = document.createElement('div');

            mySquare8.textContent = el;
            mySquare8.classList.add("square");

        container8.appendChild(mySquare8);   
    }

    function draw8() {
        [result8].forEach((el) => {
            createSquare8(el);
        })
    }
    
document.body.appendChild(container8);

const container9 = document.createElement('div');

    container9.classList.add("container");

    const originalArr9 = document.createElement('div');

        originalArr9.innerText = "Tablica 9 : " + tablica9;
        originalArr9.classList.add("display");

    container9.appendChild(originalArr9);

    const smallButton9 = document.createElement('button');

        smallButton9.textContent = "Get result";
        smallButton9.classList.add("smallButton");
        smallButton9.addEventListener('click', () => draw9());

    container9.appendChild(smallButton9);

    const outputArr9 = document.createElement('div');

        outputArr9.innerText = "Result: ";
        outputArr9.classList.add("display");

    container9.appendChild(outputArr9);

    function createSquare9(el) {

        const mySquare9 = document.createElement('div');

            mySquare9.textContent = el;
            mySquare9.classList.add("square");

        container9.appendChild(mySquare9);   
    }

    function draw9() {
        result9.forEach((el) => {
            createSquare9(el);
        })
    }
    
document.body.appendChild(container9);

const container10 = document.createElement('div');

    container10.classList.add("container");

    const originalArr10 = document.createElement('div');

        originalArr10.innerText = "Tablica 10 : " + tablica10;
        originalArr10.classList.add("display");

    container10.appendChild(originalArr10);

    const smallButton10 = document.createElement('button');

        smallButton10.textContent = "Get result";
        smallButton10.classList.add("smallButton");
        smallButton10.addEventListener('click', () => draw10());

    container10.appendChild(smallButton10);

    const outputArr10 = document.createElement('div');

        outputArr10.innerText = "Result: ";
        outputArr10.classList.add("display");

    container10.appendChild(outputArr10);

    function createSquare10(el) {

        const mySquare10 = document.createElement('div');

            mySquare10.textContent = el;
            mySquare10.classList.add("square");

        container10.appendChild(mySquare10);   
    }

    function draw10() {
        result10.forEach((el) => {
            createSquare10(el);
        })
    }
    
document.body.appendChild(container10);

const container11 = document.createElement('div');

    container11.classList.add("container");

    const originalArr11 = document.createElement('div');

        originalArr11.innerText = "Tablica 11 : " + tablica11;
        originalArr11.classList.add("display");

    container11.appendChild(originalArr11);

    const smallButton11a = document.createElement('button');

        smallButton11a.textContent = "Add";
        smallButton11a.classList.add("smallButton");
        smallButton11a.addEventListener('click', () => buttonClickHandler11(y));

    container11.appendChild(smallButton11a);

    const myCounter11 = document.createElement('div');

    myCounter11.innerText = "Licznik: " + tablica11.length;
    myCounter11.classList.add("counter");

    container11.appendChild(myCounter11);

    const smallButton11b = document.createElement('button');

        smallButton11b.textContent = "Draw result";
        smallButton11b.classList.add("smallButton");
        smallButton11b.addEventListener('click', () => draw11());

    container11.appendChild(smallButton11b);

    const outputArr11 = document.createElement('div');

        outputArr11.innerText = "Result: ";
        outputArr11.classList.add("display");

    container11.appendChild(outputArr11);
    
    function buttonClickHandler11(y) {
        tablica11.push(y);
    
        myCounter11.innerText = "Licznik: " + tablica11.length;
    }

    function createSquare11(el) {

        const mySquare11 = document.createElement('div');

            mySquare11.textContent = el;
            mySquare11.classList.add("square");

        container11.appendChild(mySquare11);   
    }

    function draw11() {
        tablica11.forEach((el) => {
            createSquare11(el);
        })
    }
    
document.body.appendChild(container11);

const container12 = document.createElement('div');

    container12.classList.add("container");

    const originalArr12 = document.createElement('div');

        originalArr12.innerText = "Tablica 12 : " + tablica12;
        originalArr12.classList.add("display");

    container12.appendChild(originalArr12);

    const smallButton12 = document.createElement('button');

        smallButton12.textContent = "Get result";
        smallButton12.classList.add("smallButton");
        smallButton12.addEventListener('click', () => draw12());

    container12.appendChild(smallButton12);

    const outputArr12 = document.createElement('div');

        outputArr12.innerText = "Result: ";
        outputArr12.classList.add("display");

    container12.appendChild(outputArr12);

    function createSquare12(el) {

        const mySquare12 = document.createElement('div');

            mySquare12.textContent = el;
            mySquare12.classList.add("square");

        container12.appendChild(mySquare12);   
    }

    function draw12() {
        result12.forEach((el) => {
            createSquare12(el);
        })
    }
    
document.body.appendChild(container12);

const container13 = document.createElement('div');

    container13.classList.add("container");

    const originalArr13 = document.createElement('div');

        originalArr13.innerText = "Tablica 13 : " + tablica13;
        originalArr13.classList.add("display");

    container13.appendChild(originalArr13);

    const smallButton13 = document.createElement('button');

        smallButton13.textContent = "Get result";
        smallButton13.classList.add("smallButton");
        smallButton13.addEventListener('click', () => draw13());

    container13.appendChild(smallButton13);

    const outputArr13 = document.createElement('div');

        outputArr13.innerText = "Result: ";
        outputArr13.classList.add("display");

    container13.appendChild(outputArr13);

    function createSquare13(el) {

        const mySquare13 = document.createElement('div');

            mySquare13.textContent = el;
            mySquare13.classList.add("square");

        container13.appendChild(mySquare13);   
    }

    function draw13() {
        result13.forEach((el) => {
            createSquare13(el);
        })
    }
    
document.body.appendChild(container13);

const container14 = document.createElement('div');

    container14.classList.add("container");

    const originalArr14 = document.createElement('div');

        originalArr14.innerText = "Tablica 14 : " + tablica14;
        originalArr14.classList.add("display");

    container14.appendChild(originalArr14);

    const smallButton14 = document.createElement('button');

        smallButton14.textContent = "Get result";
        smallButton14.classList.add("smallButton");
        smallButton14.addEventListener('click', () => draw14());

    container14.appendChild(smallButton14);

    const outputArr14 = document.createElement('div');

        outputArr14.innerText = "Result: ";
        outputArr14.classList.add("display");

    container14.appendChild(outputArr14);

    function createSquare14(el) {

        const mySquare14 = document.createElement('div');

            mySquare14.textContent = el;
            mySquare14.classList.add("square");

        container14.appendChild(mySquare14);   
    }

    function draw14() {
        result14.forEach((el) => {
            createSquare14(el);
        })
    }
    
document.body.appendChild(container14);

const container15 = document.createElement('div');

    container15.classList.add("container");

    const originalArr15 = document.createElement('div');

        originalArr15.innerText = "Tablica 15 : " + tablica15;
        originalArr15.classList.add("display");

    container15.appendChild(originalArr15);

    const smallButton15 = document.createElement('button');

        smallButton15.textContent = "Get result";
        smallButton15.classList.add("smallButton");
        smallButton15.addEventListener('click', () => draw15());

    container15.appendChild(smallButton15);

    const outputArr15 = document.createElement('div');

        outputArr15.innerText = "Result: ";
        outputArr15.classList.add("display");

    container15.appendChild(outputArr15);

    function createSquare15(el) {

         const mySquare15 = document.createElement('div');

            mySquare15.textContent = el;

        container15.appendChild(mySquare15);

        if (el % 2 === 0) {
            mySquare15.classList.add("squareP");
            
            
        } else {
            mySquare15.classList.add("squareN");
        }
    }

    function draw15() {
        tablica15.forEach((el) => {
            createSquare15(el);
        })
    }
    
document.body.appendChild(container15);

const container16 = document.createElement('div');

    container16.classList.add("container");

    const originalArr16 = document.createElement('div');

        originalArr16.innerText = "Tablica 16 : " + tablica16;
        originalArr16.classList.add("display");

    container16.appendChild(originalArr16);

    const smallButton16 = document.createElement('button');

        smallButton16.textContent = "Get result";
        smallButton16.classList.add("smallButton");
        smallButton16.addEventListener('click', () => draw16());

    container16.appendChild(smallButton16);

    const outputArr16 = document.createElement('div');

        outputArr16.innerText = "Result: ";
        outputArr16.classList.add("display");

    container16.appendChild(outputArr16);

    function createSquare16(el) {

        const mySquare16 = document.createElement('div');

            mySquare16.textContent = el;
            mySquare16.classList.add("square");

        container16.appendChild(mySquare16);   
    }

    function draw16() {
        result16.forEach((el) => {
            createSquare16(el);
        })
    }
    
document.body.appendChild(container16);

const container17 = document.createElement('div');

    container17.classList.add("container");

    const originalArr17 = document.createElement('div');

        originalArr17.innerText = "Tablica 17 : " + tablica17;
        originalArr17.classList.add("display");

    container17.appendChild(originalArr17);

    const smallButton17 = document.createElement('button');

        smallButton17.textContent = "Get result";
        smallButton17.classList.add("smallButton");
        smallButton17.addEventListener('click', () => draw17());

    container17.appendChild(smallButton17);

    const outputArr17 = document.createElement('div');

        outputArr17.innerText = "Result: ";
        outputArr17.classList.add("display");

    container17.appendChild(outputArr17);

    function createSquare17(el) {

        const mySquare17 = document.createElement('div');

            mySquare17.textContent = el;
            mySquare17.classList.add("square");

        container17.appendChild(mySquare17);   
    }

    function draw17() {
        result17.forEach((el) => {
            createSquare17(el);
        })
    }
    
document.body.appendChild(container17);
