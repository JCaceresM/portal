import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PATH_CLASS_SCHEDULE, PATH_HOME, PATH_INSCRIPTION, PATH_LOGIN, PATH_PENSUM, PATH_PRE_ENROLLMENT, PATH_PROFILE, PATH_SCORE } from './constant/routes'
import classSchedule from './pages/classSchedule'
import Home from './pages/home'
import Inscription from './pages/Inscription'
import Login from './pages/Login'
import Pensum from './pages/Pensum'
import preEnrollment from './pages/preEnrollment'
import profile from './pages/profile'
import ProtectedRoutesWrapper from './pages/protectedRoutersWrapper.tsx/ProtectedRoutesWrapper'
import Score from './pages/score'


const Routes = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH_LOGIN} component={Login} />
        <ProtectedRoutesWrapper>
        <Route exact path={PATH_HOME} component={Home} />
        <Route exact path={PATH_PROFILE} component={profile} />
        <Route exact path={PATH_PRE_ENROLLMENT} component={preEnrollment} />
        <Route exact path={PATH_CLASS_SCHEDULE} component={classSchedule} />
        <Route exact path={PATH_SCORE} component={Score} />
        <Route exact path={PATH_PENSUM} component={Pensum} />
        <Route exact path={PATH_INSCRIPTION} component={Inscription} />
        </ProtectedRoutesWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
