import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from "./components/pages/checkout/Checkout.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<h1>Error 404: Not Found</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
