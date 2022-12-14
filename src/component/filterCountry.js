import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function FilterCountry({ handleFunctionFilter, handleFunctionSearch }) {
  const [filterOption, setFilterOption] = useState(false);
  const inputCountry = useRef();

  function handlerFilterOption() {
    filterOption === false
      ? setFilterOption(true)
      : filterOption === true
      ? setFilterOption(false)
      : setFilterOption(true);
  }


  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start dark:bg-darkElements">
      <div className="pl-4 ml-3 md:pl-5 md:ml-6 mt-14 shadow-md bg-white dark:bg-darkBackground w-auto">
        <FontAwesomeIcon
          className="py-2 px-4 rounded -m-1 dark:text-darkText"
          icon={faMagnifyingGlass}
        />
        <form
          className=" inline"
          onSubmit={(e) => {
            e.preventDefault();
            handleFunctionSearch(inputCountry.current.value);
            inputCountry.current.value = ''
          }}
        >
          <input
            placeholder="Search for a Country "
            className="px-5 rounded py-3 dark:bg-darkBackground dark:text-darkText outline-none focus:border-none"
            ref={inputCountry}
          />
        </form>
      </div>
      <div className="mr-0 md:mr-10 md:mt-14 mt-10 ml-4 hover:cursor-pointer w-auto">
        <div className="relative">
          <div
            className="flex items-center shadow-md bg-white dark:bg-darkBackground pr-1"
            onClick={handlerFilterOption}
          >
            <p className="p-3 dark:text-darkText">Filter by Region</p>
            <FontAwesomeIcon
              className="p-2 dark:text-darkText"
              icon={faChevronDown}
            />
          </div>
          <div
            className={
              filterOption === false
                ? "shadow-md bg-white dark:bg-darkBackground  z-10 transition-all absolute top-14  hidden "
                : "shadow-md bg-white dark:bg-darkBackground  z-10 transition-all absolute top-14   "
            }
          >
            <ul
              className="dark:text-darkText "
              onClick={(e) => {
                handleFunctionFilter(e.target.textContent);
              }}
            >
              <li className="hover:bg-slate-300 pl-4 pr-[5.9rem] w-full p-[0.25rem]">
                Africa
              </li>
              <li className="hover:bg-slate-300 pl-4 pr-[5.9rem] w-full p-[0.25rem]">
                Americas
              </li>
              <li className="hover:bg-slate-300 pl-4 pr-[5.9rem] w-full p-[0.25rem]">
                Asia
              </li>
              <li className="hover:bg-slate-300 pl-4 pr-[5.9rem] w-full p-[0.25rem]">
                Europe
              </li>
              <li className="hover:bg-slate-300 pl-4 pr-[5.9rem] w-full p-[0.25rem]">
                Antarctic
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterCountry;
