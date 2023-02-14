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

let Raund = 0

let You_Number;
let Bot_Number;

let P1 = 0,P2 = 0,P3 = 0,P4 = 0,P5 = 0,P6 = 0,P7 = 0,P8 = 0,P9 = 0,P10 = 0;

let STONE_Rah = 0;let SCISSORS_Rah = 0;let PAPER_Rah = 0;

let Widpovid = 0;
function Raund_Function () {
    S_Raund.innerHTML = "Raund " + Raund;
}
function STONE () {
    You.innerHTML = "1";You_Number = 1;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Rah ();
    Logica1 ();
    Win_Draw_Loss ();
} 
function SCISSORS () {
    You.innerHTML = "2";You_Number = 2;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Rah ();
    Logica1 ();
    Win_Draw_Loss ();
}
function PAPER () {
    You.innerHTML = "3";You_Number = 3;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Rah ();
    Logica1 ();
    Win_Draw_Loss ();
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
    console.log(STONE_Rah);
    console.log(SCISSORS_Rah);
    console.log(PAPER_Rah);
}
function Random () {
    let R = Math.random() * 3;
    R = Math.ceil(R);
    Bot.innerHTML = R;
    Bot_Number = R;
}

function Win_Draw_Loss () {
    if (You_Number == 1 && Bot_Number == 1){Draw()}else if(You_Number == 1 && Bot_Number == 2){Win()}else if(You_Number == 1 && Bot_Number == 3){Loss()}
    else if(You_Number == 2 && Bot_Number == 1){Loss()}else if(You_Number == 2 && Bot_Number == 2){Draw()}else if(You_Number == 2 && Bot_Number == 3){Win()}
    else if(You_Number == 3 && Bot_Number == 1){Win()}else if(You_Number == 3 && Bot_Number == 2){Loss()}else if(You_Number == 3 && Bot_Number == 3){Draw()}
}

function Win () {
    Win_Loss_Box.innerHTML = "Win";
    Win_Numder++;
    Home_Win.innerHTML = Win_Numder;
}
function Draw () {
    Win_Loss_Box.innerHTML = "Draw";
    Draw_Numder++;
    Home_Draw.innerHTML = Draw_Numder;
}
function Loss () {
    Win_Loss_Box.innerHTML = "Loss";
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
            Bot.innerHTML = 3;
            Bot_Number = 3;
        } else if (Widpovid == 2) {
            Bot.innerHTML = 1;
            Bot_Number = 1;
        } else if (Widpovid == 3) {
            Bot.innerHTML = 2;
            Bot_Number = 2;
        };
    }
}