import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const Modal = ({ isOpen, imageSrc, title, author, camera, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-md p-8"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-transparent shadow-2xl rounded-2xl flex flex-col relative mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-black text-white rounded-full transition-colors duration-150 hover:bg-gray-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <div className="flex-grow flex justify-center items-center rounded-t-2xl">
          <img src={imageSrc} alt={title} className=" max-h-[75vh] rounded-t-2xl" />
        </div>
        <div className="bg-white p-6 rounded-b-2xl flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
          <h4 className="text-xl font-semibold text-center mb-4">{camera}</h4>
          <a href={imageSrc} download={imageSrc} className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
