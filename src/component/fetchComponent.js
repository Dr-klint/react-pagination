import { useEffect, useState } from "react";
import FetchCountry from "./countryFetch";
import spinner from "../image/loading-9.webp";

function FetchApi({ input }) {
  const [delay, setDelay] = useState([]);

  let dataArr = [];

  useEffect(() => {
    async function handleFetch() {
      const res = await fetch(`https://restcountries.com/v3.1/${input}`);
      const data = await res.json();
      data.map((item) => dataArr.push(item));
      setDelay(dataArr);
    }
    handleFetch();
  }, []);

  return delay.length > 1 ? (
    <FetchCountry dataInput={delay} />
  ) : (
    <div className="flex justify-center items-center">
      <img className="w-1/2 md:w-1/4" src={spinner} alt="loader" />
    </div>
  );
}

export default FetchApi;
