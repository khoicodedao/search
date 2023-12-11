"use client";

import { useCompletion, useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch text-black mb-24 pl-2 pr-2">
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? (
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="/logo.png"
                />
              ) : (
                <img style={{ width: "28px", height: "28px" }} src="/AI.png" />
              )}
              <div className="rounded-lg bg-white p-4 m-2">{m.content}</div>
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          style={{ right: "0px" }}
          className="fixed bottom-0 mb-24   w-full max-w-md p-2 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="Viết câu hỏi của bạn..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
