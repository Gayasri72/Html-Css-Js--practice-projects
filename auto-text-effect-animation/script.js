const containerEl= document.querySelector('.container');
const careers=['Web developer','Student','Lover'];
let careerIndex=0;
let characterIndex=0;

updateText();

function updateText(){
    containerEl.innerHTML=`<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++;
    if(characterIndex>careers[careerIndex].length){
        characterIndex=0;
        careerIndex++;
        if(careerIndex>=careers.length){
            careerIndex=0;
        }
    }
    setTimeout(updateText,400);
}
