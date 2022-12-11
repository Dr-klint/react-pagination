import _ from "lodash";
import PropTypes from "prop-types";
function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="flex flex-wrap m-5 pb-6">
      {pages.map((page) => { 
        return (
          <div
            key={page}
            onClick={() => {
              onPageChange(page);
            }}
            className={
              page === currentPage
                ? "p-1 border-2 bg-blue-600 hover:bg-gray-600 hover:text-white rounded-full hover:cursor-pointer mr-2 mb-2"
                : "p-1 border-2 bg-gray-400 hover:bg-gray-600 hover:text-white rounded-full hover:cursor-pointer mr-2 mb-2"
            }
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
