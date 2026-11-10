import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getPersonPopular  } from '../../services/getData';
import { getImages } from '../../utils/getImages';
import { Background, Info, Poster, Conteiner, ConteinerButtons } from './styles';
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

function Home() {


    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [personPopular, setPersonPopular] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        // async function getAllData() {
            
        //     console.time('time')
        //     setMovie(await getMovies())
        //     setTopMovies(await getTopMovies())
        //     setTopSeries(await getTopSeries())
        //     setPopularSeries(await getPopularSeries())
        //     setPersonPopular(await getPersonPopular())
        //     console.timeEnd('time')
        // }

        // getAllData();

        async function getAllData() {
            
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPersonPopular()
            ]).then(([movie, topMovies, topSeries, popularSeries, personPopular]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setPersonPopular(personPopular)
            })
            .catch((error)=> {
                console.error("Erro ao buscar os dados do filme:", error);
            })
        }

        getAllData();
    }, [])




    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)} >
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}

                    <Conteiner>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>

                            <ConteinerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>
                                    Assista Agora
                                </Button>
                                <Button red={false} onClick={() => setShowModal(true)}>
                                    Assista o Trailer
                                </Button>
                            </ConteinerButtons>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} />
                        </Poster>
                    </Conteiner>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} largeCards slidesPerView={2} breakpoints={{ 600: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} largeCards slidesPerView={2} breakpoints={{ 600: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} largeCards slidesPerView={2} breakpoints={{ 600: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }} />}
            {personPopular && <Slider info={personPopular} title={'Atores Populares'} largeCards slidesPerView={2} breakpoints={{ 600: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }} />}

            
        </>
    );
}

export default Home;