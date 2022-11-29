import { useEffect, useState } from "react";
import { Paginate } from "../utils/paginate";
import List from "./list";
import Pagination from "./pagination";
import { fetchApi } from "./fetchComponent";

function FetchCountry({input}) {
  const [loadedMeetUp, setLoadedMeetUp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect( () => {
    async function fetchData() {
      let data = await fetchApi(input);
      setLoadedMeetUp(data);
    }
    fetchData();
  }, []);

  const data = Paginate(loadedMeetUp, currentPage, 10);

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
