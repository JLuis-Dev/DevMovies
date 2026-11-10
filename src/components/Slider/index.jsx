import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

function Slider({
    info,
    title,
    onLoadMore,
    isLoadingMore = false,
    withHeaderSpacing = false,
    autoplay = true,
    largeCards = false,
    slidesPerView = 'auto',
    breakpoints
}) {

    return (

        <Container $withHeaderSpacing={withHeaderSpacing} $largeCards={largeCards}>
            <h2>{title}</h2>
            <Swiper
                modules={autoplay ? [Autoplay, Pagination, Navigation] : [Pagination, Navigation]}
                grabCursor
                spaceBetween={largeCards ? 24 : 10}
                slidesPerView={slidesPerView}
                breakpoints={breakpoints}
                className="swiper"
                autoplay={autoplay ? {
                    delay: 5000, // 3 segundos
                    disableOnInteraction: false, // Mantém autoplay após interação do usuário
                } : false}
                loop={true}
            >
                {info.map( (item, index) =>(
                    <SwiperSlide key={index}>
                        <Card item={item}/>
                    </SwiperSlide>

                ))}
            </Swiper>
            {onLoadMore && (
                <button type="button" onClick={onLoadMore} disabled={isLoadingMore}>
                    {isLoadingMore ? 'Carregando...' : 'Carregar mais'}
                </button>
            )}
        </Container>

    )
}

export default Slider;