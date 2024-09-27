const start_btn = document.getElementById('start_btn');
const sc_btn = document.getElementById('scissors_btn');
const r_btn = document.getElementById('rock_btn');
const p_btn = document.getElementById('paper_btn');
const next_btn = document.getElementById('next_btn');
const main_btn = document.getElementById('main_btn');
var user_result = 3, com_result = 3;
var user_score = 0, com_score = 0;

window.onload = function(){
    $("#game, #winner, #loser").hide();
    $('#next_btn, #main_btn').hide();
}


start_btn.addEventListener('click', function() {
    $("#main").hide();
    $("#game").show();
    setScore();
    startGame();
});

sc_btn.addEventListener('click', function(e) {
    $('#user_result').attr('src', './img/scissors.png');
    e => e.stopPropagation();
    user_result = 0;
});

r_btn.addEventListener('click', function(e) {
    $('#user_result').attr('src', './img/rock.png');
    e => e.stopPropagation();
    user_result = 1;
});

p_btn.addEventListener('click', function(e) {
    $('#user_result').attr('src', './img/paper.png');
    e => e.stopPropagation();
    user_result = 2;
});

next_btn.addEventListener('click', function() {
    reStartGame();
    startGame();
});

main_btn.addEventListener('click', function() {
    location.reload();
});



function setScore(){
    $('#user_score').text(user_score);
    $('#com_score').text(com_score);
}


function startGame(){
    $('#scissors_btn, #rock_btn, #paper_btn').show();
    $('#next_btn').hide();

    com_result = Math.floor(Math.random() * 3);

    setTimeout(function(){
        $('#timer_1').text('● ');
    }, 1000);
    setTimeout(function(){
        $('#timer_2').text('● ');
    }, 2000);
    setTimeout(function(){
        $('#timer_3').text('●');
    }, 3000);
    
    setTimeout(function(){
        $('#com_result').css('animation','none');

        if(com_result == 0){
            $('#com_result').attr('src', './img/scissors.png');  
        }else if(com_result == 1){
            $('#com_result').attr('src', './img/rock.png');
        }else if(com_result == 2){
            $('#com_result').attr('src', './img/paper.png');
        }
    }, 4000);


    setTimeout(function(){
        if(user_result == com_result){
        }else if((user_result==0 && com_result==2) || (user_result==1 && com_result==0) || (user_result==2 && com_result==1)){
            user_score = user_score + 1;
        }else{
            com_score = com_score + 1;
        }

        setScore();

        if(user_score==3){
            winner();

        }else if(com_score==3){
            loser();

        }else{
            $('#scissors_btn, #rock_btn, #paper_btn').hide();
            $('#next_btn').show();
        }
    }, 5000);
}


function reStartGame(){
    user_result = 3;
    $('#timer_1, #timer_2, #timer_3').text('○ ');
    $('#user_result, #com_result').attr('src', './img/question.png');
    $('#com_result').css('animation', 'boing 1s infinite');
    $('#com_result').css('animation-direction', 'alternate');
}

function winner(){
    $('#timer_wrap, #user_result, #com_result').hide();
    $('#scissors_btn, #rock_btn, #paper_btn').hide();
    $('#winner, #main_btn').show();
}

function loser(){
    $('#timer_wrap, #user_result, #com_result').hide();
    $('#scissors_btn, #rock_btn, #paper_btn').hide();
    $('#loser, #main_btn').show();
}
