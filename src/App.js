import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoaders } from './components/loaders/productsAndCartLoaders';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';


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
          element: <Inventory></Inventory>
        },
        {
          path:'/about',
          element: <About></About>
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
