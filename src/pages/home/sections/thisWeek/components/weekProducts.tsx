import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import SwiperClass from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../../../../components/productCard';
import { products } from '../../../../../data/products';

function WeekProducts() {
  const swiperRef = useRef<SwiperClass>();

  return (
    <div className="h-full relative group">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full"
        spaceBetween={20}
        slidesPerView={4}
        loop
      >
        {products.slice(0, 7).map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef?.current?.slidePrev()}
        className="absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 hover:bg-dark hover:text-white transition-all duration-300 bg-white h-11 w-11 rounded-full flex justify-center items-center z-50 left-4"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => swiperRef?.current?.slideNext()}
        className="absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 hover:bg-dark hover:text-white transition-all duration-300 bg-white h-11 w-11 rounded-full flex justify-center items-center z-50 right-4"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
export default WeekProducts;
