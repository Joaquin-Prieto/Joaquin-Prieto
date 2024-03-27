import {Navbar} from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>

      <Navbar />
      <ItemListContainer gretting={"Hola"} />

    </div>
  );
}

export default App;
