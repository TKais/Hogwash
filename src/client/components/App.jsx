import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Toggle from './Toggle.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  function handleThemeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const bodyClasses = document.body.classList;
    if (bodyClasses.value) {
      bodyClasses.replace(bodyClasses.value, theme);
    } else {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <div>
      <Header headerText="Hogwash" />
      <Search />
      <Toggle onClick={handleThemeChange} />
    </div>
  );
}

export default App;
