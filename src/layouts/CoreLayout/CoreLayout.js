import React from 'react'
import {Layout, NavDrawer, Panel} from 'react-toolbox'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import GlobalMessage from 'components/GlobalMessage'

export const CoreLayout = ({children}) => (
  <Layout>
    <Panel>
      <Header />
      <GlobalMessage />
      {children}
    </Panel>
  </Layout>
)

export default CoreLayout
