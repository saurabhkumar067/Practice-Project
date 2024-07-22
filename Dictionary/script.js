const input = document.getElementById("inputText");
const searchBtn = document.getElementById("searchBtn");
const display = document.getElementById("display");

searchBtn.addEventListener("click", () => {
//   console.log(input.value);
  getApi();
});
input.addEventListener('keydown',(e)=> {
    if(e.key == 'Enter'){
        const word = input.value.trim();
        // if(word){
        //     getApi(word)
        // }
        word ? getApi(word) : null;
    }
})

async function getApi() {
  let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let meaning = data[0].meanings;
      let defin = meaning[0].definitions[0].definition;
    //   console.log(defin);
      display.textContent = defin;
      //   console.log(data[0].meanings[0].definitions[0].definition);
    })
    .catch((error) => {
      alert("Error fetching the definition");
    });
}
// getApi();
