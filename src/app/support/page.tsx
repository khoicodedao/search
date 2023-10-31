// pages/support.js
import React from "react";

const Support = () => {
  return (
    <div className="flex  flex-col  items-center justify-center pt-40 mr-5 ml-5">
      <div className="bg-gray-100 p-6 rounded-md ">
        <h1 className="text-3xl font-semibold">Thông tin hỗ trợ</h1>

        <p className="text-gray-600">
          Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, xin vui lòng liên hệ với
          chúng tôi.
        </p>
        <form action="/submit" method="post" className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
