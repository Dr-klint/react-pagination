import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
function Error({error}) {
    console.log(error);
  return (
    <div class="flex justify-center items-center font-extrabold text-5xl dark:bg-darkElements dark:text-darkText min-h-[90vh] ">
      <FontAwesomeIcon
        className="dark:text-darkText mr-4"
        icon={faTriangleExclamation}
      />
      <p class="dark:text-darkText">{error}</p>
    </div>
  );
}
export default Error;
