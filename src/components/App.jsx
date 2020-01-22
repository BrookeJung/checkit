import React from 'react'
import CheckContainer from '../containers/CheckContainer'
import { Route, Switch } from 'react-router-dom'
import Map from '../pages/Map'
import HeaderContainer from '../containers/HeaderContainer'
import LoginContainer from '../containers/LoginContainer'
import Logout from './Logout'
function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={CheckContainer} />
        <Route path="/map" component={Map} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </>
  )
}

export default App
