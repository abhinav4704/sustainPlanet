import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about sustainability or SDGs." },
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
        { sender: "bot", text: "Here's something helpful about your query." },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-mono">
      {/* Header */}
      <header className="bg-zinc-900 px-6 py-4 border-b border-zinc-700 text-lg font-semibold">
        SustainBot — Your Sustainability Assistant
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
                  ? "bg-zinc-800 text-white"
                  : "bg-zinc-700 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="bg-zinc-900 px-4 py-4 border-t border-zinc-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about climate, clean energy, SDGs..."
            className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-600 text-white rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;
