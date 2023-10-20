import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AddedAllProducts from './Components/AddedAllProducts';
import AddBrand from './Components/AddBrand';
import BrandProducts from './pages/BrandProducts';
import DetailsProduct from './pages/DetailsProduct';
import UpdateProduct from './pages/UpdateProduct';
import AuthProvider from './Provider/AuthProvider';
import ErrorPage from './pages/ErrorPage';
import PrivateRouter from './Components/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: ([
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tech-zone-iota.vercel.app/brands')
      },
      {
        path: '/addproduct',
        element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
      },
      {
        path: '/mycart',
        element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
        loader: () => fetch('https://tech-zone-iota.vercel.app/addtocart')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/allproduct/',
        element: <AddedAllProducts></AddedAllProducts>,
        loader: () => fetch('https://tech-zone-iota.vercel.app/products'),
      },
      {
        path: '/addbrand',
        element: <AddBrand></AddBrand>
      },
      {
        path: '/brandproducts/:brand',
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) => fetch(`https://tech-zone-iota.vercel.app/products/${params.brand}`)
      },
      {
        path: '/detailsProduct/:id',
        element: <PrivateRouter><DetailsProduct></DetailsProduct></PrivateRouter>,
        loader: ({ params }) => fetch(`https://tech-zone-iota.vercel.app/detailsProducts/${params.id}`)
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
        loader: ({params}) => fetch(`https://tech-zone-iota.vercel.app/detailsProducts/${params.id}`)
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
