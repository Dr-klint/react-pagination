import { useEffect, useState } from "react";
import { Paginate } from "../utils/paginate";
import List from "./list";
import Pagination from "./pagination";
import spinner from "../image/loading-9.webp";
// import { fetchApi } from "./fetchComponent";

function FetchCountry({ input }) {
  const [dataInput, setdataInput] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`https://restcountries.com/v3.1/${input}`);
      const data = await res.json();
      const dataArr = data.sort((a, b) =>
        a.name.official.localeCompare(b.name.official)
      );
      setdataInput(dataArr);
    }
    FetchData();
  }, []);

  const data = Paginate(dataInput, currentPage, 10);

  return (
    <div>
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
