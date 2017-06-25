import React from 'react'
import classes from './BankFileUploads.scss'
import { Button } from 'react-toolbox'

export const BankFileUploads = (props) => (
  <div>
    <h1>Bank file uploads</h1>
    <div className={classes.uploadPanel}>
      <form>
        <input type='file' onChange={e => {
          props.handleFileSelect(e.target.files[0])
        }} />
        <Button label='Upload' onClick={e => props.upload(props.file)} raised primary />
      </form>
    </div>
  </div>
)

export default BankFileUploads
