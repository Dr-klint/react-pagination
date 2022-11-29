import FetchCountry from "./component/countryFetch";
import FilterCountry from "./component/filterCountry";
import Navigation from "./component/navigation";
import "./index.css";

function App() {
  return (
    <div >
      <Navigation/>
      <FilterCountry/>
      <FetchCountry/>
    </div>
  );
}

export default App;
