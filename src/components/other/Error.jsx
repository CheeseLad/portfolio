import ReturnHome from "../layout/ReturnHome.jsx";

const Error = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        404 - Page Not Found
      </h2>
      <p className="text-center">
        Please check that the page you entered is correct
      </p>
      <p className="text-center">Here&apos;s a cat GIF while you&apos;re here:</p>
      <div className="relative m-2 overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-105">
        <img
          src="cat.gif"
          alt="Cat GIF"
          className="mx-auto my-4 object-cover rounded-xl overflow-hidden"
        />
      </div>
      <ReturnHome />
    </div>
  );
};

export default Error;
