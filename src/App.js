import {Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import SearchCountries from "./pages/SearchCountries";
import "./index.css";
import FilterCountriesRegion from "./pages/FilterCountries";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AllCountries />} />
      <Route path="/search-countries/:id" element={<SearchCountries />} />
      <Route path="filter-countries/:id" element={<FilterCountriesRegion/>}/>
    </Routes>
  );
}

export default App;
