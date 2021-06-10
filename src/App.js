import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './components/Header'
import Nav from './components/NavMenu'
import Emails from './components/Emails'

import './App.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  // New array loop

  const getReadEmails = emails => emails.filter(email => !email.read)

  const getStarredEmails = emails => emails.filter(email => email.starred)

  let filteredEmails = emails

  // let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header
        emails={emails}
        setEmails={setEmails}
        initialEmails={initialEmails}
      />
      <Nav
        emails={emails}
        setHideRead={setHideRead}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        hideRead={hideRead}
      />
      <Emails filteredEmails={filteredEmails} setEmails={setEmails} />
    </div>
  )
}

export default App
