import React from 'react'
import CheckContainer from '../containers/CheckContainer'
import { Route } from 'react-router-dom'
import MapDisplay from '../pages/MapDisplay'
import Header from '../pages/Header'
function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={CheckContainer} />
      <Route path="/map" component={MapDisplay} />
    </>
  )
}

export default App
