import _ from "lodash";
import List from '../component/list'

// export function Paginate(items, pageNumber, pageSize) {
//   const startIndex = (pageNumber - 1) * pageSize;
//   return _(items).slice(startIndex).take(pageSize).value();
// }

 function Paginate({ items, pageNumber, pageSize }) {
  const startIndex = (pageNumber - 1) * pageSize;
  const lastIndex = pageNumber * pageSize;
  const paginateArr = _.slice(items, startIndex, lastIndex);
  return <List data={paginateArr} />;
}
export default Paginate