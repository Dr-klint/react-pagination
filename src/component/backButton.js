import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function BackButton() {
  let navigate = useNavigate();

  function goBack() {
    navigate("/");
  }
  return (
    <div className="mt-14 pl-10 ">
      <button
        onClick={goBack}
        className="shadow-md px-8 py-3 dark:bg-darkBackground"
      >
        <FontAwesomeIcon
          className="fa-solid fa-arrow-left dark:text-darkText mr-4"
          icon={faArrowLeft}
        />
        <span className="dark:text-darkText font-semibold">Back</span>
      </button>
    </div>
  );
}
export default BackButton;
