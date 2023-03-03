import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from './pages/Cart';
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from './components/Navbar'
import './components/style/style.css'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import SellerProfile from "./pages/SellerProfile";
const App = () => {
  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/register" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/profile/:id",
          element: <Profile />,
        },

        {
          path: "/products",
          element: <Products />,
        },

        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/productList",
          element: <ProductsList />,
        },
        {
          path: "/singleProduct",
          element: <SingleProduct />,
        },
        {
          path: "/sellerProfile",
          element: <SellerProfile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
