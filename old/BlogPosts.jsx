import { useEffect, useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostData from '../data/posts.json';
import ReturnHome from './ReturnHome';
import { markdownToHtml } from '../utils/markdown';
import { Link } from 'react-router';

const BlogPosts = () => {
  const [content, setContent] = useState('');
  const [truncatedContent, setTruncatedContent] = useState('');

  useEffect(() => {
    if (PostData.length > 0) {
      fetchMarkdown(PostData[0].content);
    }
  }, []);

  async function fetchMarkdown(filePath) {
    const response = await fetch(filePath);
    const markdown = await response.text();
    setContent(markdownToHtml(markdown));
    truncateContent(markdown);
  }

  function truncateContent(text) {
    setTruncatedContent(text.length > 100 ? text.slice(0, 100) + '...' : text);
  }

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const projectsRows = chunkArray(PostData, 3);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Blog Posts</h2>
      {projectsRows.map((projectsRow, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center mx-6">
          {projectsRow.map((project) => (
            <div key={project.id} className="px-4 mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 h-full flex flex-col">
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{truncatedContent}</p>
                  <div className="flex flex-wrap mb-2">
                    {project.tags.map((tag, index) => (
                      <div key={index} className="bg-green-500 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2">{tag}</div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="flex justify-start">
                      <Link to={`/blog/${project.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 flex items-center">
                        <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <ReturnHome />
    </div>
  );
};

export default BlogPosts;
