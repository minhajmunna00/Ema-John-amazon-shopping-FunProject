import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoaders } from './components/loaders/productsAndCartLoaders';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/shop',
          loader:() => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'/orders',
          loader: productsAndCartLoaders,
          element: <Orders></Orders>
        },
        {
          path:'/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path:'/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>

        }
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
   
  );
}

export default App;
