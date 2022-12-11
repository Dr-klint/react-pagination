import { useEffect, useState } from "react";
import { Paginate } from "../utils/paginate";
import List from "./list";
import Pagination from "./pagination";
import spinner from "../image/loading-42.webp";
import FilterCountry from "./filterCountry";
import { timeout, TIMEOUT_SEC } from "./helper";
import { useNavigate } from "react-router-dom";

function FetchCountry() {
  const [dataInput, setdataInput] = useState([]);
  const [filterInput, setFilterInput] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function FetchData() {
      try {
        const fetchPro = fetch(`https://restcountries.com/v3.1/all`);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        const dataArr = data.sort((a, b) =>
          a.name.official.localeCompare(b.name.official)
        );
        setdataInput(dataArr);
        setFilterInput(dataArr);
      } catch (err) {
        navigate(`/errorPage/${err}`);
      }
    }
    FetchData();
  }, []);

  const handleSearchCountries = (country) => {
    async function FetchData() {
      try {
        const fetchPro = fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        const dataArr = data.sort((a, b) =>
          a.name.official.localeCompare(b.name.official)
        );
        setdataInput(dataArr);
      } catch (err) {
        navigate(`/errorPage/${err}`);
      }
    }
    FetchData();
  };

  function handlePageFilter(country) {
    const dataFiltered = filterInput.filter((item) => item.region === country);
    setdataInput(dataFiltered);
  }

  const data = Paginate(dataInput, currentPage, 10);

  return (
    <div className="dark:bg-darkElements dark:text-darkText min-h-screen">
      <FilterCountry
        handleFunctionFilter={handlePageFilter}
        handleFunctionSearch={handleSearchCountries}
      />
      {/* {dataInput.length > 1 ? <Paginate items={dataInput} pageNumber={currentPage} pageSize={10}/>:null} */}
      {dataInput.length >= 1 ? (
        <List data={data} />
      ) : (
        <div className="flex justify-center items-center">
          <img className="w-1/2 md:w-1/4" src={spinner} alt="loader" />
        </div>
      )}

      {dataInput.length >= 1 ? (
        <Pagination
          itemsCount={dataInput.length}
          pageSize={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default FetchCountry;
