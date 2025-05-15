// src/router.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { RootLayout } from '../src/components/RootRouter.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add more routes here
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
