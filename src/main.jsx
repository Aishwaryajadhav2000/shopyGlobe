import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart.jsx'
import ProductItem from './Components/ProductItem.jsx'
import NotFound from "./Components/NotFound.jsx";
import ProductDetails from './Components/ProductDetails.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,

    children:[
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/",
        element:<ProductItem></ProductItem>
      },
      {
        path:"/details/:id",
        element:<ProductDetails></ProductDetails>
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
