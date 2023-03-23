

// var option1 = document.getElementById('option1');
// var option2 = document.getElementById('option2');
// var option3 = document.getElementById('option3');
// var option4 = document.getElementById('option4');
// var option5 = document.getElementById('option5');
// var option6 = document.getElementById('option6');

// var opbut1 = document.getElementById('opbut1');
// var opbut2 = document.getElementById('opbut2');
// var opbut3 = document.getElementById('opbut3');
// var opbut4 = document.getElementById('opbut4');
// var opbut5 = document.getElementById('opbut5');
// var opbut6 = document.getElementById('opbut6');

// var attempt = 0;
// var attempt1 = 0

// var cancel = document.getElementById('cancel');
// var clear = document.getElementById('clear');
// var enter = document.getElementById('enter');

// var content = document.getElementById('content');

// var card = document.getElementById('card');
// var receiptpaper = document.getElementById('receiptpaper');
// var answer1 = document.getElementById('answer1');
// var answer2 = document.getElementById('answer2');

// var posAmount = [
//     {
//         Name: 'Avi Cohen',
//         cardNumber: 1111222233334444,
//         pin: 1234,
//         checking: 1000,
//         savings: 1000
//     },
//     {
//         Name: 'Avidor Schwartzman',
//         cardNumber: 5555666677778888,
//         pin: 5678,
//         checking: 1200,
//         savings: 1000,
//     },
//     {
//         Name: 'Saar Lilu Schwartman',
//         cardNumber: 4580000011118888,
//         pin: 9012,
//         checking: 1500,
//         savings: 1000,
//     },
//     {
//         Name: 'Keren Flash',
//         cardNumber: 3333999966664444,
//         pin: 4321,
//         checking: 950,
//         savings: 1000,
//     },

// ]

// var randomNum = Math.floor((Math.random() * 5));

// cust = posAmount[randomNum];

// card.onclick = welcome;

// // This function welcomes the user, sets up the keypad and prompts them to enter their PIN
// function welcome() {

//     console.log(cust.Name, cust.pin)
//     var image = document.getElementById('image')

//     card.style.animationName = 'example';


//     content.innerHTML = '<form><h2>WELCOME, ' + cust.Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
//     keypad();

//     enter.onclick = checkPin;
//     clear.onclick = welcome;
//     cancel.onclick = reload;

// };
// // This function checks if the entered PIN is correct or not, and handles invalid PIN attempts
// function checkPin() {
//     console.log(number.value, cust.pin)
//     if (Number(number.value) !== Number(cust.pin)) {
//         content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';

//         attempt++

//         if (attempt == 3) {
//             card.style.display = 'none';
//             content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
//             setTimeout(reload, 4000);
//         } else {
//             setTimeout(welcome, 2200);
//         }

//     } else {
//         mainPage();
//     }
// };


// This function allows the user to check their account balance
// function checkBalance() {
//     content.innerHTML = '<form><h2>WOULD YOU LIKE TO KNOW YOUR BALANCE FOR CHECKING OR SAVINGS?</h2>'

//     option1.textContent = 'Checking';
//     option2.textContent = 'Savings';
//     option3.textContent = 'Exit';
//     option4.textContent = '';
//     option5.textContent = '';
//     option6.textContent = '';

//     opbut1.onclick = function () {
//         content.innerHTML = '<h6>YOUR CURRENT BALANCE FOR CHECKING IS NIS' + Number(cust.checking).toFixed(2) + '</h6>'
//     }; opbut2.onclick = function () {
//         content.innerHTML = '<h6>YOUR CURRENT BALANCE FOR SAVINGS IS NIS' + Number(cust.savings).toFixed(2) + '</h6>'
//     }; opbut3.onclick = mainPage;

// };
// // This function navigates the user to the main page where they can select from various options
// function mainPage() {
//     content.innerHTML = '<h2>TO PROCEED, SELECT FROM THE OPTIONS BELOW.</h2>'

//     option1.textContent = '(D)Deposit';
//     option2.textContent = '(W)Withdrawl';
//     option3.textContent = '(C)Check Balance';
//     option4.textContent = '(P)Change PIN';
//     option5.textContent = '(R)Print Recepit';
//     option6.textContent = '(Q)Quit';

