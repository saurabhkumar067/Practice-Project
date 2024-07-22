let movieTitle = document.getElementById("inputBox");
let container = document.querySelector(".container");
let nextContainer = document.querySelector(".next-container");
let img = document.querySelectorAll(".box-container img");
let para = document.querySelectorAll(".box-container p");

let banner = document.querySelector(".next-container #banner");
let movieName = document.querySelector(".next-container .movie-text .m-name p");
let runTime_Rating = document.querySelectorAll(
  ".next-container .movie-text .m-duration p"
);
let releaseDate = document.querySelectorAll(
  ".next-container .movie-text .dates p"
);
let textPlot = document.querySelectorAll(
  ".next-container .movie-text .text-content p"
);
let genReText = document.querySelectorAll(
  ".next-container .movie-text .m-conspect p"
);
let ul = document.querySelector("ul");

let forward = document.getElementById("forward");

// let cre = document.createElement('p');

movieTitle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && movieTitle.value.trim() !== "") {
    movieAPi();
    // movieTitle.value = "";
  }
});

function movieAPi() {
  const apiKey = "d44bfea";
  const url = fetch(
    `http://www.omdbapi.com/?t=${encodeURIComponent(
      movieTitle.value
    )}&apikey=${apiKey}`
  );

  url
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      if (data.Response === "False") {
        alert("Not found!");
      } else {
        container.classList.toggle("display");
        nextContainer.classList.toggle("display");
        if (nextContainer.classList !== "display") {
          banner.src = data.Poster;
          movieName.innerHTML = data.Title;
          runTime_Rating[0].innerHTML = `${data.Runtime}utes`;
          runTime_Rating[1].innerHTML = `${data.imdbRating} (IMDb)`;
          releaseDate[1].innerHTML = data.Released;
          textPlot[1].innerHTML = data.Plot;
console.log(data.Genre)
          let genRe = data.Genre;
          let splited = genRe.split(" ");
          for (let i = 0; i < splited.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = splited[i];
            ul.appendChild(li);
          }
        }
        movieTitle.value = '';
      }
    });
}

function ImageName() {
  img[0].src =
    "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg";
  para[0].innerHTML = "The Dark Knight";

  img[1].src =
    "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg";
  para[1].innerHTML = "Money Heist";

  img[2].src =
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg";
  para[2].innerHTML = "Interstellar";

  img[3].src =
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg";
  para[3].innerHTML = "The Godfather";

  img[4].src =
    "https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
  para[4].innerHTML = "The Aviator";

  img[5].src =
    "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg";
  para[5].innerHTML = "Top Gun: Maverick";
}
ImageName();

forward.addEventListener("click", () => {
  container.classList.toggle("display");
  nextContainer.classList.toggle("display");
    let li = document.querySelectorAll('li')
    li.forEach(e=>{
        e.remove()
    })
});
