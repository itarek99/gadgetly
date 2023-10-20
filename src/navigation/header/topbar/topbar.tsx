import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className='bg-dark'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center gap-8 py-6 px-2'>
          <Link className='text-3xl font-bold text-white' to='/'>
            <span>Gadgetly</span>
          </Link>

          <div className='relative basis-[576px]'>
            <input className='w-full outline-none rounded-full px-5 py-2.5' placeholder='Search products' type='text' />
            <div className='absolute h-full flex items-center justify-center top-0 right-3.5'>
              <MagnifyingGlassIcon className='h-5 w-5' />
            </div>
          </div>
          <div className='flex gap-7 items-center'>
            <div className='relative'>
              <HeartIcon className='text-white h-7 w-7' />
              <span className='flex justify-center items-center absolute font-bold -top-2.5 leading-[20px] -right-2.5 h-5 w-5 bg-secondary text-[11px] text-white rounded-full'>
                11
              </span>
            </div>
            <div className='relative'>
              <ShoppingBagIcon className='text-white h-7 w-7' />
              <span className='flex justify-center items-center absolute font-bold -top-2.5 leading-[20px] -right-2.5 h-5 w-5 bg-secondary text-[11px] text-white rounded-full'>
                3
              </span>
            </div>
            <div className='-mb-0.5'>
              <UserCircleIcon className='text-white h-[30px] w-[30px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
