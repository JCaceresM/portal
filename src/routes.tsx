import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PATH_HOME, PATH_LOGIN, PATH_PROFILE } from './constant/routes'
import home from './pages/home'
import Login from './pages/Login'
import profile from './pages/profile'
import ProtectedRoutesWrapper from './pages/protectedRoutersWrapper.tsx/ProtectedRoutesWrapper'


const Routes = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH_LOGIN} component={Login} />
        <ProtectedRoutesWrapper>
       
        <Route exact path={PATH_HOME} component={home} />
        <Route exact path={PATH_PROFILE} component={profile} />
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
