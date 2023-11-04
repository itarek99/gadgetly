import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../../../../components/productCard';
import { products } from '../../../../../data/products';

const WeekProducts = () => {
  return (
    <div className='h-full'>
      <Swiper
        className='h-full'
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.slice(0, 7).map((product) => {
          return (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default WeekProducts;
