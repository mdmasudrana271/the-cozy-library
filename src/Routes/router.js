import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyBuyer from "../Pages/Dashboard/MyBuyer/MyBuyer";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MySeller from "../Pages/Dashboard/MySeller/MySeller";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/products?id=${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ],
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/dashboard/my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>

            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/my-orders/${params.id}`)

            },
            {
                path: '/dashboard/my-products',
                element: <PrivateRoute><SellerRoute><MyProducts></MyProducts></SellerRoute></PrivateRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <PrivateRoute><SellerRoute><AddProduct></AddProduct></SellerRoute></PrivateRoute>
            },
            {
                path: '/dashboard/my-buyer',
                element: <PrivateRoute><AdminRoute><MyBuyer></MyBuyer></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/my-seller',
                element: <PrivateRoute><AdminRoute><MySeller></MySeller></AdminRoute></PrivateRoute>
            }
        ]
    }
])

export default router;