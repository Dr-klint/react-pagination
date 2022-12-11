import FetchCountry from "../component/countryFetch";
import Navigation from "../component/navigation";
import { useState } from "react";

function AllCountries() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <FetchCountry />
      </Navigation>
    </div>
  );
}
export default AllCountries;
