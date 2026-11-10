import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ConteinerMovies } from "./styles";

import Slider from "../../components/Slider";
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import SpanGeners from "../../components/SpanGeners";
import Credits from "../../components/Credits";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [movieVideos, setMovieVideos] = useState();
    const [movieCredits, setMovieCredits] = useState();
    const [movieSimilar, setMovieSimilar] = useState();


    useEffect(() => {
        let isCurrent = true;

        async function getAllData() {
            setMovie(undefined);
            setMovieVideos(undefined);
            setMovieCredits(undefined);
            setMovieSimilar(undefined);

            try {
                const [movie, videos, credits, similar] = await Promise.all([
                    getMovieById(id),
                    getMovieVideos(id),
                    getMovieCredits(id),
                    getMovieSimilar(id)
                ]);

                if (!isCurrent) return;

                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            } catch (error) {
                console.error("Erro ao buscar os dados do filme:", error);
            }
        }

        getAllData();

        return () => {
            isCurrent = false;
        };
    }, [id])

    return (
        <>
            {movie && <Background image={getImages(movie?.backdrop_path)} />}
            <Container>
                <Cover>
                    <img src={getImages(movie?.poster_path)} alt={movie?.title} />
                </Cover>
                <Info>
                    <h2>{movie?.title}</h2>
                    <SpanGeners genres={movie?.genres} />
                    <p>{movie?.overview}</p>
                    <div>
                        <Credits credits={movieCredits} />
                    </div>

                </Info>
            </Container>

            <ConteinerMovies>
                {movieVideos && movieVideos?.map((video) => (
                    <div key={video.id}>
                        <h4>{video.name}</h4>
                        <iframe
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            height="500px"
                            width="100%"
                        >
                        </iframe>
                        <p>{video.description}</p>
                    </div>
                ))}
            </ConteinerMovies>

            {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
        </>
    )
}

export default Detail;