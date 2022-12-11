import { useParams } from "react-router-dom";
import Navigation from "../component/navigation";
import { useState } from "react";
import Error from "../component/error";

function ErrorPage() {
  const [darkMode, setDarkMode] = useState(true);
  const { id } = useParams();

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Error error={id}/>
      </Navigation>
    </div>
  );
}
export default ErrorPage;
