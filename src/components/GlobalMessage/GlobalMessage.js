import React from 'react'
import {Chip} from 'react-toolbox'
import classes from './GlobalMessage.scss'

function GlobalMessage (props) {
  return (
    <div className={classes.globalMessage}>
      {(() => {
        if (props.message) {
          return <div>
            <Chip onDeleteClick={props.hideMessage} deletable>
              <h4>{props.message}</h4>
            </Chip>
          </div>
        }
      })()}
    </div>
  )
}

GlobalMessage.defaultProps = {
  style: 'info'
}

export default GlobalMessage
