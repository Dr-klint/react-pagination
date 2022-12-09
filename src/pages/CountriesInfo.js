import { useParams } from "react-router-dom";
import Navigation from "../component/navigation";
import View from "../component/view";

function CountriesInfo() {
  const  {id}  = useParams();

  return (
    <div>
      <Navigation />
      <View code={id} />
    </div>
  );
}
export default CountriesInfo;
