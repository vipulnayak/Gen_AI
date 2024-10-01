import React, { useState } from 'react';
import './ChatBox.css';

function Land() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    const newMessage = {
      id: Math.random(),
      text: input,
      role: 'user',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="page-container">
      <div className="left-container">
        <div className="Land-container">
          <div className="chat-header">Chatbot</div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={message.role === 'user' ? 'user-message' : 'bot-message'}>
                <span>{message.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="info-container">
          <div className="user-context">
            <h2>User Context</h2>
            <ul>
              <li>Name: John Doe</li>
              <li>Age: 30</li>
              <li>Location: New York</li>
            </ul>
          </div>
          <div className="db-state">
            <h2>DB State</h2>
            <ul>
              <li>Database: MySQL</li>
              <li>Connected: true</li>
              <li>Rows: 1000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Land;