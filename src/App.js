import { Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import "./index.css";
import CountriesInfo from "./pages/CountriesInfo";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AllCountries />} />
      <Route path="/viewInfo/:id" element={<CountriesInfo />} />
      <Route path="/errorPage/:id" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
