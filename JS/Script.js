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

const LvL0 = document.getElementById('LvL1');
const LvL1 = document.getElementById('LvL2');
const LvL2 = document.getElementById('LvL3');

const S_Raund = document.querySelector(".S_Raund")

let Win_Numder = 0;
let Draw_Numder = 0;
let Loss_Numder = 0;

let Raund = 0;

let You_Number;
let Bot_Number;

let Win_Act = false, Draw_Act = false, Loss_Act = false;
let Win_Act2 = false, Draw_Act2 = false, Loss_Act2 = false;

let P1 = 0,P2 = 0,P3 = 0,P4 = 0,P5 = 0,P6 = 0,P7 = 0,P8 = 0,P9 = 0,P10 = 0;
let Win1 = 0,Win2 = 0,Win3 = 0,Win4 = 0,Win5 = 0;
let Draw1 = 0,Draw2 = 0,Draw3 = 0,Draw4 = 0,Draw5 = 0;
let Loss1 = 0,Loss2 = 0,Loss3 = 0,Loss4 = 0,Loss5 = 0;

let You_diya_Win,You_diya_Draw,You_diya_Loss;

let STONE_Rah = 0;let SCISSORS_Rah = 0;let PAPER_Rah = 0;
let Win_Rah_P = 0,Win_Rah_D = 0,Win_Rah_M = 0;
let Draw_Rah_P = 0,Draw_Rah_D = 0,Draw_Rah_M = 0;
let Loss_Rah_P = 0,Loss_Rah_D = 0,Loss_Rah_M = 0;

let LVL0, LVL1, LVL2;

let Widpovid = 0;

function Color_Lvl (LVL) {
    if (LVL == 1) {
        LvL0.classList.add('Green_Act');
        LvL1.classList.remove('Green_Act');
        LvL2.classList.remove('Green_Act');
    } else if (LVL == 2) {
        LvL0.classList.remove('Green_Act');
        LvL1.classList.add('Green_Act');
        LvL2.classList.remove('Green_Act');
    } else if (LVL == 3) {
        LvL0.classList.remove('Green_Act');
        LvL1.classList.remove('Green_Act');
        LvL2.classList.add('Green_Act');
    };
};

