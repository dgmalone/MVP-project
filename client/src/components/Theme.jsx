import React, {useState, createContext } from 'react';

export const Theme = createContext();

const ThemeProvider = ({children})=> {
  const [themeColor, setThemeColor] = useState('blue');
  const handleChange = (event) => {
    setThemeColor(event.target.value)
  }
  return (
    <Theme.Provider value={{ themeColor }}>
      <select name="color" id="color-select" onChange={handleChange}>
        <option value='blue'>Blue</option>
        <option value='orange'>Orange</option>
      </select>
      {children}
    </Theme.Provider>
  )
}

export const colors = {
  blue: '#d9effb',
  orange: '#faebd7'
}


export default ThemeProvider;