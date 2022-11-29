import _ from "lodash";
import PropTypes from "prop-types";
function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="flex m-5">
      {pages.map((page) => {
        return (
          <p
            key={page}
            onClick={() => {
              onPageChange(page);
            }}
            className={
              page === currentPage
                ? "p-4 border-2 bg-blue-600 hover:bg-gray-600 hover:text-white rounded"
                : "p-4 border-2 bg-gray-400 hover:bg-gray-600 hover:text-white rounded"
            }
          >
            {page}
          </p>
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
