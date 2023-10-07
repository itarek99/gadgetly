import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/main';
import About from '../pages/about/about';
import Home from '../pages/home/home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
