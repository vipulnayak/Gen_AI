import React, { useState } from 'react';

export default function Land() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: Math.random(),
        text: input,
        role: 'user',
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  // Mock data for database collection
  const databaseCollection = [
    { id: 1, name: 'User Data' },
    { id: 2, name: 'Messages' },
    { id: 3, name: 'Settings' },
    { id: 4, name: 'Logs' },
  ];

  // Mock data for search history
  const searchHistory = [
    'React hooks',
    'Tailwind CSS',
    'JavaScript async',
    'React performance',
  ];

  return (
    <div className="h-screen flex">
      {/* Left side */}
      <div className="w-1/3 bg-gray-100 flex flex-col">
        {/* Database collection */}
        <div className="h-1/2 p-4 border-b">
          <h2 className="text-lg font-semibold mb-2">Database Collection</h2>
          <div className="h-[calc(100%-2rem)] overflow-auto">
            <ul>
              {databaseCollection.map((item) => (
                <li key={item.id} className="py-2 px-3 hover:bg-gray-200 rounded cursor-pointer">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Search history */}
        <div className="h-1/2 p-4">
          <h2 className="text-lg font-semibold mb-2">Search History</h2>
          <div className="h-[calc(100%-2rem)] overflow-auto">
            <ul>
              {searchHistory.map((search, index) => (
                <li key={index} className="py-2 px-3 hover:bg-gray-200 rounded cursor-pointer flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {search}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right side - Chat box and Info */}
      <div className="w-2/3 bg-white flex flex-col">
        {/* Chat box */}
        <div className="flex-grow flex flex-col">
          <div className="bg-gray-200 p-4 text-center font-semibold">Chatbot</div>
          <div className="flex-grow p-4 overflow-auto">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow mr-2 p-2 border rounded"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded">
              Send
            </button>
          </div>
        </div>

        {/* Info container */}
        <div className="bg-gray-100 p-4 flex">
          <div className="w-1/2 pr-2">
            <h2 className="text-lg font-semibold mb-2">User Context</h2>
            <ul className="list-disc pl-5">
              <li>Name: John Doe</li>
              <li>Age: 30</li>
              <li>Location: New York</li>
            </ul>
          </div>
          <div className="w-1/2 pl-2">
            <h2 className="text-lg font-semibold mb-2">DB State</h2>
            <ul className="list-disc pl-5">
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