import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import user_manual from './user_manual.md?raw'

const SingleBlog = () => {
  
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2>
        <div className="flex flex-wrap mx-6">
            <div className="w-full px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden block">
                <img src="/dcumps_logo.png" alt="" className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Blog Test</h3>
                  <p className="text-gray-700 mb-4 min-h-36"><Markdown remarkPlugins={[remarkGfm]}>{user_manual}</Markdown></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog