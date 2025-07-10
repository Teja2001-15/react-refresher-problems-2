import React, { useState } from 'react';
import './App.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!email.includes('@')) errs.email = 'Invalid email';
        if (password.length < 6) errs.password = 'Password must be at least 6 characters';
        return errs;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) alert('Form submitted!');
    };

    return (
        <form className="box" onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            {errors.email && <div className="error">{errors.email}</div>}

            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            {errors.password && <div className="error">{errors.password}</div>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;