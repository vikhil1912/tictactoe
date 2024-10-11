var choice = 'x';var gameOver=false;
var btn = document.querySelectorAll(".b");
var error_audio = new Audio("./error.wav");
var onclick_audio = new Audio("./onclick.wav");
for(let i=0;i<9;i++){
    btn[i].addEventListener("click",function myclick(){
        if(this.innerText != '' || gameOver){
            error_audio.play();
        }
        else{
            onclick_audio.play();
            this.innerText=choice;
            var t = choice;
            choice = toggle(choice);
            if(check_win()){
                var win_audio = new Audio("./win.wav");
                win_audio.play();gameOver = true;
                document.querySelector(".info").innerText=t+" WON";
            }
            else if(check_tie()){
                var tie_audio = new Audio("./win.wav"); // we need to change
                tie_audio.play();gameOver = true;
                document.querySelector(".info").innerText="Tie";
            }
            else{document.querySelector(".info").innerText="Turn for "+choice;}
        }
    });
}
function toggle(choice){
    if(choice=='x')return 'o';
    else return 'x';
}
function check_win(){
    var box = document.querySelectorAll('.b');
    var wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let e of wins){
        if((box[e[0]].innerText!='') && (box[e[1]].innerText!='') && (box[e[2]].innerText!='') && (box[e[0]].innerText==box[e[1]].innerText)  && (box[e[1]].innerText==box[e[2]].innerText)){
            return true;
        }
    }
    return false;
}
function check_tie(){
    var box = document.querySelectorAll('.b');
    for(let e of box){
        if(e.innerText === '')return false;
    }
    return true;
}
document.querySelector(".reset-btn").addEventListener("click",function(){
    var box =document.querySelectorAll(".b");
    for(let e of box){
        e.innerText='';
    }
    choice = 'x';
    document.querySelector(".info").innerText="Turn for "+choice;
    gameOver=false;
});