//     opbut1.onclick = deposit;
//     opbut2.onclick = withdraw;
//     opbut3.onclick = checkBalance;
//     opbut4.onclick = changePin;
//     opbut5.onclick = checkBalance;
//     opbut6.onclick = exit; // exit
// };
// // This function allows the user to deposit funds into their account
// function deposit() {
//     content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO DEPOSIT IN?'

//     option1.textContent = 'Checkings';
//     option2.textContent = 'Savings';
//     option3.textContent = 'Exit';
//     option4.textContent = '';
//     option5.textContent = '';
//     option6.textContent = '';

//     opbut1.onclick = function () {
//         content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR CHECKING?</h2><input id="number" type=number max="9999">'
//         keypad();
//         option1.textContent = '';
//         option2.textContent = '';
//         option3.textContent = '';
//         option4.textContent = '';
//         option5.textContent = '';
//         option6.textContent = '';

//         enter.onclick = function () {
//             var checking = Number(cust.checking) + Number(number.value)

//             cust.checking = checking

//             content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.checking).toFixed(2) + '</h2>'

//             setTimeout(mainPage, 2200);
//         }
//     };

//     opbut2.onclick = function () {
//         content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

//         option1.textContent = '';
//         option2.textContent = '';
//         option3.textContent = '';
//         option4.textContent = '';
//         option5.textContent = '';
//         option6.textContent = '';

//         keypad();

//         enter.onclick = function () {
//             var savings = Number(cust.savings) + Number(number.value)

//             cust.savings = savings

//             content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.savings).toFixed(2) + '</h2>'

//             setTimeout(mainPage, 2200);
//         }
//     };

//     opbut3.onclick = mainPage;

// };
// This function allows the user to withdraw funds from their account
// function withdraw() {
//     content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO WITHDRAW FROM?</h2>'

//     option1.textContent = 'CHECKING';
//     option2.textContent = 'SAVINGS';
//     option3.textContent = 'EXIT';
//     option4.textContent = '';
//     option5.textContent = '';
//     option6.textContent = '';

//     opbut1.onclick = function () {
//         content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR CHECKING?</h2><input id="number" type=number max="9999">'

//         option1.textContent = '';
//         option2.textContent = '';
//         option3.textContent = '';
//         option4.textContent = '';
//         option5.textContent = '';
//         option6.textContent = '';

//         keypad();

//         enter.onclick = function () {
//             var checking = Number(cust.checking) - Number(number.value)

//             if (checking <= 0) {
//                 content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

//                 setTimeout(mainPage, 2000);
//             } else {

//                 cust.checking = checking

//                 content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.checking).toFixed(2) + '</h2>'

//                 setTimeout(mainPage, 2200);
//             };
//         };
//     };

//     opbut2.onclick = function () {
//         content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

//         option1.textContent = '';
//         option2.textContent = '';
//         option3.textContent = '';
//         option4.textContent = '';
//         option5.textContent = '';
//         option6.textContent = '';

//         keypad();

//         enter.onclick = function () {
//             var savings = Number(cust.savings) - Number(number.value)

//             if (savings <= 0) {
//                 content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

//                 setTimeout(mainPage, 2000);
//             } else {

//                 cust.savings = savings

//                 content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.savings).toFixed(2) + '</h2>'

//                 setTimeout(mainPage, 2200);

//             };
//         };
//     };

// };

// // This function allows the user to change their account PIN
// function changePin() {
//     content.innerHTML = '<form><h2>ENTER YOUR CURRENT PIN</h2><input id="number" type=number max="9999">'

//     keypad();

//     option1.textContent = '';
//     option2.textContent = '';
//     option3.textContent = '';
//     option4.textContent = '';
//     option5.textContent = '';
//     option6.textContent = '';

//     enter.onclick = function () {
//         if (Number(number.value) !== Number(cust.pin)) {
//             content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
//             attempt1++

//             if (attempt1 == 3) {
//                 card.style.display = 'none';
//                 content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
//                 setTimeout(reload, 4000);
//             } else {
//                 setTimeout(changePin, 2200);
//             }

