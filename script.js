let q = [{
    question:"1.How many letters are there in the English alphabet?",
    op_1:"25",
    op_2:"26",
    op_3:"30",
    op_4:"28",
    correct:"26"
},{
    question:"2.Rainbow consist of how many colours?",
    op_1:"1",
    op_2:"2",
    op_3:"5",
    op_4:"7",
    correct:"7"
},{
    question:"3.Which animal is known as the \'Ship of the Desert\'?",
    op_1:"Camel",
    op_2:"Horse",
    op_3:"Dog",
    op_4:"Cat",
    correct:"Camel"
},{
    question:"4.How many days are there in a year?",
    op_1:"325",
    op_2:"326",
    op_3:"365",
    op_4:"366",
    correct:"365"
}];

let currentQuestionIndex = 0;
let click_ans;
let result = 0;

document.getElementById('main-section').classList.toggle('hidden');
function load_data() {
    let currentQuestion = q[currentQuestionIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("op-1").innerHTML = currentQuestion.op_1;
    document.getElementById("op-2").innerHTML = currentQuestion.op_2;
    document.getElementById("op-3").innerHTML = currentQuestion.op_3;
    document.getElementById("op-4").innerHTML = currentQuestion.op_4;
    document.getElementById("op-1").addEventListener("click", function(event) {
        check_ans(event.target.id, currentQuestion.correct);
    });
    document.getElementById("op-2").addEventListener("click", function(event) {
        check_ans(event.target.id, currentQuestion.correct);
    });
    document.getElementById("op-3").addEventListener("click", function(event) {
        check_ans(event.target.id, currentQuestion.correct);
    });
    document.getElementById("op-4").addEventListener("click", function(event) {
        check_ans(event.target.id, currentQuestion.correct);
    });

}

function next(){
    currentQuestionIndex++;
    let btn = document.querySelectorAll(".button");
    for(let i = 0; i<btn.length;i++) {
        btn[i].disabled = false;
        btn[i].style.backgroundColor = '';
    };
    if(currentQuestionIndex == 4){
        document.getElementById('main-section').classList.toggle('hidden');
        document.getElementById('score-board').classList.toggle('hidden');
        scoreCalculator();
    }
    load_data();
}
function check_ans(id,correct) {
    let value = (document.getElementById(id).innerHTML == correct);
    if(value == true){
        document.getElementById(id).style.backgroundColor = "green";
        let btn = document.querySelectorAll('.button');
        result +=1;
        for (let i = 0; i<btn.length; i++) {
            btn[i].disabled = true;
        };
    }
    else{
        document.getElementById(id).style.backgroundColor = "red";
        let correct_green;
        let btn = document.querySelectorAll('.button');
        for (let i = 0; i<btn.length; i++) {
            btn[i].disabled = true;
            if(btn[i].innerHTML == correct){
                correct_green = i;
            };
        };
        document.getElementById('op-'+(correct_green+1)).style.backgroundColor = 'green';
    }

}

function scoreCalculator() {
    document.getElementById("score").innerHTML += (result + "/4");
}
function reset() {
    location.reload();
}

load_data()