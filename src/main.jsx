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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: ([
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/addtocart')
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
        loader: () => fetch('http://localhost:5000/products'),
      },
      {
        path: '/addbrand',
        element: <AddBrand></AddBrand>
      },
      {
        path: '/brandproducts/:brand',
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: '/detailsProduct/:id',
        element: <DetailsProduct></DetailsProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/productsUp/${params.id}`)
      },
      {
        path: '/updatedProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/productsUp/${params.id}`)
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
