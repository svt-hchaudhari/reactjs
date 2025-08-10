import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;