import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headrs from "./components/features/Header/Headrs";
import NavBar from "./components/features/navbar/NaveBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headrs/>
    </div>
  );
}

export default App;
