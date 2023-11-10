import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../../../../components/productCard';
import { products } from '../../../../../data/products';

const WeekProducts = () => {
  return (
    <div className='h-full relative group'>
      <Swiper
        className='h-full'
        spaceBetween={20}
        slidesPerView={4}
        loop
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
      <button className='absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 hover:bg-dark hover:text-white transition-all duration-300 bg-white h-11 w-11 rounded-full flex justify-center items-center z-50 left-4'>
        <ChevronLeftIcon className='h-5 w-5' />
      </button>
      <button className='absolute top-1/2 -translate-y-1/2 bg-red-500 z-50 right-2'>Next</button>
    </div>
  );
};
export default WeekProducts;
