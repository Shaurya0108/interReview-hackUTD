import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from 'slices/app.slice'
import Spinner from 'components/Spinner'

const Dashboard = React.lazy(() => import('./pages/dashboard'))

function Router() {
  const dispatch = useDispatch()
  const { checked } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(actions.authenticate())
  }, [])

  if (!checked) {
    return (
      <div className="app-loader-container">
        <Spinner size="4rem" color="white" isLoading />
      </div>
    )
  }

  return (
    <Dashboard />
  )
}

export default Router
