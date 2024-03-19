let k = prompt("Press 0 to End the game\n Press `Any` number to Play ");

if(k==0){
    console.log("Game Ended...");
    console.log("Your scored 0");
}

else if(k!=0){
    let score = 0;
    while(true){
        let gameNum = Math.floor(Math.random()*100)+1;
        console.log("Prompt ",gameNum," to Score in the game ");
        let num = prompt("Guess a number between 1 and 100");
        if(num==0){
            
            console.log("You Scored ",score,"\nGame Ended :{");
            break;
        }
        else if(num==gameNum){
            alert("You guessed it right\nPress `Enter` to continue");
            ++score;
            console.log("Score ",score);
            
        }
        else{
            console.log("Score ",score);
            alert("Oops :{\nGuess again...\nor press 0 to quit in next mini-window")
            
        }
        
    }
}

