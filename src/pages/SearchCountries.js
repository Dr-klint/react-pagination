import { useParams } from "react-router-dom";
import FetchCountry from "../component/countryFetch";
import FilterCountry from "../component/filterCountry";
import Navigation from "../component/navigation";

function SearchCountries() {
  let {id} = useParams();
  const data = `name/${id} `;


  return (
    <div>
      <Navigation />
      <FilterCountry />
      <FetchCountry input={data} />
    </div>
  );
}
export default SearchCountries;
