import React from 'react';
import Counter from './Counter';
import TextInputMirror from './TextInputMirror';
import ThemeToggler from './ThemeToggler';
import FilterableList from './FilterableList';
import LoginForm from './LoginForm';
import CharacterCounter from './CharacterCounter';

function App() {
    return (
        <>
        <div>
            <Counter />
            <TextInputMirror />
            <ThemeToggler />
            <FilterableList />
            <LoginForm />
            <CharacterCounter />
        </div>
        </>
    );
}

export default App;