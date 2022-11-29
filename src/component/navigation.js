import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <header>
      <nav className="dark:bg-darkBackground bg-white shadow-md">
        <div className="flex justify-between px-2 py-4">
          <h1 className="font-bold pl-4 ml-3 text-lg md:pl-5 md:ml-5 md:text-2xl hover:cursor-pointer  dark:text-darkText">
            Where in the World?
          </h1>
          <div className="flex items-center pr-3 mr-3 md:pr-5 md:mr-5 hover:cursor-pointer ">
            <FontAwesomeIcon
              className="mr-1 md:mr-2 dark:text-darkText"
              icon={faMoon}
            />
            <p className="font-semibold dark:text-darkText dark__text">
              Dark Mode
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
