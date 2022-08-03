import React from 'react'
import {Grid, Typography, Paper } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {SocketContext} from '../SocketContext'
import { useContext } from 'react'

//makeStyles from material ui to render CSS using javascript
const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
          width: '300px',
        },
      },
      gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
        },
      },
      paper: {
        padding: '10px',
        backgroundColor: 'transparent',
      },
}))

//Videoplayer function is implemented using data from SocketContext and UI from useStyles function 
const VideoPlayer = () => {
  const {name, callAccepted, callEnded, myVideo, userVideo, stream, call} = useContext(SocketContext);
    const classes = useStyles()
    return (
        <Grid container className={classes.gridContainer}>
            {/* Our Video */}
            {
              stream && (
              <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                  <Typography varaint='h5' gutterBottom>{name || 'Name'}</Typography>
                  <video playsInline muted ref={myVideo} autoplay className={classes.video} />
                </Grid>
              </Paper>
            )}
            {/* User Video */}
            {callAccepted && !callEnded && (
            <Paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                <video playsInline ref={userVideo} autoPlay className={classes.video} />
              </Grid>
            </Paper>
      )} 
        </Grid>
    )
}

export default VideoPlayer