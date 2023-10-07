import { Outlet } from 'react-router-dom';
import Footer from '../navigation/footer/footer';
import Header from '../navigation/header/header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Main;
