import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { TodoProvider } from '../TodoContext';
import '../css/index.css';

function App() {
  return (
    <TodoProvider>
      <Header />
      <Body />
    </TodoProvider>
  );
}

export default App;