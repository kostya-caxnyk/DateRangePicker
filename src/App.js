import React from 'react';

import { Sidebar } from './components';
import { Content } from './components';

const App = () => {
  return (
    <main className="container">
      <Sidebar />
      <Content />
    </main>
  );
};

export default App;
