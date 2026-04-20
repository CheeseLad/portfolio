import awardsData from '../../data/awards.json';

const Awards = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">Awards</h2>

      <div className="grid mx-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-center">{award.title}</h3>

            <div className="grid grid-cols-1 gap-4 mb-6">
              {award.images.map((imgUrl, i) => (
                <img
                  key={i}
                  src={imgUrl}
                  alt={`Award image ${i + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))}
            </div>

            <h4 className="text-xl font-medium">{award.subtitle}</h4>

            {award.date && (
              <i className="text-gray-500 mb-8">{award.date}</i>
            )}

            <p className="text-gray-700">{award.description}</p>


            {/*{award.certificateLink && (
              <div className="mb-4">
                <a
                  href={award.certificateLink}
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Award Certificate
                </a>
              </div>
            )}

            {award.relatedLinks && award.relatedLinks.length > 0 && (
              <div>
                <h5 className="text-lg font-semibold mb-2">Related Articles & Sources:</h5>
                <ul className="list-disc list-inside text-blue-600">
                  {award.relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
