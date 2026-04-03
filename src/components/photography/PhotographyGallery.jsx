import { useState } from 'react';
import photographyData from '../../data/photography.json';
import Modal from './Modal';
import ReturnHome from '../layout/ReturnHome';

const PhotographyGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Photography</h2>
      
      <div className="grid mx-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {photographyData.map((photo) => (
          <div
            key={photo.imageUrl}
            className="relative m-2 overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="object-cover w-full h-full"
              style={{ zIndex: 1 }}
            />
            <div
              className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: 2 }}
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{photo.title}</h3>
                <a
                  href={photo.imageUrl}
                  download
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedPhoto && (
        <Modal
          isOpen={isModalOpen}
          imageSrc={selectedPhoto.imageUrl}
          title={selectedPhoto.title}
          author={selectedPhoto.author}
          camera={selectedPhoto.camera}
          onClose={closeModal}
        />
      )}

      <ReturnHome />
    </div>
  );
};

export default PhotographyGallery;
