import React from 'react';
import Header from './Header.jsx';
import TextInput from './TextInput.jsx';

function App() {
  return (
    <div>
      <Header headerText="Hogwash" />
      <TextInput ariaLabel="Type a search query" />
    </div>
  );
}

export default App;
