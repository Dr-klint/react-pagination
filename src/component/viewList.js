import Boundaries from "./boundaries";
function ViewList({ data, handleBorderClick }) {
  return (
    <div className=" dark:text-darkText">
      {data.map((item, i, arr) => {
        return (
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-14 gap-8 " key={i}>
            <img
              className="px-10 w-3/4 object-cover"
              src={item.flags.png}
              alt={item.flags.png}
            />

            <div className="dark:text-darkText px-10 lg:px-0 items-end">
              <p className="font-bold text-lg mb-6">{item.name.common}</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 font-semibold text-sm">
                <div>
                  <ul>
                    <li className="mt-1">
                      Native Name:{" "}
                      <span className="font-light">
                        {Object.entries(item.name.nativeName)[0][1].common}
                      </span>
                    </li>
                    <li className="mt-1">
                      Population:{" "}
                      <span className="font-light">
                        ${item.population.toLocaleString()}
                      </span>
                    </li>
                    <li className="mt-1">
                      Region: <span className="font-light">{item.region}</span>
                    </li>
                    <li className="mt-1">
                      Sub Region:{" "}
                      <span className="font-light">
                        {item.subregion || "nil"}
                      </span>
                    </li>
                    <li className="mt-1">
                      Capital:{" "}
                      <span className="font-light">
                        {item.capital || "nil"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="mt-1">
                      Top Level Domain:{" "}
                      <span className="font-light">{item.tld}</span>
                    </li>
                    <li className="mt-1">
                      Currencies:{" "}
                      <span className="font-light">
                        {Object.entries(item.currencies)[0][1].name}
                      </span>
                    </li>
                    <li className="mt-1">
                      Languages:{" "}
                      <span className="font-light">
                        {Object.entries(item.languages)[0][1]}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex items-start">
                  <p className="w-3/4"> Border Countries: </p>
                  <div
                    onClick={(e) => {
                      handleBorderClick(e.target.textContent);
                    }}
                    className="flex  flex-wrap  "
                  >
                    {" "}
                    {<Boundaries data={arr} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ViewList;
