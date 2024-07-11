function hideElementById(elementId){
    // step-1: hide the home screen 
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add("hidden");
}
function showElementById (elementId){
        // step-2: show the playground section 
        const playGround = document.getElementById(elementId);
        playGround.classList.remove('hidden');
}



function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value ;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}