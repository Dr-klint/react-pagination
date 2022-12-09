function Boundaries({ data }) {
  if (data[0].borders !== undefined) {
    return data[0].borders.map((item,i) => {
      return (
        <span key={i} className="font-light  border  px-3 mb-2 mr-2 py-1  shadow-md  hover:cursor-pointer">
          {item}
        </span>
      );
    });
  }
}
export default Boundaries;
