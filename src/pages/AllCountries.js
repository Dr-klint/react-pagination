import FetchCountry from "../component/countryFetch";
import FilterCountry from "../component/filterCountry";
import Navigation from "../component/navigation";

function AllCountries() {
  return (
    <div>
      <Navigation />
      <FilterCountry />
      <FetchCountry input='all'/>
    </div>
  );
}
export default AllCountries;
