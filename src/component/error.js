import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import BackButton from "./backButton";
function Error({error}) {
    console.log(error);
  return (
    <div className=" dark:bg-darkElements dark:text-darkText min-h-[90vh] ">
      <div className="dark:text-darkElements text-darkText">.</div>
      <BackButton />
      <div class="flex justify-center items-center font-extrabold text-5xl">
        <FontAwesomeIcon
          className="dark:text-darkText mr-4"
          icon={faTriangleExclamation}
        />
        <p class="dark:text-darkText">{error}</p>
      </div>
    </div>
  );
}
export default Error;
