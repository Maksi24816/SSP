const Start = document.querySelector(".Start");
const Hub = document.querySelector(".Hub");

const Box_Final = document.querySelector(".Box-Final");
const Start_Hub = document.querySelector(".Start_Hub");
const Text_Final = document.getElementById("Text_Final");

const You = document.getElementById('You');
const Win_Loss_Box = document.querySelector('.Win_Draw_Loss');
const Bot = document.getElementById('Bot');

const Home_Win = document.getElementById('Win');
const Home_Draw = document.getElementById('Draw');
const Home_Loss = document.getElementById('Loss');

const S_Raund = document.querySelector(".S_Raund")

let Win_Numder = 0;
let Draw_Numder = 0;
let Loss_Numder = 0;

let Raund = 0;

let You_Number;
let Bot_Number;

let P1 = 0,P2 = 0,P3 = 0,P4 = 0,P5 = 0,P6 = 0,P7 = 0,P8 = 0,P9 = 0,P10 = 0;

let STONE_Rah = 0;let SCISSORS_Rah = 0;let PAPER_Rah = 0;

let Widpovid = 0;
function Start_Function() {
    Win_Numder = 0;Draw_Numder = 0;Loss_Numder = 0;Raund = 0;    
    P1 = 0,P2 = 0,P3 = 0,P4 = 0,P5 = 0,P6 = 0,P7 = 0,P8 = 0,P9 = 0,P10 = 0;
    STONE_Rah = 0;SCISSORS_Rah = 0;PAPER_Rah = 0;
    Hub.style.display = "none";
    You.innerHTML = " " ,Bot.innerHTML = " " ,Win_Loss_Box.innerHTML = " " ,Home_Win.innerHTML = 0 ,Home_Draw.innerHTML = 0 ,Home_Loss.innerHTML = 0, S_Raund.innerHTML = "Раунд " + 0;;
};
function Raund_Function () {
    S_Raund.innerHTML = "Раунд " + Raund;
}
function STONE () {
    You.innerHTML = "Камінь";You_Number = 1;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Rah ();
    Logica1 ();
    Win_Draw_Loss ();
    Leave ();
} 
function SCISSORS () {
    You.innerHTML = "Ножиці";You_Number = 2;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Rah ();
    Logica1 ();
    Win_Draw_Loss ();
    Leave ();
}
function PAPER () {
    You.innerHTML = "Папір";You_Number = 3;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Rah ();
    Logica1 ();
    Win_Draw_Loss ();
    Leave ();
}
function Ot_Do () {
    P10 = P9;
    P9 = P8;
    P8 = P7;
    P7 = P6;
    P6 = P5;
    P5 = P4;
    P4 = P3;
    P3 = P2;
    P2 = P1;
    P1 = You_Number;
}
function Rah () {
    STONE_Rah = 0;SCISSORS_Rah = 0;PAPER_Rah = 0;
    if (P10 == 1){STONE_Rah++} else if (P10 == 2){SCISSORS_Rah++} else if (P10 == 3){PAPER_Rah++};
    if (P9 == 1){STONE_Rah++} else if (P9 == 2){SCISSORS_Rah++} else if (P9 == 3){PAPER_Rah++};
    if (P8 == 1){STONE_Rah++} else if (P8 == 2){SCISSORS_Rah++} else if (P8 == 3){PAPER_Rah++};
    if (P7 == 1){STONE_Rah++} else if (P7 == 2){SCISSORS_Rah++} else if (P7 == 3){PAPER_Rah++};
    if (P6 == 1){STONE_Rah++} else if (P6 == 2){SCISSORS_Rah++} else if (P6 == 3){PAPER_Rah++};
    if (P5 == 1){STONE_Rah++} else if (P5 == 2){SCISSORS_Rah++} else if (P5 == 3){PAPER_Rah++};
    if (P4 == 1){STONE_Rah++} else if (P4 == 2){SCISSORS_Rah++} else if (P4 == 3){PAPER_Rah++};
    if (P3 == 1){STONE_Rah++} else if (P3 == 2){SCISSORS_Rah++} else if (P3 == 3){PAPER_Rah++};
    if (P2 == 1){STONE_Rah++} else if (P2 == 2){SCISSORS_Rah++} else if (P2 == 3){PAPER_Rah++};
    if (P1 == 1){STONE_Rah++} else if (P1 == 2){SCISSORS_Rah++} else if (P1 == 3){PAPER_Rah++};
}
function Random () {
    let R = Math.random() * 3;
    R = Math.ceil(R);
    if (R == 1) {
        Bot.innerHTML = "Камінь";
    } else if (R == 2) {
        Bot.innerHTML = "Ножиці";
    } else if (R == 3) {
        Bot.innerHTML = "Папір";
    };
    Bot_Number = R;
}


function Win_Draw_Loss () {
    if (You_Number == 1 && Bot_Number == 1){Draw()}else if(You_Number == 1 && Bot_Number == 2){Win()}else if(You_Number == 1 && Bot_Number == 3){Loss()}
    else if(You_Number == 2 && Bot_Number == 1){Loss()}else if(You_Number == 2 && Bot_Number == 2){Draw()}else if(You_Number == 2 && Bot_Number == 3){Win()}
    else if(You_Number == 3 && Bot_Number == 1){Win()}else if(You_Number == 3 && Bot_Number == 2){Loss()}else if(You_Number == 3 && Bot_Number == 3){Draw()}
}

function Win () {
    Win_Loss_Box.innerHTML = "Перемога";
    Win_Numder++;
    Home_Win.innerHTML = Win_Numder;
}
function Draw () {
    Win_Loss_Box.innerHTML = "Нічія";
    Draw_Numder++;
    Home_Draw.innerHTML = Draw_Numder;
}
function Loss () {
    Win_Loss_Box.innerHTML = "Програш";
    Loss_Numder++;
    Home_Loss.innerHTML = Loss_Numder;
}

function Proverka () {

    if (STONE_Rah > SCISSORS_Rah && STONE_Rah > PAPER_Rah) {
        Widpovid = 1;
    };

    if (SCISSORS_Rah > STONE_Rah && SCISSORS_Rah > PAPER_Rah) {
        Widpovid = 2;
    };

    if (PAPER_Rah > SCISSORS_Rah && PAPER_Rah > STONE_Rah) {
        Widpovid = 3;
    };
}

function Logica1 () {
    if (Raund <= 10) {
        return
    } else {
        Proverka ();
        if (Widpovid == 1) {
            Bot.innerHTML = "Камінь";
            Bot_Number = 3;
        } else if (Widpovid == 2) {
            Bot.innerHTML = "Ножиці";
            Bot_Number = 1;
        } else if (Widpovid == 3) {
            Bot.innerHTML = "Папір";
            Bot_Number = 2;  
        };
    }
}

function Leave () {
if (Raund > 75) {
    if (Win_Numder > Draw_Numder && Win_Numder > Loss_Numder) {
        Text_Final.innerHTML = "Перемога";
    } else if (Draw_Numder > Win_Numder && Draw_Numder > Loss_Numder) {
        if (Win_Numder > Loss_Numder) {
            Text_Final.innerHTML = "Перемога";
        } else {
            Text_Final.innerHTML = "Програш";
        };
    } else if (Loss_Numder > Draw_Numder && Loss_Numder > Win_Numder) {
        Text_Final.innerHTML = "Програш";
    } else {
        Text_Final.innerHTML = "Нічія";
    };

    Box_Final.style.display = "inherit";
}};

function Menu_Reset () {
    Hub.style.display = "inherit";
    Box_Final.style.display = "none";
};