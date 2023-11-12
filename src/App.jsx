import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Temapp from "./Temapp.jsx";
import Cart from "./Cart/Cart.jsx";
import { ShopContextProvider } from "./context/shop-context.jsx";
import "./index.css";
function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Temapp />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
