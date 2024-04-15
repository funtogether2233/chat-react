import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import App from './App.tsx';
import './index.css';

const router = createHashRouter([{ path: '*', Component: App }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  //   <React.StrictMode>
  <Suspense>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router}></RouterProvider>
  </Suspense>
  //   </React.StrictMode>
);
