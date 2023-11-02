import React, { useState } from 'react';

export default function TextAreaCoverLetter({ onTextareaChange }) {
  const [textareaContent, setTextareaContent] = useState('');

  const handleTextareaChange = (e) => {
    const newContent = e.target.value;
    setTextareaContent(newContent);

    
    if (newContent.trim() === '') {
    
      alert('The cover letter cannot be empty');
      return;
    }

    onTextareaChange(newContent);
  };

  return (
    <div>
      <form>
        <textarea onChange={handleTextareaChange} value={textareaContent} />
      </form>
    </div>
  );
}
