import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

// import all components
import Login from './componentes/Login';
import Password from './componentes/Password';
import Register from './componentes/Register';
import Profile from './componentes/Profile';
import Recovery from './componentes/Recovery';
import Reset from './componentes/Reset';
import PageNotFound from './componentes/PageNotFound';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/password',
    element:<Password></Password>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  },
  {
    path:'/recovery',
    element:<Recovery></Recovery>
  },
  {
    path:'/reset',
    element:<Reset></Reset>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  }
    

])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
