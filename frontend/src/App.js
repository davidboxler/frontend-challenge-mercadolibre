import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import ProductListView from './pages/productListView/ProductListView';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/items/:id" element={<ProductDetails />} />
        <Route exact path="/items" element={<ProductListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
