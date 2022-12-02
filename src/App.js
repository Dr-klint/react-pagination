import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AllCountries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
