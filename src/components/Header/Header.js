import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { IndexLink, Link } from 'react-router'

export const Header = () => (
  <AppBar title='Admin' leftIcon='menu'>
    <Navigation type='horizontal'>
      <IndexLink to='/' activeClassName='route--active'>
        Home
      </IndexLink>
      {' · '}
      <Link to='/bank-file-uploads' activeClassName='route--active'>Bank file uploads</Link>
      {' · '}
      <Link to='/financial-facts' activeClassName='route--active'>Inbox</Link>
    </Navigation>
  </AppBar>
)

export default Header
