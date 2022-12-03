import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Headrs from "./components/features/Header/Headrs";
import NavBar from "./components/features/navbar/NaveBar";
import BarChart from "./components/pages/lineChart/LineChart";
import DataProvider from "./context/dataContext";

function App() {
  return (
    <div className="App">

      <DataProvider>
      <NavBar />
      <Headrs/>
      <BarChart/>

      </DataProvider>
   
    </div>
  );
}

export default App;
