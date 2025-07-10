import React, { useState } from 'react';
import './App.css';

function CharacterCounter() {
    const [text, setText] = useState('');
    const limit = 100;

    return (
        <div className="box">
      <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write something..."
      />
            <div>Characters: {text.length}/{limit}</div>
            {text.length > limit && <div className="warning">Character limit exceeded!</div>}
        </div>
    );
}

export default CharacterCounter;