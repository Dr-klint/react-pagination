import FetchCountry from "./component/countryFetch";
import FilterCountry from "./component/filterCountry";
import Navigation from "./component/navigation";
import "./index.css";

function App() {
  return (
    <div >
      <Navigation/>
      <FilterCountry/>
      <FetchCountry input='all'/>
    </div>
  );
}

export default App;
