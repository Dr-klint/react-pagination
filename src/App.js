import { Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import SearchCountries from "./pages/SearchCountries";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AllCountries />} />
      <Route path="/search-countries/:id" element={<SearchCountries />} />
    </Routes>
  );
}

export default App;
