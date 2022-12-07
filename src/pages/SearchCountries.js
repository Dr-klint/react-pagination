import { useParams } from "react-router-dom";
import FetchCountry from "../component/countryFetch";

function SearchCountries() {
  let { id } = useParams();
  const data = `name/${id} `;

  return (
    <div>
      <FetchCountry input={data} />
    </div>
  );
}
export default SearchCountries;
