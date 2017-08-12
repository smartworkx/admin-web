import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { IndexLink, Link } from 'react-router'

export const Header = () => (
  <AppBar title='Admin' leftIcon='menu'>
    <Navigation type='horizontal'>
      <IndexLink to='/' activeClassName='route--active'>Inbox</IndexLink>
      {' · '}
      <Link to='/bank-file-uploads' activeClassName='route--active'>Bank file uploads</Link>
      {' · '}
      <Link to='/vat-declarations' activeClassName='route--active'>Value added tax declarations</Link>
      {' · '}
      <Link to='/journal' activeClassName='route--active'>Journal</Link>
      {' · '}
      <Link to='/ledger' activeClassName='route--active'>Ledger</Link>
      {' · '}
      <Link to='/balances' activeClassName='route--active'>Balance</Link>
      {' · '}
      <Link to='/profit-and-loss-statements' activeClassName='route--active'>Profit and loss statement</Link>
    </Navigation>
  </AppBar>
)

export default Header