//         } else {
//             content.innerHTML = '<h2>NOW, ENTER YOUR NEW PIN</h2><input id="number" type=number max="9999">';

//             keypad();


//             var nnumber = document.getElementById('number')



//             enter.onclick = function () {

//                 cust.pin = nnumber.value
//                 content.innerHTML = '<h2>YOUR NEW PIN NUMBER IS ' + cust.pin + '.<h2>';

//                 setTimeout(mainPage, 2200);

//             }

//             cancel.onclick = mainPage;
//             opbut6.onclick = mainPage;

//         }

//     }
// };



// This function allows the user to exit the system and print a receipt
// function exit() {
//     content.innerHTML = '<form><h2>EXIT.<br> ARE YOU SURE? </h2> <input type="radio" id="answer1" name="answer" value="yes" /><p class=word1>YES</p> <input type="radio" class="input1" name="answer" value="no" /><p class=words><p class=word2>NO</p></form>';

//     option1.textContent = '';
//     option2.textContent = '';
//     option3.textContent = '';
//     option4.textContent = '';
//     option5.textContent = '';
//     option6.textContent = '';


//     enter.onclick = function () {

//         if (answer1 = true) {
//             content.innerHTML = '<h2>PLEASE TAKE YOUR CARD AND RECEIPT</h2>'

//             receiptpaper.innerHTML = '<h3 class="rcph">ATM <br>' + cust.Name + '</h3><br> <p class="rcp">YOUR CURRENT BALANCE FOR CHECKING: NIS' + cust.checking.toFixed(2) + '<br> YOUR CURRENT BALANCE FOR SAVINGS: NIS' + cust.savings.toFixed(2) + '<br></p> <h3 class="rcph">THANK YOU!<h3>'

//             receiptpaper.style.animationName = 'example1';

//             card.style.animationFillMode = 'backwards'
//         } else {
//             mainPage();
//         }
//     };

// }

// // This function sets up the keypad for user input
// function keypad() {
//     var button1 = document.getElementById('button1');
//     var button2 = document.getElementById('button2');
//     var button3 = document.getElementById('button3');
//     var button4 = document.getElementById('button4');
//     var button5 = document.getElementById('button5');
//     var button6 = document.getElementById('button6');
//     var button7 = document.getElementById('button7');
//     var button8 = document.getElementById('button8');
//     var button9 = document.getElementById('button9');
//     var button0 = document.getElementById('button0');
//     var buttondel = document.getElementById('delete');
//     var buttonspa = document.getElementById('space');

//     var keypad = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

//     var number = document.getElementById('number');

//     keypad.forEach(function (key, idx) {
//         key.addEventListener('click', function () {
//             console.log(Number(keypad[idx].value));
//             number.value += Number(keypad[idx].value);
//         });
//     });

// };













// ES6 version
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');
const option6 = document.getElementById('option6');

const opbut1 = document.getElementById('opbut1');
const opbut2 = document.getElementById('opbut2');
const opbut3 = document.getElementById('opbut3');
const opbut4 = document.getElementById('opbut4');
const opbut5 = document.getElementById('opbut5');
const opbut6 = document.getElementById('opbut6');

let attempt = 0;
let attempt1 = 0;

const cancel = document.getElementById('cancel');
const clear = document.getElementById('clear');
const enter = document.getElementById('enter');

const content = document.getElementById('content');

const card = document.getElementById('card');
const receiptpaper = document.getElementById('receiptpaper');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');

const posAmount = [
    {
        Name: 'Avi Cohen',
        cardNumber: 1111222233334444,
        pin: 1234,
        checking: 1000,
        savings: 1000,
    },
    {
        Name: 'Avidor Schwartzman',
        cardNumber: 5555666677778888,
        pin: 5678,
        checking: 1200,
        savings: 1000,
    },
    {
        Name: 'Saar Lilu Schwartman',
        cardNumber: 4580000011118888,
        pin: 9012,
        checking: 1500,
        savings: 1000,
    },
    {
        Name: 'Keren Flash',
        cardNumber: 3333999966664444,
        pin: 4321,
        checking: 950,
        savings: 1000,
    },
];

const randomNum = Math.floor(Math.random() * 5);

