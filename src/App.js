import { ProductsProvider } from "./context/ProductsContexts";
import { ProductList } from "./components/ProductsList";
import "./App.css";


function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <ProductList />
      </div>
    </ProductsProvider>
  );
}

export default App;
