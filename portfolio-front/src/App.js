import React from 'react'
import './App.css';
import Header from './Components/Header'
import Grid from './Components/Grid'
import data from './Components/data'

function App() {
  return (
      <>
        <Header />
        <Grid data={ data }/>
      </>
  );
}

export default App;
