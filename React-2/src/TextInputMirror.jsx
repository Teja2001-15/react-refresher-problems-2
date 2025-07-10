import React, { useState } from 'react';
import './App.css';

function TextInputMirror() {
    const [text, setText] = useState('');

    return (
        <div className="box">
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type something..." />
            <p>Mirror: {text}</p>
        </div>
    );
}

export default TextInputMirror;