import React, { useState } from 'react';
import './App.css';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Orange'];

function FilterableList() {
    const [query, setQuery] = useState('');

    const filtered = fruits.filter(fruit =>
        fruit.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="box">
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search fruits..." />
            <ul>
                {filtered.map((fruit, idx) => (
                    <li key={idx}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterableList;