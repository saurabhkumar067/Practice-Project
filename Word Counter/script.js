function getWordCounter(str){
    let splited = str.trim().split(/\s+/);
    if(splited.length === 1 && splited[0] === ''){
        return 0;
    }
    return splited.length;
}
function counter(str){
    let charCount = 0;
    let alphaCount = 0;
    let numbCount = 0;

    for(let i=0; i<str.length; i++){
        if(str[i] !== '' && str !== '\n'){
            charCount++;
        }
        if((str[i]>='a' && str[i]<='z') || (str[i]>'A' && str[i]<='Z')){
            alphaCount++
        }else if(str[i]>='0' && str[i]<='9'){
            numbCount++
        }
    }
    
    document.getElementById('char').innerText = charCount;
    document.getElementById('alpha').innerText = alphaCount;
    document.getElementById('numb').innerText = numbCount;
    
}

function getWord(){
    let textarea = document.getElementById('inputBox').value;
    let word = document.getElementById('word').innerHTML = getWordCounter(textarea);
    counter(textarea)
}


document.getElementById('inputBox').addEventListener('input',()=>{
    getWord();
})