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
matchResultp.setAttribute("id", "pogy");

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
              
    } else if(userc == computerchoice){
        result = ('You Tied ');

    } else{
        result = ('You Lose! Your' + '\xa0' + userc + '\xa0' + 'lost against ' + computerchoice);

    }




   //checks below if there is pogy and if pogy exists remove  currently exsiting pogy
    if(document.body.contains(document.getElementById('pogy'))){
        console.log('pogy Exists, remove mathresulttchild');
        matchResultp.innerHTML=" ";
    } else{
        console.log('pogy doesnt exist');
    
    }
        
        //creates a text node with userc in ti in it
        let matchResultt= document.createTextNode(result);
     matchResultp.appendChild(matchResultt);
         //identifies an element to put the new element 
         var element = document.getElementById("userchoice");
            //appends that NEW PARAHRAPH ELEMENT to a existing element 
            element.appendChild(matchResultp); 
            //thisinterestsme.com/check-element-exists-javascript

            console.log(computerchoice);
}

    




//choice
let btns = document.querySelector('#scissors');
let btnp =  document.querySelector('#paper');
let btnr = document.querySelector('#rock');

btns.addEventListener('click', function(){
    jankenpon(btns.value);
    console.log(btns.value);
});

btnp.addEventListener('click', function(){
    jankenpon(btnp.value);
    console.log(btnp.value);
});

btnr.addEventListener('click', function(){
    jankenpon(btnr.value);
    console.log(btnr.value);
});




//user input example
 //playerSelection();
//jankenpon();

for(i=0;i<=2;i++){
console.log(computerSelection());
}

