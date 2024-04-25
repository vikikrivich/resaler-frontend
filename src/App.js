import Supplier from "./pages/Supplier/Supplier"
import ItemGroups from "./pages/ItemGroups/ItemGroups"
import Header from "./components/base/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (

    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/item-groups" element={<ItemGroups/>} />
          <Route path="/" element={<Supplier/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
