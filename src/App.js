import { Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import "./index.css";
import CountriesInfo from "./pages/CountriesInfo";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AllCountries />} />
     <Route path="/viewInfo/:id" element={<CountriesInfo/>}/>
    </Routes>
  );
}

export default App;
