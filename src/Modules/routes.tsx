import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Cadastro from '../Pages/Cadastro';
import App from '../App';
import LoginPage from '../Pages/LoginPage';

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Cadastro',
        element: <Cadastro />,
      },
      {
        path: '/LoginPage',
        element: <LoginPage />,
      },
    ],
    errorElement: <h1> Error 404!</h1>,
  },
  
]);
