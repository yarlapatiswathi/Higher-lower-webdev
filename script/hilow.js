function user_input()
{
    //document.getElementById('guess_form').reset();
    let valid_input = false;
    let input,num_inp;
    while(!valid_input) {
        input = window.prompt("Enter a maximum number(>1) for Number Guessing Game: ");
        num_inp = Math.round(Number(input));
        if(num_inp != NaN && num_inp > 1) {
            num_inp=num_inp;
            valid_input = true;
        }
    }
    document.getElementById("limit").innerHTML = `Guess the number between 1 and ${num_inp}`;
    document.getElementById("usr_guess").setAttribute("max",num_inp);
    return num_inp;
}

let limit,random_num,arr=[];
function reset1()
{
    limit = user_input();
    random_num = Math.floor(Math.random()*limit)+1;
    console.log(random_num);
    document.getElementById("usr_guess").value = '';
    document.getElementById("usr_guess").disabled = false;
    document.getElementById("myBtn").disabled = false;
    message.innerHTML='';
    message1.innerHTML='';
    document.getElementById("usr_guess").focus();
    arr=[];
}

window.onload = function() {
    reset1();
    document.getElementById("usr_guess").focus();
    message.innerHTML='';
    message1.innerHTML='';
  }
//document.getElementById("usr_guess").focus();


function compare_usr_guess(){
    let usr_guess = Number(document.getElementById("usr_guess").value);
    if (isNaN(usr_guess)){
        message.innerHTML = "<span style='color:#FFFAF0'>That is not a number!</span>";
        document.getElementById("usr_guess").value = '';
    }else if(usr_guess <=0 || usr_guess > limit)
        {
            message.innerHTML = "<span style='color:#FFFAF0'>That number is not in range, try again.</span>";
            document.getElementById("usr_guess").value = '';
            //document.getElementById("usr_guess").focus();
        }
        else if (usr_guess == random_num)
            {
                document.getElementById("usr_guess").value = '';
                array(usr_guess);
                message.innerHTML = `<span style='color: #FFFAF0'>You got it! It took you ${arr.length} tries and your guesses were ${arr}.</span>`;
                message1.innerHTML = `<span style='color: #FFFAF0'>Click on Restart to play again.</span>`;
                document.getElementById("usr_guess").disabled = true;
                document.getElementById("myBtn").disabled = true;
                //document.getElementById("guess_form").reset();
                arr=[];
            }
        else if (usr_guess > random_num)
            {
                message.innerHTML = "<span style='color:#FFFAF0'>No, Try a lower number!</span>";
                document.getElementById("usr_guess").value = '';
                array(usr_guess);
            }
        else if (usr_guess < random_num)
            {
                message.innerHTML = "<span style='color:#FFFAF0'>No, Try a higher number!</span>";
                document.getElementById("usr_guess").value = '';
                //document.getElementById("usr_guess").focus();
                array(usr_guess);
            }
    }

function array(usr_guess){
    if (!arr.includes(usr_guess)){
        arr.push(usr_guess);
    }
    else{
        message.innerHTML = "<span style='color:#FFFAF0'>You already guessed it !</span>";
    }
}



