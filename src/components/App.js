import React from 'react';

import { Sidebar } from '.';
import { Content } from '.';

const App = () => {
  return (
    <main className="container">
      <Sidebar />
      <Content />
    </main>
  );
};

export default App;
