import FeaturedMain from './components/featuredMain';
import FeaturedSecondary from './components/featuredSecondary';
import HeroNav from './components/heroNav';

const Hero = () => {
  return (
    <section className='container mx-auto mt-3 px-2'>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-3'>
          <HeroNav />
        </div>
        <div className='col-span-6'>
          <FeaturedMain />
        </div>
        <div className='col-span-3'>
          <div className='h-full flex flex-col justify-stretch gap-3'>
            <FeaturedSecondary
              title={
                <span>
                  1000 mAh <br /> Power Bank
                </span>
              }
              subTitle='Starting at $24.49'
              imageUrl='https://images.unsplash.com/photo-1632156751475-b519c6f3b5be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
              link=''
            />
            <FeaturedSecondary
              title={
                <span>
                  Apple <br /> Smart Watch
                </span>
              }
              subTitle='Starting at $249.99'
              imageUrl='https://images.unsplash.com/photo-1517502474097-f9b30659dadb?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              link=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