let cust = posAmount[randomNum];

card.addEventListener('click', () => welcome());


const welcome = () => {
    console.log(`${cust.Name}, ${cust.pin}`);

    const image = document.getElementById('image');

    card.style.animationName = 'example';

    function reload() {
        location.reload();
    }




    content.innerHTML = `<form><h2>WELCOME, ${cust.Name}<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">`;
    keypad();

    enter.onclick = checkPin;
    clear.onclick = welcome;
    cancel.onclick = reload;
};

const checkPin = () => {
    console.log(number.value, cust.pin);
    if (Number(number.value) !== Number(cust.pin)) {
        content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';

        attempt++;

        if (attempt === 3) {
            card.style.display = 'none';
            content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
            setTimeout(reload, 4000);
        } else {
            setTimeout(welcome, 2200);
        }
    } else {
        mainPage();
    }
};

const checkBalance = () => {
    content.innerHTML = '<form><h2>WOULD YOU LIKE TO KNOW YOUR BALANCE FOR CHECKING OR SAVINGS?</h2>';

    option1.textContent = 'Checking';
    option2.textContent = 'Savings';
    option3.textContent = 'Exit';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    opbut1.onclick = function () {
        content.innerHTML = '<h6>YOUR CURRENT BALANCE FOR CHECKING IS NIS' + Number(cust.checking).toFixed(2) + '</h6>'
    }; opbut2.onclick = function () {
        content.innerHTML = '<h6>YOUR CURRENT BALANCE FOR SAVINGS IS NIS' + Number(cust.savings).toFixed(2) + '</h6>'
    }; opbut3.onclick = mainPage;

};
// This function navigates the user to the main page where they can select from various options
function mainPage() {
    content.innerHTML = '<h2>TO PROCEED, SELECT FROM THE OPTIONS BELOW.</h2>'

    option1.textContent = '(D)Deposit';
    option2.textContent = '(W)Withdrawl';
    option3.textContent = '(C)Check Balance';
    option4.textContent = '(P)Change PIN';
    option5.textContent = '(R)Print Recepit';
    option6.textContent = '(Q)Quit';

    opbut1.onclick = deposit;
    opbut2.onclick = withdraw;
    opbut3.onclick = checkBalance;
    opbut4.onclick = changePin;
    opbut5.onclick = checkBalance;
    opbut6.onclick = exit; // exit
};
// This function allows the user to deposit funds into their account
function deposit() {
    content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO DEPOSIT IN?'

    option1.textContent = 'Checkings';
    option2.textContent = 'Savings';
    option3.textContent = 'Exit';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function () {
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR CHECKING?</h2><input id="number" type=number max="9999">'
        keypad();
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        enter.onclick = function () {
            var checking = Number(cust.checking) + Number(number.value)

            cust.checking = checking

            content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.checking).toFixed(2) + '</h2>'

            setTimeout(mainPage, 2200);
        }
    };

    opbut2.onclick = function () {
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();

        enter.onclick = function () {
            var savings = Number(cust.savings) + Number(number.value)

            cust.savings = savings

            content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.savings).toFixed(2) + '</h2>'

            setTimeout(mainPage, 2200);
        }
    };

    opbut3.onclick = mainPage;

};
// This function allows the user to withdraw funds from their account
function withdraw() {
    content.innerHTML = '<h2>WHICH ACCOUNT WOULD YOU LIKE TO WITHDRAW FROM?</h2>'

    option1.textContent = 'CHECKING';
    option2.textContent = 'SAVINGS';
    option3.textContent = 'EXIT';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function () {
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR CHECKING?</h2><input id="number" type=number max="9999">'

        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();

        enter.onclick = function () {
            var checking = Number(cust.checking) - Number(number.value)

            if (checking <= 0) {
                content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

                setTimeout(mainPage, 2000);
            } else {

                cust.checking = checking

                content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.checking).toFixed(2) + '</h2>'

                setTimeout(mainPage, 2200);
            };
        };
    };

    opbut2.onclick = function () {
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO WITHDRAW FROM YOUR SAVINGS?</h2><input id="number" type=number max="9999">'

        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();

        enter.onclick = function () {
            var savings = Number(cust.savings) - Number(number.value)

            if (savings <= 0) {
                content.innerHTML = '<h2>INSUFFICIENT FUNDS</h2>';

                setTimeout(mainPage, 2000);
            } else {

                cust.savings = savings

                content.innerHTML = '<h2>YOUR NEW BALANCE FOR CHECKING IS NIS' + Number(cust.savings).toFixed(2) + '</h2>'

                setTimeout(mainPage, 2200);

            };
        };
    };

};

