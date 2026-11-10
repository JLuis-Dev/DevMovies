import api from './api';

export async function getMovies() {
    const {
        data: { results }
    } = await api.get('/movie/popular');

    return results[0];
}

export async function getPopularMovies(page = 1) {
    const {
        data: { results }
    } = await api.get('/movie/popular', { params: { page } });

    return results;
}

export async function getTopMovies(page = 1) {
    const {
        data: { results }
    } = await api.get('/movie/top_rated', { params: { page } });

    return results;
}

export async function getTopSeries(page = 1) {
    const {
        data: { results }
    } = await api.get('/tv/top_rated', { params: { page } });

    return results;
}

export async function getPopularSeries(page = 1) {
    const {
        data: { results }
    } = await api.get('/tv/popular', { params: { page } });

    return results;
}

export async function getPersonPopular() {
    const {
        data: { results }
    } = await api.get('/person/popular');

    return results;
}


export async function getMovieVideos(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`);

    return results;
}

export async function getMovieCredits(movieId) {
    const { data: cast } = await api.get(`/movie/${movieId}/credits`);

    return cast;
}

export async function getMovieSimilar(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`);

    return results;
}
export async function getMovieById(movieId) {
    const {data} = await api.get(`/movie/${movieId}`);

    return data;
}
