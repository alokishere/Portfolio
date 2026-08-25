import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import socket from "../../socket";
const initialMessages = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I'm Alok's AI assistant. Ask me anything about my skills, projects, experience or tech stack.",
  }
];

const formatAssistantContent = (text) => {
  if (typeof text !== "string") return "";
  const trimmed = text.trim();

  // If already wrapped in markdown code block, return as is
  if (trimmed.startsWith("```") && trimmed.endsWith("```")) {
    return text;
  }

  // Auto-detect raw JSON objects or arrays and format as fenced json block
  if (
    (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
    (trimmed.startsWith("[") && trimmed.endsWith("]"))
  ) {
    try {
      const parsed = JSON.parse(trimmed);
      return "```json\n" + JSON.stringify(parsed, null, 2) + "\n```";
    } catch {
      return "```json\n" + trimmed + "\n```";
    }
  }

  return text;
};

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
        className={`portfolio-chat-launch fixed z-60 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-5 flex items-center w-[min(calc(100%-2rem),62rem)] min-h-14 sm:min-h-16 px-4 py-3 gap-3 text-left text-slate-600 rounded-[1.35rem] cursor-text isolate backdrop-blur-xl transition-all duration-300 ease-out bg-gradient-to-r from-white/80 to-slate-100/60 border border-white/80 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.42),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(148,163,184,0.12)] hover:border-white hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.5),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(148,163,184,0.16)] ${
          isOpen ? "opacity-0 pointer-events-none translate-y-4 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <span className="inline-flex shrink-0 text-gray-900"><SparkIcon /></span>
        <span className="min-w-0 flex-1 truncate text-sm text-slate-600">Ask me anything about my work, skills or experience...</span>
        <span className="hidden sm:inline-flex items-center gap-1.5 shrink-0 text-xs font-medium text-gray-900">Send <ArrowIcon /></span>
      </button>

      <div
        className={`fixed inset-0 z-100 flex items-end justify-center transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto bg-slate-900/20" : "opacity-0 pointer-events-none bg-slate-900/0"
        }`}
        aria-hidden={!isOpen}
      >
        <section
          className={`flex flex-col w-full h-full overflow-hidden text-gray-900 bg-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-y-0 scale-100" : "translate-y-8 scale-[0.98]"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Alok AI"
        >
          <header className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[1fr_auto_1fr] items-center min-h-[4.75rem] px-4 sm:px-8 md:px-16 py-3.5 sm:py-4 border-b border-slate-100">
            <button
              type="button"
              onClick={closeChat}
              className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-gray-900 transition-colors"
            >
              <span aria-hidden="true" className="text-base sm:text-sm">←</span>
              <span className="hidden sm:inline">Back to Portfolio</span>
            </button>
            <div className="flex flex-col items-center gap-1 whitespace-nowrap">
              <strong className="text-sm font-semibold text-gray-900">Chat with Alok AI</strong>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                <i className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
              </span>
            </div>
            <button
              type="button"
              onClick={clearChat}
              className="text-xs font-medium text-slate-500 hover:text-gray-900 justify-self-end transition-colors"
            >
              Clear chat
            </button>
          </header>

          <div
            ref={messagesRef}
            className="flex-1 min-h-0 h-0 overflow-x-hidden overflow-y-auto overscroll-contain touch-pan-y px-4 pt-5 sm:pt-8 pb-12"
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-5 w-full max-w-3xl mx-auto min-w-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2.5 min-w-0 max-w-[92%] sm:max-w-[85%] ${
                    message.role === "user" ? "self-end ml-auto" : "self-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <span className="inline-flex items-center justify-center w-7 h-7 shrink-0 rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm">
                      <SparkIcon size={14} />
                    </span>
                  )}
                  {message.role === "assistant" ? (
                    <div className="portfolio-chat-markdown min-w-0 max-w-full overflow-hidden px-4 py-3.5 rounded-2xl rounded-bl-sm border border-slate-100 bg-slate-50 text-slate-700 text-sm leading-relaxed [overflow-wrap:anywhere]">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                      >
                        {formatAssistantContent(message.text)}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="min-w-0 max-w-full px-4 py-3.5 rounded-2xl rounded-br-sm border border-gray-900 bg-gray-900 text-white text-sm leading-relaxed [overflow-wrap:anywhere]">
                      {message.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form
            className="flex items-center gap-3 w-[min(calc(100%-2rem),48rem)] min-h-16 mx-auto mb-5 px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-[0_12px_30px_-25px_rgba(15,23,42,0.5)]"
            onSubmit={sendMessage}
          >
            <span className="inline-flex shrink-0 text-gray-900"><SparkIcon /></span>
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
              className="min-w-0 flex-1 outline-none text-sm text-gray-900 placeholder:text-slate-400 bg-transparent"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium text-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
            >
              Send <ArrowIcon />
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ChatWidget;
