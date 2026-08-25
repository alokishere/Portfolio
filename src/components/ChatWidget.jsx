import React, { useEffect, useRef, useState } from "react";
import socket from "../../socket";
const initialMessages = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I'm Alok's AI assistant. Ask me anything about my skills, projects, experience or tech stack.",
  }
];

const SparkIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2.8 13.9 10.1 21.2 12l-7.3 1.9L12 21.2l-1.9-7.3L2.8 12l7.3-1.9L12 2.8Z" fill="currentColor" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [isOpen, messages]);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  useEffect(() => {
  const handleMessage = (text) => {
    console.log("AI:", text);

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "assistant",
        text,
      },
    ]);
  };

  socket.on("message", handleMessage);

  return () => {
    socket.off("message", handleMessage);
  };
}, []);

  const sendMessage = (event) => {
  event.preventDefault();
  const text = draft.trim();
  if (!text) return;
  setMessages((current) => [
    ...current,
    {
      id: Date.now(),
      role: "user",
      text,
    },
  ]);
  socket.emit("message", text);

  setDraft("");
};

  const clearChat = () => setMessages(initialMessages);

  return (
    <>  
      <button
        type="button"
        aria-label="Open portfolio chat"
        onClick={openChat}
        className={`portfolio-chat-launch ${isOpen ? "portfolio-chat-launch-hidden" : ""}`}
      >
        <span className="portfolio-chat-icon"><SparkIcon /></span>
        <span className="portfolio-chat-placeholder">Ask me anything about my work, skills or experience...</span>
        <span className="portfolio-chat-send-label">Send <ArrowIcon /></span>
      </button>

      <div className={`portfolio-chat-overlay ${isOpen ? "portfolio-chat-overlay-open" : ""}`} aria-hidden={!isOpen}>
        <section className="portfolio-chat-panel" role="dialog" aria-modal="true" aria-label="Chat with Alok AI">
          <header className="portfolio-chat-header">
            <button type="button" onClick={closeChat} className="portfolio-chat-back">
              <span aria-hidden="true">←</span> Back to Portfolio
            </button>
            <div className="portfolio-chat-title">
              <strong>Chat with Alok AI</strong>
              <span><i /> Online</span>
            </div>
            <button type="button" onClick={clearChat} className="portfolio-chat-clear">Clear chat</button>
          </header>

          <div
            ref={messagesRef}
            className="portfolio-chat-messages"
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
          >
            <div className="portfolio-chat-message-list">
              {messages.map((message) => (
                <div key={message.id} className={`portfolio-chat-message-row ${message.role === "user" ? "is-user" : "is-assistant"}`}>
                  {message.role === "assistant" && <span className="portfolio-chat-avatar"><SparkIcon size={14} /></span>}
                  <p className="portfolio-chat-message">{message.text}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="portfolio-chat-composer" onSubmit={sendMessage}>
            <span className="portfolio-chat-icon"><SparkIcon /></span>
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />
            <button type="submit" className="portfolio-chat-submit">Send <ArrowIcon /></button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ChatWidget;
