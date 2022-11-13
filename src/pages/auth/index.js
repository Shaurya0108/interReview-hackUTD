import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { path } from 'utils/const'
import Login from './Login'
import Signup from './Signup'
import ResetPassword from './ResetPassword'
import styles from './auth.module.scss'

const Auth = () => (
  <div className={styles.root}>
    <div className={styles.leftContainer}>
      <h1 className={styles.header}>inteRview</h1>
      <p className={styles.title}>title</p>
      <p className={styles.description}>
        description
      </p>
      <p className={styles.prompt}>description 2</p>
    </div>
    <div className={styles.rightContainer}>
      <Switch>
        <Route path={path.login}>
          <Login />
        </Route>
        <Route path={path.signup}>
          <Signup />
        </Route>
        <Route path={path.resetPassword}>
          <ResetPassword />
        </Route>
        <Redirect to={path.login} />
      </Switch>
    </div>
  </div>
)

export default Auth
