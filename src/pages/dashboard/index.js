import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import { images } from 'theme'
import styles from './dashboard.module.scss'


const Dashboard = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.app)
  return (
      <div className={styles.container}>
        <img src={images.logo} className={styles.logo} alt="logo" />
        <h3 className={styles.greeting}>{`Hi👋, ${me?.fullName || 'User'}`}</h3>
        <p className={styles.description}>
          Upload an interview that you want reviewed by the community of Students and Professionals
        </p>
        <div className={styles.buttonContainer}>
          <Button
            label="Browse"
            className={`btn-purple-fill ${styles.download}`}
            onClick={() => dispatch(actions.logout())}
          />
          <Button
            label="Upload an Interview"
            className={`btn-purple-outline ${styles.logout}`}
            onClick={() => dispatch(actions.logout())}
          />
        </div>
      </div>
  )
}


Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
