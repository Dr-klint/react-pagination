import { useState } from "react";
import Paginate from "../utils/paginate";
// import List from "./list";
import Pagination from "./pagination";

function FetchCountry({ dataInput }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const data = Paginate(dataInput, currentPage, 10);

  return (
    <div>
      {/* <List data={data} />  */}
      <Paginate items={dataInput} pageNumber={currentPage} pageSize={10} />

      <Pagination
        itemsCount={dataInput.length}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default FetchCountry;
