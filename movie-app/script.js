const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d26504f804c18f12e68370f7ced91b2";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/"

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    const main = document.querySelector("main");

    respData.results.forEach((movie) => {
        const {poster_path, title, vote_average} = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img 
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>`;

            main.appendChild(movieEl);
    });

    return respData;
    console.log(respData);

}

getMovies();