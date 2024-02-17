function play(){
    // step-1: hide the home screen 
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add("hidden");
    // step-2: show the playground section 
    const playGround = document.getElementById("play-ground");
    playGround.classList.remove('hidden');
}

function getARandomAlphabet (){
    alphabets = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const randomNumber = Math.random()*25;
    const indexNumber = Math.round(randomNumber);

    const alphabet =alphabets[indexNumber];
    console.log('your rendom alphabet:',alphabet) ;

    const currentElement = document.getElementById('current-element');
    currentElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function handelKeybordButtonPress(event){
    const playerPressed = event.key ;
    console.log("player pressed:",playerPressed);

    // get the expected to spess 
    const currentAlphabetElement = document.getElementById('current-element');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check match or not 
    if(playerPressed == expectedAlphabet){
        const currentScoreId = document.getElementById('current-score');
        const currentScoreValue = currentScoreId.innerText;
        const currentScore = parseInt(currentScoreValue);
        console.log(currentScore);

        const newScore = currentScore + 1;
        currentScoreId.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet );
        play();
        getARandomAlphabet();
        setBackgroundColorById();


    }
    else{
        console.log('you lost a poient');
    }
}
document.addEventListener('keyup',handelKeybordButtonPress);
