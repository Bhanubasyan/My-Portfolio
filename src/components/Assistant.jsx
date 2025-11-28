import React, { useState } from "react";
import "../App.css";

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setChat((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const botMsg = { sender: "bot", text: data.reply };
      setChat((prev) => [...prev, botMsg]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Try again later." },
      ]);
    }

    setMessage("");
  };

  return (
    <>
      <button className="assistant-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      <div className={`assistant-sidebar ${open ? "open" : ""}`}>
        <div className="assistant-header">
          <h3>AI Assistant</h3>
          <span onClick={() => setOpen(false)}>✖</span>
        </div>

        <div className="assistant-chat-area">
          {chat.map((msg, idx) => (
            <div
              key={idx}
              className={`assistant-message ${
                msg.sender === "user" ? "user" : "bot"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="assistant-input">
          <input
            type="text"
            placeholder="Ask anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </>
  );
};

export default Assistant;
