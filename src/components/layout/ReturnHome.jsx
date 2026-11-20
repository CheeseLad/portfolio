import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const ReturnHome = () => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
      >
        <FontAwesomeIcon icon={faHouse} className="mr-2" />
        Return Home
      </Link>
    </div>
  );
};

export default ReturnHome;
