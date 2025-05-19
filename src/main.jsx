import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Product from '../src/pages/Product';
import ProductDetails from "../src/pages/ProductDetails";
import ContactInfo from '../src/pages/ContactInfo';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="ContactInfo/" element={<ContactInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
