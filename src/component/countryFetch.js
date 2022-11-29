import { useEffect, useState } from "react";
import { Paginate } from "../utils/paginate";
import List from "./list";
import Pagination from "./pagination";
import { fetchApi } from "./fetchComponent";

function FetchCountry() {
  const [loadedMeetUp, setLoadedMeetUp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
const inputData = fetchApi('all')
console.log(inputData);
  useEffect(() => {
    setLoadedMeetUp(fetchApi("all"));
  }, []);

  const data = Paginate(loadedMeetUp, currentPage, 10);
  console.log(data);

  return (
    <div>
      {/* {loadedMeetUp.length > 1 ? <Paginate items={loadedMeetUp} pageNumber={currentPage} pageSize={10}/>:null} */}
      <List data={data} />
      {loadedMeetUp.length > 1 ? (
        <Pagination
          itemsCount={loadedMeetUp.length}
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
