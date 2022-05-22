// import from react allows us to use JSX syntax - js + xml
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    // document.getElementById('root')
);
