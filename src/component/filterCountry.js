import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import  FetchCountry  from "./countryFetch";


function FilterCountry() {
  const [filterOption, setFilterOption] = useState(false);
  const [loadSearch, setLoadSearch] = useState(false);
  const inputCountry = useRef();

  function handlerFilterOption() {
   filterOption === false ? setFilterOption(true) : filterOption === true ? setFilterOption(false) : setFilterOption(true);
  }

  function handleSearchCountries(e) {
    e.preventDefault();
    const value = inputCountry.current.value;
    const total = `name/${value}`;
    // return loadSearch && console.log(total);
    return loadSearch && <FetchCountry input={total}/>
  }

  useEffect(() => {
    setLoadSearch(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start">
      <div className="pl-4 ml-3 md:pl-5 md:ml-6 mt-14 shadow-md bg-white dark:bg-darkBackground w-auto">
        <FontAwesomeIcon
          className="py-2 px-4 rounded -m-1 dark:text-darkText"
          icon={faMagnifyingGlass}
        />
        <form className=" inline" onSubmit={handleSearchCountries}>
          <input
            placeholder="Search for a Country "
            className="px-5 rounded py-3 dark:bg-darkBackground dark:text-darkText outline-none focus:border-none"
            ref={inputCountry}
          />
        </form>
      </div>
      <div className="mr-0 md:mr-10 md:mt-14 mt-10 ml-4 hover:cursor-pointer w-auto">
        <div className="relative">
          <div className="flex items-center shadow-md bg-white dark:bg-darkBackground pr-1">
            <p onClick={handlerFilterOption} className="p-3 dark:text-darkText">
              Filter by Region
            </p>
            <FontAwesomeIcon
              className="p-2 dark:text-darkText"
              icon={faChevronDown}
            />
          </div>
          <div
            className={
              filterOption === false
                ? "shadow-sm bg-white dark:bg-darkBackground p-3 z-10 transition-all absolute top-14 pl-4 pr-24 hidden "
                : "shadow-sm bg-white dark:bg-darkBackground p-3 z-10 transition-all absolute top-14 pl-4 pr-24  "
            }
          >
            <ul className="dark:text-darkText">
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterCountry;
