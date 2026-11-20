import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonRow = () => {

  const buttonData = [
    {
      text: "Coursework",
      icon: "faHouse",
      link: "/",
    },
    {
      text: "Society",
      icon: "faCamera",
      link: "/photography",
    },
    {
      text: "Personal",
      icon: "faHouse",
      link: "/projects",
    },
    {
      text: "Other",
      icon: "faHouse",
      link: "/contact",
    }
  ];

  return (
    <div className="flex justify-center flex-wrap mb-4">
      {buttonData.map((button, index) => (
        <Link key={index} to={button.link} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mx-1 min-w-[140px] text-center">
          <FontAwesomeIcon icon={button.icon} className="mr-2" />
          {button.text}
        </Link>
      ))}
    </div>
  );
};

export default ButtonRow;
