const FeaturedMain: React.FC = () => (
  <div className="relative group overflow-hidden bg-no-repeat h-full w-full flex flex-col justify-center">
    <div className="ml-8 text-white z-10">
      <h2 className="text-4xl font-medium">
        POCO F5 Pro
        {' '}
        <br />
        {' '}
        Activate Super Power
      </h2>
      <p className="mt-4 text-[17px]">Bringing a new age of smart experience.</p>

      <button className="text-black bg-white px-6 py-2.5 rounded-full font-medium mt-5">Shop Now</button>
    </div>
    <div className="absolute h-full w-full">
      <img
        className="object-cover h-full w-full duration-500 ease-out group-hover:scale-105"
        src="https://minimog-4437.kxcdn.com/dexons/wp-content/uploads/sites/11/2023/07/bgr-banner-slide1.jpg"
        alt=""
      />
    </div>
  </div>
);
export default FeaturedMain;
