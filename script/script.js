const showSentence = document.getElementById('showSentence');
const typingGround = document.getElementById('textarea');
const btn = document.getElementById('btn');
const score = document.getElementById('score');
const showTime = document.getElementById('showTime'); 
const homeSection = document.getElementById("home-section");
const typingTestSection = document.getElementById("typingTestSection");

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "All that glitters is not gold.",
   "She sells seashells by the seashore.",
   "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
   "In the end, we will remember not the words of our enemies, but the silence of our friends.",
   "The rain in Spain stays mainly in the plain.",
   "I think, therefore I am.",
   "A picture is worth a thousand words."

]


const start = () =>{
    homeSection.classList.add('hidden');
    typingTestSection.classList.remove('hidden');
}



// step-6

const errorChecking = (words)  => {
    // console.log(words);

    let num = 0;
    let sentencesToWrite = showSentence.innerHTML;
    sentencesWrite = sentencesToWrite.trim().split(" ");

    for( let i = 0; i< words.length; i++){
        if(words[i] === sentencesWrite[i]){
            num ++
        }
    }
    return num;
}


// step-5
const calculateTypingSpeed = () => {
    let totalWords = typingGround.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ");

    actualWords = errorChecking(actualWords);


    if(actualWords !== 0) {
        let typingSpeed = (actualWords / totalTime) * 60;
        typingSpeed = Math.round(typingSpeed);
        score.innerHTML = `Your typing speed is ${typingSpeed} words per minutes & you wrote ${actualWords} correct words out of ${sentencesWrite.length} and time taken ${totalTime}sec`;
    }
    else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${totalTime} sec`;
    }
}


// step-7 

let intervalId,elapsedTime = 0;

const showTimer = () =>{
    if(btn.innerText ==="Done"){
        intervalId = setInterval(()=> {
            elapsedTime ++;
            showTime.innerHTML = elapsedTime;
        },1000)
    }
    else if(btn.innerText ==="Start"){
        elapsedTime = "";
        clearInterval(intervalId);
        showTime.innerHTML = "";
    }
}

// step-3 
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    // console.log(randomNumber);
    showSentence.innerHTML =sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
    score.innerHTML = "";

    showTimer();  
}

// step-4

const endTyping = () => {
     btn.innerText = "Start";
     showTimer();  

    let date = new Date();
    endTime = date.getTime();

    totalTime = (endTime - startTime) / 1000;
    // console.log(totalTime)

    calculateTypingSpeed(totalTime);
    
    showSentence.innerHTML = "";
    typingGround.value = "";
    
}

// step-2 
btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()){
        case "start":
            typingGround.removeAttribute('disabled')
            showTime.removeAttribute('hidden')
            startTyping();
            
            break;

        case "done":
            typingGround.setAttribute('disabled', true);
            showTime.setAttribute('hidden',true)
            endTyping();
            break;
    }
})






