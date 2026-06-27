import { useState } from "react";
import "../App.css";
import { MessageCircle, Send, X } from "lucide-react";

const quickPrompts = [
  "What are Bhanu's best projects?",
  "What skills does Bhanu have?",
  "How can I contact Bhanu?",
  "Summarize Bhanu's profile",
];

const portfolioKnowledge = {
  summary:
    "Bhanu is a software developer working across frontend, backend, and AI-powered web applications. He builds responsive React interfaces, backend APIs, dashboards, full-stack projects, automation-friendly tools, and practical products.",
  skills:
    "Core skills: React, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, AI tools, automation, Git, GitHub, responsive UI, UI/UX basics, and problem solving.",
  projects:
    "Highlighted projects:\n- Clayora: full-stack product platform with authentication.\n- Code Trace: code execution visualizer for learning programming flow.\n- Finance Dashboard: responsive analytics dashboard with secure UI patterns.\n- Inventory Dashboard: product tracking and dashboard analytics.\n- EcoSnap: AI-based waste detection and recycling suggestions.\n- CipherSQL Studio: secure SQL/database query project.",
  experience:
    "Experience includes frontend projects, backend-integrated full-stack apps, AI-based hackathon work on EcoSnap, academic and personal projects, and continuous learning through GitHub, DSA practice, and product development.",
  education:
    "Bhanu is pursuing B.Tech in Computer Science and Engineering and has coursework exposure to DSA, DBMS, operating systems, computer networks, software engineering, and web development.",
  contact:
    "You can contact Bhanu through the contact form on this portfolio, email at bhanubasyan@gmail.com, GitHub: github.com/Bhanubasyan, or LinkedIn: linkedin.com/in/bhanu-b82596253/.",
  resume:
    "Use the Download Resume button in the hero section or the Download CV button in About. The resume highlights software development, React, JavaScript, Node.js, backend APIs, AI-based project work, internships, and leadership experience.",
};

const createLocalReply = (input) => {
  const text = input.toLowerCase();

  if (text.match(/project|work|portfolio|build|app|dashboard/)) {
    return portfolioKnowledge.projects;
  }

  if (text.match(/skill|tech|stack|technology|language|framework/)) {
    return portfolioKnowledge.skills;
  }

  if (text.match(/contact|email|hire|call|phone|linkedin|github/)) {
    return portfolioKnowledge.contact;
  }

  if (text.match(/resume|cv|download/)) {
    return portfolioKnowledge.resume;
  }

  if (text.match(/experience|intern|job|hackathon/)) {
    return portfolioKnowledge.experience;
  }

  if (text.match(/education|college|degree|btech|study/)) {
    return portfolioKnowledge.education;
  }

  if (text.match(/about|summary|profile|who|intro|introduce/)) {
    return portfolioKnowledge.summary;
  }

  return `I can help you explore Bhanu's portfolio.\n\nTry asking about frontend, backend, AI projects, skills, experience, resume, education, or contact details.`;
};

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (prompt = message) => {
    const cleanMessage = prompt.trim();
    if (!cleanMessage || loading) return;

    const userMsg = { sender: "user", text: cleanMessage };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: cleanMessage }),
      });

      if (!res.ok) {
        throw new Error("Assistant backend unavailable");
      }

      const data = await res.json();
      const reply = data.reply || createLocalReply(cleanMessage);
      setChat((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: createLocalReply(cleanMessage) },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="assistant-toggle" onClick={() => setOpen(!open)} aria-label="Open assistant">
        <MessageCircle size={23} />
      </button>

      <div className={`assistant-sidebar ${open ? "open" : ""}`}>
        <div className="assistant-header">
          <div>
            <h3>Portfolio Assistant</h3>
            <p className="assistant-subtitle">Ask about frontend, backend, AI, projects, or hiring.</p>
          </div>
          <span onClick={() => setOpen(false)} aria-label="Close assistant" role="button">
            <X size={19} />
          </span>
        </div>

        <div className="assistant-chat-area">
          {chat.length === 0 && (
            <>
              <div className="assistant-message bot">
                Hi, I can answer questions about Bhanu's frontend, backend, AI work, projects, skills, resume, and contact details.
              </div>
              <div className="quick-prompts">
                {quickPrompts.map((prompt) => (
                  <button key={prompt} onClick={() => sendMessage(prompt)}>
                    {prompt}
                  </button>
                ))}
              </div>
            </>
          )}
          {chat.map((msg, idx) => (
            <div
              key={`${msg.sender}-${idx}`}
              className={`assistant-message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="assistant-message bot">Thinking...</div>}
        </div>

        <div className="assistant-input">
          <input
            type="text"
            placeholder="Ask about Bhanu..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button onClick={() => sendMessage()} aria-label="Send message" disabled={loading}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Assistant;
