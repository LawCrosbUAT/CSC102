function playCraps(){
    //playCraps handles the rolling of die, math, and returning of results
    var die1 = Math.ceil(Math.random()*6);
    var die2 = Math.ceil(Math.random()*6);
    
    var sum = die1+die2
    //Returning info on die1
    document.getElementById("die1Dis").innerHTML = die1;

    //Returning info on die2
    document.getElementById("die2Dis").innerHTML = die2;

    //Returning info on sum
    document.getElementById("sumDis").innerHTML = sum;

    //Returning info on result
    if (sum == 7 || sum == 11)
    { 
        document.getElementById("resultDis").innerHTML = "CRAPS - You lose";
    }
    else if (die1 == die2 && die1%2 == 0)
    {
        document.getElementById("resultDis").innerHTML = "DOUBLES - You win";
    }     
    else
    {
        document.getElementById("resultDis").innerHTML = "DRAW - You neither won nor lost. Please play again.";
    }
}