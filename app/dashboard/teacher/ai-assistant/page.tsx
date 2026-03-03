"use client";

import { useState } from "react";
import { Input } from "../../../../components/ui/Input";
import { Button } from "../../../../components/ui/Button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TeacherAiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Chào bạn, mình là AI Assistant. Bạn có thể hỏi về xây dựng giáo án, xử lý case sức khoẻ đặc biệt hoặc gợi ý nội dung marketing.",
    },
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input.trim() },
      {
        role: "assistant",
        content:
          "Đây là phản hồi demo. Sau này phần này sẽ được nối với AI thật để trả lời dựa trên lịch sử học viên và giáo án của bạn.",
      },
    ]);
    setInput("");
  }

  return (
    <div className="flex h-[480px] flex-col space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          AI Assistant cho giáo viên mới
        </h1>
        <p className="text-sm text-slate-600">
          Chat demo để sau này bạn có thể thử prompt thực tế.
        </p>
      </div>

      <div className="flex-1 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm shadow-sky-50">
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                  m.role === "assistant"
                    ? "bg-sky-50 text-slate-800"
                    : "ml-auto bg-sky-500 text-white"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>
          <div className="border-t border-sky-100 bg-sky-50/60 p-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Hỏi bất kỳ điều gì"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="h-10 !rounded-full pr-12"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  className="absolute inset-y-0 right-2 my-auto flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-white text-lg font-semibold shadow-md hover:bg-sky-500"
                  aria-label="Gửi tin nhắn"
                >
                  <span className="-mt-[1px]">↑</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


