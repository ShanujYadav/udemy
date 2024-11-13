import React, { useState } from "react";

const VideoUpload = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);


  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 flex flex-col">
      <header className="bg-indigo-600 text-white py-16 w-full">
        <div className="w-full text-center">
          <h1 className="text-4xl font-extrabold">Upload Your Video Course</h1>
          <p className="mt-4 text-xl font-light">
            Share your knowledge with the world by creating an educational course.
          </p>
        </div>
      </header>

      <main className="flex-grow w-full py-12 px-4 flex flex-col items-center">
        <div className="bg-white shadow-xl rounded-lg w-full p-12 relative">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Upload Your Video Course
          </h2>

          <div
            className="bg-gray-200 border border-gray-300 rounded-lg p-10 shadow-md flex flex-col justify-center items-center cursor-pointer transition-all hover:shadow-lg"
            style={{ width: "700px", height: "300px", margin: "0 auto" }}
          >
            {thumbnail ? (
              <img
                src={URL.createObjectURL(thumbnail)}
                alt="Thumbnail Preview"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <>
                <div className="bg-gray-300 p-6 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium mt-4">
                  Upload Thumbnail
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Recommended size: 1280x720
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files[0])}
              className="hidden"
            />
          </div>

          <div className="mt-6 flex items-center justify-center">
            <label className="block text-sm font-medium text-gray-700 mr-4">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className="block text-sm text-gray-500 border border-gray-300 rounded-lg p-2"
            />a
          </div>

          <form className="mt-8 w-2/3 mx-auto">
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Course Categeory
              </label>
              <select
                id="quantity"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Select a number"
              >
                <option value="">Select Category</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Course SubCategeory
              </label>
              <select
                id="quantity"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Select a number"
              >
                <option value="">Select Sub-Category</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Course Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter the course title"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Course Price
              </label>
              <input
                type="number"
                id="price"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter the price"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <textarea
                id="description"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Enter a brief course description"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-6 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default VideoUpload