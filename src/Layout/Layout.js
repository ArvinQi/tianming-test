import React from 'react';
import './Layout.css';

function App({children}) {
  return (
    <div className="layout">
      <header className="layout-header">
        I am Layout
      </header>
      {children}
    </div>
  );
}

export default App;
