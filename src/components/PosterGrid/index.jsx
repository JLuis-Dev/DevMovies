import Card from '../Card';
import { Container } from './styles';

function PosterGrid({ info, title, onLoadMore, isLoadingMore, withHeaderSpacing = false }) {
    return (
        <Container $withHeaderSpacing={withHeaderSpacing}>
            <h2>{title}</h2>
            <div className="posters">
                {info.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <button type="button" onClick={onLoadMore} disabled={isLoadingMore}>
                {isLoadingMore ? 'Carregando...' : 'Carregar mais'}
            </button>
        </Container>
    );
}

export default PosterGrid;
