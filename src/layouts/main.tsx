import { Outlet } from 'react-router-dom';
import Footer from '../navigation/footer/footer';
import Header from '../navigation/header/header';

const Main = () => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Main;
