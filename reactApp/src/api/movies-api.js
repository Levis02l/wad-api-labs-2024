export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=07810031a3fd12224e25987cc0b2985e&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };