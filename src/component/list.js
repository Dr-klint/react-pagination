import spinner from "../image/loading-9.webp";
function List({ data }) {
  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <img className="w-1/2 md:w-1/4" src={spinner} alt="loader" />
      </div>
    );
  } else {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-2  mt-12 px-10 gap-10 ">
        {data.map((el, i) => {
          return (
            <div
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
}
export default List;
