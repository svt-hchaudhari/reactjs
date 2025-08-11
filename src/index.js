import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
}

ReactDOM.render(
  <React.StrictMode>
    {/* Application content will be rendered here */}
  </React.StrictMode>,
  document.getElementById('root')
);