"use client";

import { useState } from "react";

export default function ColoredInput() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      {text && (
        <p className="text-2xl font-semibold text-blue-600">{text}</p>
      )}
    </div>
  );
}
