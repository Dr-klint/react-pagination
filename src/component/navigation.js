import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navigation(props) {
  const { darkMode, toggleDarkMode, children } = props;
  let navigate = useNavigate();

  function goHome() {
    const num = window.location.pathname;
    num === "/" ? window.location.reload() : navigate("/");
  }

  return (
    <div>
      <header>
        <nav
          className={
            darkMode ? "bg-darkBackground  shadow-md" : " bg-white shadow-md"
          }
        >
          <div className="flex justify-between px-2 py-4">
            <h1
              className={
                darkMode
                  ? "font-bold pl-4 ml-3 text-lg md:pl-5 md:ml-5 md:text-2xl hover:cursor-pointer text-darkText"
                  : "font-bold pl-4 ml-3 text-lg md:pl-5 md:ml-5 md:text-2xl hover:cursor-pointer "
              }
              onClick={goHome}
            >
              Where in the World?
            </h1>
            <div
              onClick={toggleDarkMode}
              className="flex items-center pr-3 mr-3 md:pr-5 md:mr-5 hover:cursor-pointer "
            >
              <FontAwesomeIcon
                className={
                  darkMode ? "mr-1 md:mr-2 text-darkText" : "mr-1 md:mr-2 "
                }
                icon={darkMode ? faSun : faMoon}
              />
              <p
                className={
                  darkMode ? "font-semibold text-darkText " : "font-semibold  "
                }
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </p>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Navigation;