function Start_Function() {
    if (LvL0.classList.contains('Green_Act')) {
        LVL0 = 1;LVL1 = 0;LVL2 = 0;
    } else if (LvL1.classList.contains('Green_Act')) {
        LVL0 = 1;LVL1 = 1;LVL2 = 0;
    } else if (LvL2.classList.contains('Green_Act')) {
        LVL0 = 1;LVL1 = 1;LVL2 = 1;
    };
    Win_Numder = 0;Draw_Numder = 0;Loss_Numder = 0;Raund = 0;    
    P1 = 0,P2 = 0,P3 = 0,P4 = 0,P5 = 0,P6 = 0,P7 = 0,P8 = 0,P9 = 0,P10 = 0;
    STONE_Rah = 0;SCISSORS_Rah = 0;PAPER_Rah = 0;
    Hub.style.display = "none";
    You.innerHTML = " " ,Bot.innerHTML = " " ,Win_Loss_Box.innerHTML = " " ,Home_Win.innerHTML = 0 ,Home_Draw.innerHTML = 0 ,Home_Loss.innerHTML = 0, S_Raund.innerHTML = "Раунд " + 0;;
};
function Raund_Function () {
    S_Raund.innerHTML = "Раунд " + Raund;
};
function STONE () {
    You.innerHTML = "Камінь";You_Number = 1;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Diya_Win_Draw_Loss ();
    Rah ();
    Rah_Win_P_D_M ();
    Rah_Draw_P_D_M ();
    Rah_Loss_P_D_M ();
    Logica1 ();
    Logica2 ();
    Win_Draw_Loss ();
    Leave ();
};
function SCISSORS () {
    You.innerHTML = "Ножиці";You_Number = 2;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Diya_Win_Draw_Loss ();
    Rah ();
    Rah_Win_P_D_M ();
    Rah_Draw_P_D_M ();
    Rah_Loss_P_D_M ();
    Logica1 ();
    Logica2 ();
    Win_Draw_Loss ();
    Leave ();
};
function PAPER () {
    You.innerHTML = "Папір";You_Number = 3;
    Ot_Do ();
    Random ();
    Raund++
    Raund_Function();
    Diya_Win_Draw_Loss ();
    Rah ();
    Rah_Win_P_D_M ();
    Rah_Draw_P_D_M ();
    Rah_Loss_P_D_M ();
    Logica1 ();
    Logica2 ();
    Win_Draw_Loss ();
    Leave ();
};
function Win () {
    Win_Loss_Box.innerHTML = "Перемога";
    Win_Numder++;
    Home_Win.innerHTML = Win_Numder;
    Win_Act = true;
    Win_Act2 = true;
};
function Draw () {
    Win_Loss_Box.innerHTML = "Нічія";
    Draw_Numder++;
    Home_Draw.innerHTML = Draw_Numder;
    Draw_Act = true;
    Draw_Act2 = true;
}
function Loss () {
    Win_Loss_Box.innerHTML = "Програш";
    Loss_Numder++;
    Home_Loss.innerHTML = Loss_Numder;
    Loss_Act = true;
    Loss_Act2 = true;
};
function Diya_Win_Draw_Loss () {
    if (Win_Act == true) {
        if (P2 == 1 && P1 == 1) {
            You_diya_Win = "D";
        } else if (P2 == 1 && P1 == 2) {
            You_diya_Win = "P";
        } else if (P2 == 1 && P1 == 3) {
            You_diya_Win = "M";
        };
        if (P2 == 2 && P1 == 1) {
            You_diya_Win = "M";
        } else if (P2 == 2 && P1 == 2) {
            You_diya_Win = "D";
        } else if (P2 == 2 && P1 == 3) {
            You_diya_Win = "P";
        };
        if (P2 == 3 && P1 == 1) {
            You_diya_Win = "P";
        } else if (P2 == 3 && P1 == 2) {
            You_diya_Win = "M";
        } else if (P2 == 3 && P1 == 3) {
            You_diya_Win = "D";
        };
        Win_Act = false;
        Ot_Do_Win ();
    } else if (Draw_Act == true) {
        if (P2 == 1 && P1 == 1) {
            You_diya_Draw = "D";
        } else if (P2 == 1 && P1 == 2) {
            You_diya_Draw = "P";
        } else if (P2 == 1 && P1 == 3) {
            You_diya_Draw = "M";
        };
        if (P2 == 2 && P1 == 1) {
            You_diya_Draw = "M";
        } else if (P2 == 2 && P1 == 2) {
            You_diya_Draw = "D";
        } else if (P2 == 2 && P1 == 3) {
            You_diya_Draw = "P";
        };
        if (P2 == 3 && P1 == 1) {
            You_diya_Draw = "P";
        } else if (P2 == 3 && P1 == 2) {
            You_diya_Draw = "M";
        } else if (P2 == 3 && P1 == 3) {
            You_diya_Draw = "D";
        };
        Draw_Act = false;
        Ot_Do_Draw ();
    } else if (Loss_Act == true) {
        if (P2 == 1 && P1 == 1) {
            You_diya_Loss = "D";
        } else if (P2 == 1 && P1 == 2) {
            You_diya_Loss = "P";
        } else if (P2 == 1 && P1 == 3) {
            You_diya_Loss = "M";
        };
        if (P2 == 2 && P1 == 1) {
            You_diya_Loss = "M";
        } else if (P2 == 2 && P1 == 2) {
            You_diya_Loss = "D";
        } else if (P2 == 2 && P1 == 3) {
            You_diya_Loss = "P";
        };
        if (P2 == 3 && P1 == 1) {
            You_diya_Loss = "P";
        } else if (P2 == 3 && P1 == 2) {
            You_diya_Loss = "M";
        } else if (P2 == 3 && P1 == 3) {
            You_diya_Loss = "D";
        };
        Loss_Act = false;
        Ot_Do_Loss ();
    };
};
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
};
function Ot_Do_Win () {
    Win5 = Win4;
    Win4 = Win3;
    Win3 = Win2;
    Win2 = Win1;
    Win1 = You_diya_Win;
};
function Ot_Do_Draw () {
    Draw5 = Draw4;
    Draw4 = Draw3;
    Draw3 = Draw2;
    Draw2 = Draw1;
    Draw1 = You_diya_Draw;
};
function Ot_Do_Loss () {
    Loss5 = Loss4;
    Loss4 = Loss3;
    Loss3 = Loss2;
    Loss2 = Loss1;
    Loss1 = You_diya_Loss;
};
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
};
function Rah_Win_P_D_M () {
    Win_Rah_P = 0,Win_Rah_D = 0,Win_Rah_M = 0;
    if (Win5 == "P"){Win_Rah_P++} else if (Win5 == "D"){Win_Rah_D++} else if (Win5 == "M"){Win_Rah_M++};
    if (Win4 == "P"){Win_Rah_P++} else if (Win4 == "D"){Win_Rah_D++} else if (Win4 == "M"){Win_Rah_M++};
    if (Win3 == "P"){Win_Rah_P++} else if (Win3 == "D"){Win_Rah_D++} else if (Win3 == "M"){Win_Rah_M++};
    if (Win2 == "P"){Win_Rah_P++} else if (Win2 == "D"){Win_Rah_D++} else if (Win2 == "M"){Win_Rah_M++};
    if (Win1 == "P"){Win_Rah_P++} else if (Win1 == "D"){Win_Rah_D++} else if (Win1 == "M"){Win_Rah_M++};
    console.log(Win_Rah_P +" "+ Win_Rah_D +" "+ Win_Rah_M );
};
function Rah_Draw_P_D_M () {
    Draw_Rah_P = 0,Draw_Rah_D = 0,Draw_Rah_M = 0;
    if (Draw5 == "P"){Draw_Rah_P++} else if (Draw5 == "D"){Draw_Rah_D++} else if (Draw5 == "M"){Draw_Rah_M++};
    if (Draw4 == "P"){Draw_Rah_P++} else if (Draw4 == "D"){Draw_Rah_D++} else if (Draw4 == "M"){Draw_Rah_M++};
    if (Draw3 == "P"){Draw_Rah_P++} else if (Draw3 == "D"){Draw_Rah_D++} else if (Draw3 == "M"){Draw_Rah_M++};
    if (Draw2 == "P"){Draw_Rah_P++} else if (Draw2 == "D"){Draw_Rah_D++} else if (Draw2 == "M"){Draw_Rah_M++};
    if (Draw1 == "P"){Draw_Rah_P++} else if (Draw1 == "D"){Draw_Rah_D++} else if (Draw1 == "M"){Draw_Rah_M++};
    console.log(Draw_Rah_P +" "+ Draw_Rah_D +" "+ Draw_Rah_M );
};
function Rah_Loss_P_D_M () {
    Loss_Rah_P = 0,Loss_Rah_D = 0,Loss_Rah_M = 0;
    if (Loss5 == "P"){Loss_Rah_P++} else if (Loss5 == "D"){Loss_Rah_D++} else if (Loss5 == "M"){Loss_Rah_M++};
    if (Loss4 == "P"){Loss_Rah_P++} else if (Loss4 == "D"){Loss_Rah_D++} else if (Loss4 == "M"){Loss_Rah_M++};
    if (Loss3 == "P"){Loss_Rah_P++} else if (Loss3 == "D"){Loss_Rah_D++} else if (Loss3 == "M"){Loss_Rah_M++};
    if (Loss2 == "P"){Loss_Rah_P++} else if (Loss2 == "D"){Loss_Rah_D++} else if (Loss2 == "M"){Loss_Rah_M++};
    if (Loss1 == "P"){Loss_Rah_P++} else if (Loss1 == "D"){Loss_Rah_D++} else if (Loss1 == "M"){Loss_Rah_M++};
    console.log(Loss_Rah_P +" "+ Loss_Rah_D +" "+ Loss_Rah_M );
};
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
};
function Win_Draw_Loss () {
    if (You_Number == 1 && Bot_Number == 1){Draw()}else if(You_Number == 1 && Bot_Number == 2){Win()}else if(You_Number == 1 && Bot_Number == 3){Loss()}
    else if(You_Number == 2 && Bot_Number == 1){Loss()}else if(You_Number == 2 && Bot_Number == 2){Draw()}else if(You_Number == 2 && Bot_Number == 3){Win()}
    else if(You_Number == 3 && Bot_Number == 1){Win()}else if(You_Number == 3 && Bot_Number == 2){Loss()}else if(You_Number == 3 && Bot_Number == 3){Draw()}
};
function Logica1 () {
    if (Raund <= 10 || LVL1 == 0) {
        return
    } else {
        if (STONE_Rah > SCISSORS_Rah && STONE_Rah > PAPER_Rah) {
            Widpovid = 1;
        }else if(SCISSORS_Rah > STONE_Rah && SCISSORS_Rah > PAPER_Rah) {
            Widpovid = 2;
        }else if(PAPER_Rah > SCISSORS_Rah && PAPER_Rah > STONE_Rah) {
            Widpovid = 3;
        }else if (STONE_Rah==SCISSORS_Rah) {
            Widpovid = 2;
        }else if (SCISSORS_Rah==PAPER_Rah) {
            Widpovid = 3;
        }else if (PAPER_Rah==STONE_Rah) {
            Widpovid = 1;
        } else {
            Widpovid = 3;
        };
        if (Widpovid == 1) {
            Bot.innerHTML = "Папір";
            Bot_Number = 3;
        } else if (Widpovid == 2) {
            Bot.innerHTML = "Камінь";
            Bot_Number = 1;
        } else if (Widpovid == 3) {
            Bot.innerHTML = "Ножиці";
            Bot_Number = 2;  
        };
    }
};

