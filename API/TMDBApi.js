const API_TOKEN = "6119724a03940a849ef49ec64b6af51f"

export function getFilmsFromApiWithSearchedText(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageByApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
