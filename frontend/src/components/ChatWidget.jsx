import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const GREETING =
  "Hi! I'm the 92 Limo assistant. Ask me about airport transfers, our fleet, service areas, or booking a ride.";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "";

/**
 * Floating AI chat widget. Button sits bottom-right (above the mobile sticky
 * bar); the panel talks to /api/chat, which holds the Anthropic API key
 * server-side. Conversation history is kept in state so the assistant
 * remembers context within the session.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  // History sent to the API: [{role: "user"|"assistant", content: string}]
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (e) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const history = [...messages, { role: "user", content: text }];
    setMessages(history);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) {
        throw new Error(data.detail || "The assistant is unavailable right now.");
      }
      setMessages([...history, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err.message || "Something went wrong. Please call (877) 679-0100.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with 92 Limo Assistant"}
        data-testid="chat-widget-toggle"
        className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-[60] w-14 h-14 rounded-full bg-[#0A0A0A] border border-[#C9A227]/60 shadow-lg shadow-black/40 flex items-center justify-center text-[#C9A227] hover:scale-105 hover:border-[#C9A227] transition-all"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          data-testid="chat-widget-panel"
          className="fixed bottom-[9.5rem] lg:bottom-24 right-4 lg:right-6 z-[60] w-[350px] max-w-[calc(100vw-2rem)] h-[450px] max-h-[65vh] bg-[#0A0A0A] border border-[#C9A227]/40 rounded-2xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#C9A227]/30 bg-gradient-to-r from-[#0A0A0A] to-[#1a1509] flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-pulse" />
            <h3 className="text-sm font-display font-semibold text-white tracking-wide">
              92 Limo Assistant
            </h3>
            <span className="ml-auto text-[10px] uppercase tracking-widest text-[#C9A227]/80">
              Online
            </span>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5">
            <Bubble role="assistant" text={GREETING} />
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} text={m.content} />
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                  <span className="flex gap-1.5" aria-label="Assistant is typing">
                    <Dot delay="0ms" />
                    <Dot delay="150ms" />
                    <Dot delay="300ms" />
                  </span>
                </div>
              </div>
            )}
            {error && (
              <p className="text-xs text-red-400 px-1" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={send}
            className="p-3 border-t border-[#C9A227]/30 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rides, rates, fleet…"
              maxLength={2000}
              data-testid="chat-widget-input"
              className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C9A227]/70"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              data-testid="chat-widget-send"
              className="w-10 h-10 shrink-0 rounded-full gold-gradient text-[#0A0A0A] flex items-center justify-center disabled:opacity-40 hover:brightness-110 transition-all"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap rounded-2xl ${
          isUser
            ? "gold-gradient text-[#0A0A0A] rounded-br-sm font-medium"
            : "bg-white/10 text-white rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function Dot({ delay }) {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-bounce"
      style={{ animationDelay: delay }}
    />
  );
}
