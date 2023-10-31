import React from "react";

const Profile = () => {
  return (
    <div className="flex  flex-col pt-40 mr-5 ml-5">
      <div className="bg-gray-100 p-6 rounded-md">
        <h1 className="text-3xl font-semibold">Thông tin ứng dụng</h1>
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="full-name"
          >
            Họ và Tên
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="full-name"
            type="text"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Nhập địa chỉ email"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Cập nhật hồ sơ
        </button>
      </div>
    </div>
  );
};

export default Profile;
