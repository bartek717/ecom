import React, { useState, useEffect } from 'react';
import '../styles/TypingText.css'; // import the CSS file that contains the styling for the span element

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const texts = ['Websites', 'Facebook Ads', 'Social Media Content', 'Email Marketing', 'Chatbots', 'Product'];
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[index].slice(0, text.length + 1));
    }, 100);

    if (text === texts[index]) {
      clearInterval(interval);

      setTimeout(() => {
        setText('');
        setIndex((index + 1) % texts.length);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [index, text, texts]);

  return (
    <span className="typing-text">{text}</span>
  );
};

export default TypingText;