import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt="" style={{width: '100%', height:'625px'}}/>)

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoHeight
            autoPlay
            autoPlayInterval={5000}
            infinite
        />
    )
};

export default MainCarousel;