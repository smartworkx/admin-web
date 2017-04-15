import React from 'react'
import {Snackbar} from 'react-toolbox'
import classes from './GlobalMessage.scss'

function GlobalMessage(props) {
  return (
    <div className={classes.globalMessage}>
      {(() => {
        if (props.message) {
          return <Snackbar
            action='Dismiss'
            active={props.message !== null}
            label={props.message}
            timeout={5000}
            onClick={props.hideMessage}
            onTimeout={props.hideMessage}
            type='cancel'
          />
        }
      })()}
    </div>
  )
}

GlobalMessage.defaultProps = {
  style: 'info'
}

export default GlobalMessage
