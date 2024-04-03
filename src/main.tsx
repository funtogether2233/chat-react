import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const router = createHashRouter([{ path: '*', Component: App }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
    </Suspense>
  </React.StrictMode>
);
