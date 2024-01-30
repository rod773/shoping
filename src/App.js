import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Routes,
  ScrollRestoration,
} from "react-router-dom";

import Footer from "./componets/home/Footer/Footer";
import FooterBottom from "./componets/home/Footer/FooterBottom";
import Header from "./componets/home/Header/Header";
import HeaderBottom from "./componets/home/Header/HeaderBottom";
import SpecialCase from "./componets/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <h1>Shoping</h1>
    </div>
  );
}

export default App;
