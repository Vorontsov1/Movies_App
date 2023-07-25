const API_KEY: string = '0d1e20f1e4ba2c80a2cf79512480b926';


export const Base_Image_Path = { size: string, path: string } => { 
    return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const NowPlayingMovies: string = `
https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;


export const UpcomingMovies: string = `
https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;


export const PopularMovies: string = `
https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const TopRatedMovies: string = `
https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;


export const SearchMovies = { keyword: string } => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`;
}

export const movieDetails = (id: number) => { 
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

};

export const movieCastDetails = (id: number) => { 
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

};
