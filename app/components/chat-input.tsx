"use client";
import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa";
import styles from "./cht-input.module.css";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [displayText, setDisplayText] = useState("Qu'est-ce que je peux faire pour vous ?");
  const [messages, setMessages] = useState<Message[]>([]);
  const [botTyping, setBotTyping] = useState(false);

  const handleSubmit = () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    // Add user's message
    const userMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setDisplayText("");

    // Simulate bot response typing
    setBotTyping(true);
    const staticResponse = "This is a simulated response to your request.";
    let index = 0;

    const interval = setInterval(() => {
      if (index < staticResponse.length) {
        const botMessage: Message = {
          role: "bot",
          content: staticResponse.slice(0, index + 1),
        };
        setMessages((prev) => [...prev.slice(0, -1), botMessage]);
        index++;
      } else {
        clearInterval(interval);
        setBotTyping(false);
      }
    }, 50);

    // Add placeholder bot message
    setMessages((prev) => [
      ...prev,
      { role: "bot", content: "" }, // Placeholder to animate typing
    ]);
  };

  return (
    <div className={styles.container}>
      {displayText && <h2 className={styles.typewriter}>{displayText}</h2>}
      <div className={styles.conversation}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.role === "user" ? styles.user : styles.bot
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className={styles.chatBox}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <button onClick={handleSubmit} className={styles.iconButton}>
          <FaPaperPlane size={20} className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
