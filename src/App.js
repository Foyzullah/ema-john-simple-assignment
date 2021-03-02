import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header></Header>
        </div>
        <div className="row">
          <div className="col-9">
            <Shop></Shop>
          </div>
          <div className="col-3">
            <h3>Cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
