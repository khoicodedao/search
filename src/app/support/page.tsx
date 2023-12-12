"use client";

import { useCompletion, useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div
      style={{ height: "78vh" }}
      className="flex flex-col w-full max-w-md  mx-auto stretch text-black mb-24 pl-2 pr-2"
    >
      <iframe
        title="External Content"
        width="100%"
        height="100%"
        src="https://phimtienhiep.com/help/"
      />
    </div>
  );
}
