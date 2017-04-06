import React from 'react'
import {Button, IconButton} from 'react-toolbox/lib/button';
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
      <Button icon='bookmark' label='Bookmark' accent />
  </div>
)

export default HomeView
