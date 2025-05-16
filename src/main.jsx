import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Hero from './components/Hero';
import Product from './components/pages/Product';
import ProductDetails from "./components/pages/ProductDetails";
import ContactInfo from './components/pages/ContactInfo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="contact" element={<ContactInfo />} >
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
