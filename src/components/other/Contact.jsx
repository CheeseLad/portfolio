// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router';

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
      
      <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
        {/* Contact Info */}
        {/*<div className="flex flex-col justify-center items-center mb-16">
          <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
            <Link to="mailto:jake_farrell@outlook.com" className="text-lg text-white flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-2" />Email
            </Link>
          </div>
          <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
            <Link to="https://www.linkedin.com/in/yourprofile" className="text-lg text-white flex items-center" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2" />LinkedIn
            </Link>
          </div>
          <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
            <Link to="https://github.com/yourusername" className="text-lg text-white flex items-center" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />GitHub
            </Link>
          </div>
        </div>*/}
        
        {/* Contact Form */}
        <div className="mx-8">
          <form action="https://formspree.io/f/xwkzagze" method="POST" className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Your Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border border-transparent rounded-md shadow-sm bg-gray-300 min-h-8 pl-3 focus:border-gray-800 focus:outline-none" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Your Email</label>
              <input type="email" id="email" name="_replyto" className="mt-1 block w-full border border-transparent rounded-md shadow-sm bg-gray-300 min-h-8 pl-3 focus:border-gray-800 focus:outline-none" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700"> Your Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-transparent rounded-md shadow-sm bg-gray-300 min-h-24 pl-3 pt-2 focus:border-gray-800 focus:outline-none" required></textarea>
            </div>
            <button type="submit" className="cursor-pointer ml-auto block w-fit py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
  </div>
  );
};

export default Contact;
