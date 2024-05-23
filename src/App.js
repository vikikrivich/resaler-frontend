import SupplierItems from "./pages/Supplier/SupplierItems"
import ItemGroups from "./pages/ItemGroups/ItemGroups"
import Header from "./components/base/Header"
import Error404 from "./pages/Errors/Error404"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles/base.css"

function App() {

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/item-groups" element={<ItemGroups/>} />
        <Route path="/" element={<SupplierItems/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;