function Logica2 () {
    if (LVL2 == 1) {
        if (Win5 !== 0 && Win_Act2 == true) {
            Win_Act2 = false;
            if (Win_Rah_P > Win_Rah_D && Win_Rah_P > Win_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 1;
                } else if (P2 == 2) {
                    Widpovid = 2;
                }else if (P2 == 3) {
                    Widpovid = 3;
                };
            }else if(Win_Rah_D > Win_Rah_P && Win_Rah_D > Win_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 3;
                } else if (P2 == 2) {
                    Widpovid = 1;
                }else if (P2 == 3) {
                    Widpovid = 2;
                };
            }else if(Win_Rah_M > Win_Rah_P && Win_Rah_M > Win_Rah_D) {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            }else if (Win_Rah_P==Win_Rah_D) {
                if (P2 == 1) {
                    Widpovid = 1;
                } else if (P2 == 2) {
                    Widpovid = 2;
                }else if (P2 == 3) {
                    Widpovid = 3;
                };
            }else if (Win_Rah_D==Win_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 3;
                } else if (P2 == 2) {
                    Widpovid = 1;
                }else if (P2 == 3) {
                    Widpovid = 2;
                };
            }else if (Win_Rah_M==Win_Rah_P) {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            } else {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            };
            if (Widpovid == 1) {
                Bot.innerHTML = "Камінь";
                console.log ("Камінь");
                Bot_Number = 1;
            } else if (Widpovid == 2) {
                Bot.innerHTML = "Ножиці";
                console.log ("Ножиці");
                Bot_Number = 2;
            } else if (Widpovid == 3) {
                Bot.innerHTML = "Папір";
                console.log ("Папір");
                Bot_Number = 3;  
            };
        };
        if (Draw5 !== 0 && Draw_Act2 == true) {
            Draw_Act2 = false;
            if (Draw_Rah_P > Draw_Rah_D && Draw_Rah_P > Draw_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 1;
                } else if (P2 == 2) {
                    Widpovid = 2;
                }else if (P2 == 3) {
                    Widpovid = 3;
                };
            }else if(Draw_Rah_D > Draw_Rah_P && Draw_Rah_D > Draw_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 3;
                } else if (P2 == 2) {
                    Widpovid = 1;
                }else if (P2 == 3) {
                    Widpovid = 2;
                };
            }else if(Draw_Rah_M > Draw_Rah_P && Draw_Rah_M > Draw_Rah_D) {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            }else if (Draw_Rah_P==Draw_Rah_D) {
                if (P2 == 1) {
                    Widpovid = 1;
                } else if (P2 == 2) {
                    Widpovid = 2;
                }else if (P2 == 3) {
                    Widpovid = 3;
                };
            }else if (Draw_Rah_D==Draw_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 3;
                } else if (P2 == 2) {
                    Widpovid = 1;
                }else if (P2 == 3) {
                    Widpovid = 2;
                };
            }else if (Draw_Rah_M==Draw_Rah_P) {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            } else {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            };
            if (Widpovid == 1) {
                Bot.innerHTML = "Камінь";
                console.log ("Камінь");
                Bot_Number = 1;
            } else if (Widpovid == 2) {
                Bot.innerHTML = "Ножиці";
                console.log ("Ножиці");
                Bot_Number = 2;
            } else if (Widpovid == 3) {
                Bot.innerHTML = "Папір";
                console.log ("Папір");
                Bot_Number = 3;  
            };
        };
        if (Loss5 !== 0 && Loss_Act2 == true) {
            Loss_Act2 = false;
            if (Loss_Rah_P > Loss_Rah_D && Loss_Rah_P > Loss_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 1;
                } else if (P2 == 2) {
                    Widpovid = 2;
                }else if (P2 == 3) {
                    Widpovid = 3;
                };
            }else if(Loss_Rah_D > Loss_Rah_P && Loss_Rah_D > Loss_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 3;
                } else if (P2 == 2) {
                    Widpovid = 1;
                }else if (P2 == 3) {
                    Widpovid = 2;
                };
            }else if(Loss_Rah_M > Loss_Rah_P && Loss_Rah_M > Loss_Rah_D) {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            }else if (Loss_Rah_P==Loss_Rah_D) {
                if (P2 == 1) {
                    Widpovid = 1;
                } else if (P2 == 2) {
                    Widpovid = 2;
                }else if (P2 == 3) {
                    Widpovid = 3;
                };
            }else if (Loss_Rah_D==Loss_Rah_M) {
                if (P2 == 1) {
                    Widpovid = 3;
                } else if (P2 == 2) {
                    Widpovid = 1;
                }else if (P2 == 3) {
                    Widpovid = 2;
                };
            }else if (Loss_Rah_M==Loss_Rah_P) {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            } else {
                if (P2 == 1) {
                    Widpovid = 2;
                } else if (P2 == 2) {
                    Widpovid = 3;
                }else if (P2 == 3) {
                    Widpovid = 1;
                };
            };
            if (Widpovid == 1) {
                Bot.innerHTML = "Камінь";
                console.log ("Камінь");
                Bot_Number = 1;
            } else if (Widpovid == 2) {
                Bot.innerHTML = "Ножиці";
                console.log ("Ножиці");
                Bot_Number = 2;
            } else if (Widpovid == 3) {
                Bot.innerHTML = "Папір";
                console.log ("Папір");
                Bot_Number = 3;  
            };
        };
    };
}; 

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