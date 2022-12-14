import { useParams } from "react-router-dom";
import Navigation from "../component/navigation";
import View from "../component/view";
import { useState } from "react";

function CountriesInfo() {
  const [darkMode, setDarkMode] = useState(true);
  const { id } = useParams();

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <View code={id} />
      </Navigation>
    </div>
  );
}
export default CountriesInfo;