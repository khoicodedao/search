import React from "react";

const Config = () => {
  return (
    <div className="flex  flex-col pt-40 mr-5 ml-5">
      <div className="bg-gray-100 p-6 rounded-md ">
        <h1 className="text-3xl font-semibold">Cấu hình</h1>
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="api-key"
          >
            API Key
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="api-key"
            type="text"
            placeholder="Nhập API Key"
          />
        </div>
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="app-url"
          >
            URL ứng dụng
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="app-url"
            type="text"
            placeholder="Nhập URL ứng dụng"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Lưu cấu hình
        </button>
      </div>
    </div>
  );
};

export default Config;
