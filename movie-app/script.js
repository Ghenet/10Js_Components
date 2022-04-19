const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d26504f804c18f12e68370f7ced91b2";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/"

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);
}

console.log(getMovies());