import "./stylesheets/base.css"
import Navbar from "./base/Navbar"
import Home from "./Home"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
