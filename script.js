console.log("hello");






function computerSelection(){
   
   let a =  Math.floor(Math.random()*3);
    if (a==0){
        a= 'paper';
    }
    if (a==1){
        a= 'rock';
    }
    if(a==2){
        a='scissors';

    }

    return  a;
   
}

//input of thhe user for the rock paper scissor game
function playerSelection(){
    let x = window.prompt('enter your Selection', 0);
    x = x.toLowerCase()

    if (x !='rock' && x!= 'scissors' && x!= 'paper') {
        document.writeln("not a valid choice");
        
    }
        else if(x=='rock') {
            document.writeln("you chose rock");
            return 'rock';
        }
        else if(x=='scissors'){
            document.writeln('you choose scissors');
            return 'scissors';
}
        else{
            document.writeln('you choose paper');
            return 'paper';
            

        }

    
    
}

  //creates a paragraph element in the div
let matchResultp = document.createElement("p");
matchResultp.style.color = 'whitesmoke';
matchResultp.setAttribute("id", "pogy");
let appendStreak = document.getElementById('streakappendhere')
//creating counter for our streak and w/l

let wins = 0;
let losses= 0; 
let streak= 0; 

//single instance of the game

function jankenpon(userc)
{
    let userchoice = userc; 
    let computerchoice = computerSelection();
    let result; 
    //doing the calucation based of multiple if statements. 
    if(userc =='rock' && computerchoice =='scissors' 
    || userc =='paper' && computerchoice =='rock'
    || userc == 'scissors' && computerchoice =='paper'){
       result = ('You win! Your' + '\xa0' + userc + '\xa0' + 'won against ' + computerchoice);
       console.log(result)
                 //attaches that text node to our new p element
                wins +=1;
                streak+=1;
    } else if(userc == computerchoice){
        result = ('You Tied');

    } else{
        result = ('You Lose! Your' + '\xa0' + userc + '\xa0' + 'lost against ' + computerchoice);
        losses+=1
        streak = 0;
    }




   //checks below if there is pogy and if pogy exists remove  currently exsiting pogy
    if(document.body.contains(document.getElementById('pogy'))){
        console.log('pogy Exists, remove mathresulttchild');
        matchResultp.innerHTML=" ";
        appendStreak.innerHTML= " ";
    } else{
        console.log('pogy doesnt exist');
    
    }
        
        //creates a text node with userc in ti in it
        let matchResultt= document.createTextNode(result);
     matchResultp.appendChild(matchResultt);
         //identifies an element to put the new element 
         var element = document.getElementById("appendhere");
            //appends that NEW PARAHRAPH ELEMENT to a existing element 
            element.appendChild(matchResultp); 
            //thisinterestsme.com/check-element-exists-javascript

            //win lose caalculation
            let ratio = (wins/losses);
            if(ratio==NaN||ratio==Infinity){
                ratio=0;
            }
            ratio = (ratio*100)/100;
            ratio = Math.round(ratio*100)/100;
                        //create a streak element counter and winrate:
            let streakresult = document.createTextNode("Your Current Streak is " + streak + " With A Win/Lose Ratio of " + ratio );
          
            appendStreak.appendChild(streakresult);
            console.log(computerchoice);
}

    




//choice
let btns = document.querySelector('#scissors');
let btnp =  document.querySelector('#paper');
let btnr = document.querySelector('#rock');

btns.addEventListener('click', function(e){
    e.preventDefault();
    jankenpon(btns.value);
    console.log(btns.value);
});

btnp.addEventListener('click', function(e){
    e.preventDefault();
    jankenpon(btnp.value);
    console.log(btnp.value);
});

btnr.addEventListener('click', function(e){
    e.preventDefault();
    jankenpon(btnr.value);
    console.log(btnr.value);
});




//user input example
 //playerSelection();
//jankenpon();

for(i=0;i<=2;i++){
console.log(computerSelection());
}