// This function allows the user to change their account PIN
function changePin() {
    content.innerHTML = '<form><h2>ENTER YOUR CURRENT PIN</h2><input id="number" type=number max="9999">'

    keypad();

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    enter.onclick = function () {
        if (Number(number.value) !== Number(cust.pin)) {
            content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
            attempt1++

            if (attempt1 == 3) {
                card.style.display = 'none';
                content.innerHTML = '<h2>THEFT ATTEMPTED. CARD IS DISCARDED.</h2>';
                setTimeout(reload, 4000);
            } else {
                setTimeout(changePin, 2200);
            }

        } else {
            content.innerHTML = '<h2>NOW, ENTER YOUR NEW PIN</h2><input id="number" type=number max="9999">';

            keypad();


            var nnumber = document.getElementById('number')



            enter.onclick = function () {

                cust.pin = nnumber.value
                content.innerHTML = '<h2>YOUR NEW PIN NUMBER IS ' + cust.pin + '.<h2>';

                setTimeout(mainPage, 2200);

            }

            cancel.onclick = mainPage;
            opbut6.onclick = mainPage;

        }

    }
};



// This function allows the user to exit the system and print a receipt
function exit() {
    content.innerHTML = '<form><h2>To Quit<br> click on "yes" and then the Exit button.Click on "No" to go back </h2> <input type="radio" id="answer1" name="answer" value="yes" /><p class=word1>YES</p> <input type="radio" class="input1" name="answer" value="no" /><p class=words><p class=word2>NO</p></form>';

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';


    enter.onclick = function () {

        if (answer1 == true) {
            content.innerHTML = '<h2>PLEASE TAKE YOUR CARD AND RECEIPT</h2>'
        
            receiptpaper.innerHTML = '<h3 class="rcph">ATM <br>' + cust.Name + '</h3><br> <p class="rcp">YOUR CURRENT BALANCE FOR CHECKING: NIS' + cust.checking.toFixed(2) + '<br> YOUR CURRENT BALANCE FOR SAVINGS: NIS' + cust.savings.toFixed(2) + '<br></p> <h3 class="rcph">THANK YOU!<h3>'
        
            receiptpaper.style.animationName = 'example1';
        
            card.style.animationFillMode = 'backwards';
        } else {
            mainPage();
        }
        
    };

}
function quit() {
    content.innerHTML = '<h2>ARE YOU SURE YOU WANT TO QUIT?</h2><br><button id="yes">YES</button> <button id="no">NO</button>';

    document.getElementById('yes').onclick = function () {
        ejectCardAndRestart();
    };

    document.getElementById('no').onclick = function () {
        mainPage();
    };
}

function ejectCardAndRestart() {
    // Animate card coming out
    card.style.animationName = 'ejectCard';
    card.style.animationFillMode = 'forwards';

    // Set a delay to restart the system after the card comes out
    setTimeout(function () {
        card.style.animationName = '';
        card.style.animationFillMode = '';
        welcome(); // Go back to the welcome screen
    }, 2000); // Adjust the delay duration (in milliseconds) according to your animation
}


// This function sets up the keypad for user input
function keypad() {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    var button5 = document.getElementById('button5');
    var button6 = document.getElementById('button6');
    var button7 = document.getElementById('button7');
    var button8 = document.getElementById('button8');
    var button9 = document.getElementById('button9');
    var button0 = document.getElementById('button0');
    var buttondel = document.getElementById('delete');
    var buttonspa = document.getElementById('space');

    var keypad = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

    var number = document.getElementById('number');

    keypad.forEach(function (key, idx) {
        key.addEventListener('click', function () {
            console.log(Number(keypad[idx].value));
            number.value += Number(keypad[idx].value);
        });
    });

};

