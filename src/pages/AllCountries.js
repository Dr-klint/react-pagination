import FetchApi from "../component/fetchComponent";
import FilterCountry from "../component/filterCountry";
import Navigation from "../component/navigation";

function AllCountries() {
  return (
    <div>
      <Navigation />
      <FilterCountry />
      <FetchApi input="all" />
    </div>
  );
}
export default AllCountries;
