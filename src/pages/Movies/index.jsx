
import { useEffect, useState } from 'react';
import PosterGrid from '../../components/PosterGrid';
import { getPopularMovies, getTopMovies } from '../../services/getData';

function Movies() {
    const [topMovies, setTopMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [topMoviesPage, setTopMoviesPage] = useState(1);
    const [popularMoviesPage, setPopularMoviesPage] = useState(1);
    const [loadingTopMovies, setLoadingTopMovies] = useState(false);
    const [loadingPopularMovies, setLoadingPopularMovies] = useState(false);

    useEffect(() => {
        Promise.all([getTopMovies(), getPopularMovies()])
            .then(([topRated, popular]) => {
                setTopMovies(topRated);
                setPopularMovies(popular);
            })
            .catch((error) => {
                console.error('Erro ao buscar os filmes:', error);
            });
    }, []);

    async function loadMoreTopMovies() {
        const nextPage = topMoviesPage + 1;
        setLoadingTopMovies(true);

        try {
            const movies = await getTopMovies(nextPage);
            setTopMovies((currentMovies) => [...currentMovies, ...movies]);
            setTopMoviesPage(nextPage);
        } catch (error) {
            console.error('Erro ao carregar mais filmes do top:', error);
        } finally {
            setLoadingTopMovies(false);
        }
    }

    async function loadMorePopularMovies() {
        const nextPage = popularMoviesPage + 1;
        setLoadingPopularMovies(true);

        try {
            const movies = await getPopularMovies(nextPage);
            setPopularMovies((currentMovies) => [...currentMovies, ...movies]);
            setPopularMoviesPage(nextPage);
        } catch (error) {
            console.error('Erro ao carregar mais filmes populares:', error);
        } finally {
            setLoadingPopularMovies(false);
        }
    }

    return (
        <>
            {topMovies && (
                <PosterGrid
                    info={topMovies}
                    title="Top Filmes"
                    onLoadMore={loadMoreTopMovies}
                    isLoadingMore={loadingTopMovies}
                    withHeaderSpacing
                />
            )}
            {popularMovies && (
                <PosterGrid
                    info={popularMovies}
                    title="Filmes mais assistidos"
                    onLoadMore={loadMorePopularMovies}
                    isLoadingMore={loadingPopularMovies}
                />
            )}
        </>
    );
}

export default Movies;