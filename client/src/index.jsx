import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import ThemeProvider from './components/Theme.jsx';
ReactDOM.render(
  <ThemeProvider><App props={5}/></ThemeProvider>,
  document.getElementById('app')
)