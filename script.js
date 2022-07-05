const API_KEY = "5966f05c23f7fc85cd2ef29195982a09";
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";

let button = document.querySelector("#search");
let input = document.querySelector("#search-input");
let section = document.querySelector(`.movie-list`);

const renderList = (movies) => {
  movies.map((currentMovie) => {
    let movieName = currentMovie.title;
    console.log(movieName);
    let movieImage = currentMovie.poster_path;
    let movieTitle = document.createElement("h1");
    let movieImage2 = document.createElement("img");
    movieTitle.innerText = `${movieName}`;
    movieImage2.setAttribute("src", `${IMAGE_BASE_PATH}${movieImage}`);

    section.appendChild(movieTitle);
    section.appendChild(movieImage2);
  });
};
button.addEventListener("click", async () => {
  let movieChoice = input.value;
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieChoice}]&api_key=${API_KEY}`
  );
  console.log(response);

  let movieOptions = response.data.results;

  renderList(movieOptions);
  console.log(movieOptions);
});
