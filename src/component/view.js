import spinner from "../image/loading-9.webp";
import { useEffect, useState } from "react";
import ViewList from "./viewList";
import BackButton from "./backButton";

function View({ code }) {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
      setLoadedData(data);
    }
    FetchData();
  }, []);

  function borderFunctionHandler(id){
     async function FetchData() {
       const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
       const data = await res.json();
       setLoadedData(data);
     }
     FetchData();
  }

  return (
    <div>
      <BackButton />
      {loadedData.length >= 1 ? (
        <ViewList data={loadedData} handleBorderClick={borderFunctionHandler} />
      ) : (
        <div className="flex justify-center items-center">
          <img className="w-1/2 md:w-1/4" src={spinner} alt="loader" />
        </div>
      )}
    </div>
  );
}
export default View;
