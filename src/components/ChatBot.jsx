import React, { useState } from 'react';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setConversationStarted(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? '#333' : '#fff', 
      color: isDarkMode ? '#fff' : '#000', 
      padding: '20px', 
      width: '100%',
    }}>
      <button onClick={toggleDarkMode} style={{ marginBottom: '10px' }}>
        {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
      </button>
      {conversationStarted && (
        <div style={{
          maxHeight: '300px',
          overflowY: 'auto',
          marginBottom: '10px',
          padding: '10px',
          backgroundColor: isDarkMode ? '#444' : '#f9f9f9'
        }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
              <strong style={{ color: msg.sender === 'user' ? '#3f51b5' : '#f44336' }}>
                {msg.sender === 'user' ? 'Vous' : 'Bot'}: 
              </strong>{msg.text}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSend} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tapez votre message..."
          required
          style={{ flex: 1, padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{
          backgroundColor: '#3f51b5',
          color: 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          ➔
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
