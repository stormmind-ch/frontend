// src/router.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { RootLayout } from './components/RootRouter.tsx';
import {Forecast} from "./pages/Forecast.tsx";
import {Report} from "./pages/Report.tsx";
import {AboutUs} from "./pages/AboutUs.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },{
        path: 'forecast',
        element: <Forecast />,
      },{
        path: 'report',
        element: <Report />,
      },
      {
        path: 'aboutus',
        element: <AboutUs/>
      }
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
