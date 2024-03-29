import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
