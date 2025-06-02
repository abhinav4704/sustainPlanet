import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about sustainability or SDGs 🌍" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Here's something helpful about your query. ✨" },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-[#343541] text-white min-h-screen flex flex-col font-mono">
      {/* Header */}
      <header className="bg-[#202123] px-6 py-4 border-b border-gray-700 text-lg font-semibold">
        SustainBot — Your AI Sustainability Guide
      </header>

      {/* Chat Body */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-3 max-w-xl rounded-lg text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-[#3e3f4b] text-white"
                  : "bg-[#444654] text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="bg-[#40414f] px-4 py-4 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about climate change, clean energy, SDGs..."
            className="flex-1 px-4 py-2 bg-[#343541] border border-gray-600 text-white rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-[#10a37f] hover:bg-[#0d8b6c] text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;
