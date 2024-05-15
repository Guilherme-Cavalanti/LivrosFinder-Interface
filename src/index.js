import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeFunctions } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeFunctions>
        <App />
    </ThemeFunctions>
);


