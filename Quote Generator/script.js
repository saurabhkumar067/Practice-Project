function generateText() {
  let quotes = {
    "- Michael Jordan":
      "I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed.",
    "- Wrma Bombeck":
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    "Jim Rohn": "Either you run the day, or the day runs you.",
    "- Will Rogers": "Don't Let Yesterday Take Up Too Much Of Today.",
  };

  let author = Object.keys(quotes);
  let quote = author[Math.floor(Math.random() * author.length)];
  let authors = quotes[quote];

  document.querySelector(".text").innerHTML = authors;
  document.querySelector(".writerName").innerHTML = quote;
}
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  generateText();
});
