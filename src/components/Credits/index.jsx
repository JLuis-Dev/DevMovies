import { getImages } from "../../utils/getImages";
import { Container, Title } from "./styles";

function Credits({ credits }) {
    const cast = Array.isArray(credits?.cast) ? credits.cast : [];

    return (
        <>
            <Title>Créditos</Title>

            { cast.length > 0 && (
                <Container>
                    {cast.slice(0, 5).map((artist) => (
                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)} alt={artist.name} />
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                    <div></div>
                </Container>
            )}
        </>
    )
}

export default Credits;