let txt = document.getElementById("inputBox");
document.getElementsByName("format-option").forEach(function (e, index) {
  e.addEventListener("click", () => {
    formatText(index);
  });
});

function formatText(index){
    if(txt.value == ''){
        document.getElementsByName('format-option')[index].checkded = false;
    } else{
        switch(index){
            case 0: txt.value = txt.value.toUpperCase();break;
            case 1: txt.value = txt.value.toLowerCase();break;
            case 2: txt.value = capitalizeSentence(txt.value); break;
            case 3: txt.value = capitalizeWord(txt.value); break;
            case 4: txt.value = removeNumber(txt.value); break;
            case 5: txt.value = removePunctuation(txt.value); break;
        }
    }
}

function capitalizeSentence(str){
    let space = removeExtraSpace(str);
    let splited = space.split('. ');
    for(let i=0; i<splited.length; i++){
        splited[i] = splited[i][0].toUpperCase() + splited[i].slice(1)
    }
    splited = splited.join('. ');
    return splited
}
function capitalizeWord(str){
    let space = removeExtraSpace(str);
    let splited = space.split(' ');
    for(let i=0; i<splited.length; i++){
        splited[i] = splited[i][0].toUpperCase() + splited[i].slice(1)
    }
    splited = splited.join(' ');
    return splited
}

function removePunctuation(str) {
  let regex = /[!"#$%&'()*+-./:;<=>?![\]^_`{|}~]/g;
  return str.replace(regex, "");
}
function removeNumber(str) {
  return str.replace(/[0-9]/g, "");
}

function removeExtraSpace(str){
    return str.replace(/\s+/g, ' ').trim()
}



