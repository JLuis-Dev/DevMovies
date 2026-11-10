
import { useEffect, useState } from 'react';
import PosterGrid from '../../components/PosterGrid';
import { getPopularSeries, getTopSeries } from '../../services/getData';

function Series() {
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [topSeriesPage, setTopSeriesPage] = useState(1);
    const [popularSeriesPage, setPopularSeriesPage] = useState(1);
    const [loadingTopSeries, setLoadingTopSeries] = useState(false);
    const [loadingPopularSeries, setLoadingPopularSeries] = useState(false);

    useEffect(() => {
        Promise.all([getTopSeries(), getPopularSeries()])
            .then(([topRated, popular]) => {
                setTopSeries(topRated);
                setPopularSeries(popular);
            })
            .catch((error) => {
                console.error('Erro ao buscar as séries:', error);
            });
    }, []);

    async function loadMoreTopSeries() {
        const nextPage = topSeriesPage + 1;
        setLoadingTopSeries(true);

        try {
            const series = await getTopSeries(nextPage);
            setTopSeries((currentSeries) => [...currentSeries, ...series]);
            setTopSeriesPage(nextPage);
        } catch (error) {
            console.error('Erro ao carregar mais séries do top:', error);
        } finally {
            setLoadingTopSeries(false);
        }
    }

    async function loadMorePopularSeries() {
        const nextPage = popularSeriesPage + 1;
        setLoadingPopularSeries(true);

        try {
            const series = await getPopularSeries(nextPage);
            setPopularSeries((currentSeries) => [...currentSeries, ...series]);
            setPopularSeriesPage(nextPage);
        } catch (error) {
            console.error('Erro ao carregar mais séries populares:', error);
        } finally {
            setLoadingPopularSeries(false);
        }
    }

    return (
        <>
            {topSeries && (
                <PosterGrid
                    info={topSeries}
                    title="Top Séries"
                    onLoadMore={loadMoreTopSeries}
                    isLoadingMore={loadingTopSeries}
                    withHeaderSpacing
                />
            )}
            {popularSeries && (
                <PosterGrid
                    info={popularSeries}
                    title="Séries mais assistidas"
                    onLoadMore={loadMorePopularSeries}
                    isLoadingMore={loadingPopularSeries}
                />
            )}
        </>
    );
}

export default Series;