import React from 'react'
import { State } from '../../Context'

// Material-UI
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const Notifications = () => {
  // Get states from context
  const { notifications, setNotifications } = State()

  return (
    <>
      <Snackbar
        open={notifications.emailSent}
        autoHideDuration={3000}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return
          }
          setNotifications({ ...notifications, emailSent: false })
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity={'success'} className='contact__notification'>
          Thank you! I'll get back to you as soon as possible
        </Alert>
      </Snackbar>
      <Snackbar
        open={notifications.emailError}
        autoHideDuration={3000}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return
          }
          setNotifications({ ...notifications, emailError: false })
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity={'error'} className='contact__notification'>
          Something went wrong. Please try again or send me an email at
          felicornejo@gmail.com
        </Alert>
      </Snackbar>
      <Snackbar
        open={notifications.formNotFilled}
        autoHideDuration={3000}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return
          }
          setNotifications({ ...notifications, formNotFilled: false })
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity={'error'} className='contact__notification'>
          Please fill out the form before submitting
        </Alert>
      </Snackbar>
    </>
  )
}

export default Notifications
