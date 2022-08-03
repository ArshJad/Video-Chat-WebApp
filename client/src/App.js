import React from 'react'
import {AppBar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Notifications from './components/Notifications.jsx'
import Options from './components/Options.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <AppBar div className={classes.appBar} position='static' color='transparent'>
                <Typography variant='h2' align='center' >Video Chat WebApp</Typography>
            </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
        </div>

        
    )
}

export default App