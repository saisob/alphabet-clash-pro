function play(){
    // step-1: hide the home screen 
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add("hidden");
    // step-2: show the playground section 
    const playGround = document.getElementById("play-ground");
    playGround.classList.remove('hidden');

    hideElementById('final-score');
    document.addEventListener('keyup',handelKeybordButtonPress);
}



function getARandomAlphabet (){
    alphabets = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const randomNumber = Math.random()*25;
    const indexNumber = Math.round(randomNumber);

    const alphabet = alphabets[indexNumber];
    // console.log('your rendom alphabet:',alphabet) ;

    const currentElement = document.getElementById('current-element');
    currentElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function handelKeybordButtonPress(event){
    const playerPressed = event.key ;
    // console.log("player pressed:",playerPressed);

    // get the expected to spess 
    const currentAlphabetElement = document.getElementById('current-element');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    // check match or not 
    if(playerPressed == expectedAlphabet){
        const currentScoreId = document.getElementById('current-score');
        const currentScoreValue = currentScoreId.innerText;
        const currentScore = parseInt(currentScoreValue);
        // console.log(currentScore);

        // incress the score by 1 
        const newScore = currentScore + 1;
        // set the update score 
        currentScoreId.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet );
        play();
        getARandomAlphabet();
        setBackgroundColorById();


    }
    else{
        console.log('you lost a poient');
        // 1 : get the current element number 
        const currentLifeId = document.getElementById("current-life");
        const currentLifeValue = currentLifeId.innerText;
        const currentLife = parseInt(currentLifeValue);
        // console.log(currentLife)

        // 2 : reduce the score by 1 
        const newLife = currentLife - 1 ;
        // 3 : set the update score
        currentLifeId.innerText = newLife; 

        if( newLife === 0){
            gameOver();
        }
    }
}
// document.addEventListener('keyup',handelKeybordButtonPress);


function gameOver (){
    hideElementById("play-ground");
    showElementById('final-score');
    setElementValueById("current-life", 5);

    const lastScore = getTextElementValueById("current-score");
    console.log(lastScore);
    setElementValueById("last-score",lastScore);

    setElementValueById("current-score",0);
    
    const exAlphabet = getElementTextById("current-element");
    removeBackgroundColorById(exAlphabet);
    

}
