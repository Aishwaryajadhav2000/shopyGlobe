import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// import Cart from './Components/Cart.jsx'
import ProductItem from './Components/ProductItem.jsx'
import NotFound from "./Components/NotFound.jsx";
// import ProductDetails from './Components/ProductDetails.jsx';
import ProductList from './Components/ProductList.jsx'
// import Checkout from './Components/Checkout.jsx'
import React, { lazy , Suspense} from 'react'
import Loader from './Components/Loader.jsx'

const Cart = lazy (() => import("./Components/Cart.jsx"));
const Checkout = lazy (() => import("./Components/Checkout.jsx"));
const ProductDetails =  lazy (() => import("./Components/ProductDetails.jsx"));
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,

    children:[
      {
        path:"/cart",
        element:<Suspense fallback={<Loader></Loader>}>
          <Cart/>
          </Suspense>
      },
      {
        path:"/",
        // element:<ProductItem></ProductItem>
        element:<ProductList></ProductList>
      },
      {
        path:"/details/:id",
        element:<Suspense fallback={<Loader></Loader>}>
          <ProductDetails></ProductDetails>
        </Suspense>
      },
      {
        path:"/checkout",
        element:<Suspense fallback={<Loader></Loader>}>
          <Checkout></Checkout>
        </Suspense>
      }
    ],
    errorElement:<NotFound></NotFound>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
