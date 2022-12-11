import spinner from "../image/loading-42.webp";
import { useEffect, useState } from "react";
import ViewList from "./viewList";
import BackButton from "./backButton";
import { timeout, TIMEOUT_SEC } from "./helper";
import { useNavigate } from "react-router-dom";

function View({ code }) {
  const [loadedData, setLoadedData] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    async function FetchData() {
      try {
        const fetchPro = fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
          if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        setLoadedData(data);
      } catch (err) {
     navigate(`/errorPage/${err}`);
      }
    }
    FetchData();
  }, []);

  function borderFunctionHandler(id) {
    async function FetchData() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        const data = await res.json();
          if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        setLoadedData(data);
      } catch (err) {
     navigate(`/errorPage/${err}`);
      }
    }
    FetchData();
  }

  return (
    <div className=" dark:bg-darkElements min-h-screen">
      <div className="dark:text-darkElements text-darkText ">2</div>
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
