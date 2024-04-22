import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import  ItemDetailContainer  from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import  CartContainer  from "./components/pages/cart/CartContainer.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route element={<Layout />}> 
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:name" element={<ItemListContainer />} />
    <Route path="/cart" element={<CartContainer />} />
    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
    <Route path="*" element={<h1>Error 404: Not Found</h1>} />
    </Route>
</Routes>
</BrowserRouter>
      

    </div>
  );
}

export default App;
