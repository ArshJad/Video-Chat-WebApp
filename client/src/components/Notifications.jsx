import React, { useContext } from 'react'
import { Button } from '@material-ui/core'

import { SocketContext } from '../SocketContext'

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext)

  //On receiving call, Notifications.jsx is rendered into the webpage with the name of the user calling.
  //Provided the conditions specified in the SocketContext files are met.
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  )
}

export default Notifications