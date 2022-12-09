import { useNavigate } from "react-router-dom";

function List({ data }) {
  let navigate = useNavigate();

  function handleCountryInfo(data) {
    navigate(`/viewInfo/${data}`);
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2  mt-12 px-10 gap-10 ">
      {data.map((el, i) => {
        return (
          <div
            onClick={() => {
              handleCountryInfo(el.cca2);
            }}
            key={i}
            className="bg-white dark:bg-darkBackground rounded overflow-hidden shadow-md mb-5 hover:cursor-pointer "
            data-country-name={el.cca2}
          >
            <img
              src={el.flags.png}
              alt={el.name.official}
              className="w-full  h-48 object-cover"
            />
            <div className="p-4 ">
              <p className="font-bold text-lg">{el.name.official}</p>
              <p className="font-semibold mt-2">
                Population:{" "}
                <span className="font-light">
                  {el.population.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold">
                Capital:{" "}
                <span className="font-light">{el.capital || "nil"}</span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-light">{el.region}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
