import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider} from 'react-router-dom'
import { Routes } from './Modules/routes.tsx';

const router = {
  ...Routes,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
