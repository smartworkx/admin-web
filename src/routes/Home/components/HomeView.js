import React from 'react'
import './HomeView.scss'
import FinancialFactForm from 'forms/FinancialFactForm'
import CreateJournalEntryForm from 'forms/JournalEntryForm'


export const HomeView = () => (
  <div>
    <h4>Welcome</h4>
    <FinancialFactForm />
  </div>
)

export default HomeView
