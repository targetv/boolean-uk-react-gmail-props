import { useState } from 'react'

function Header(props) {
  // function emailFilter(targetEmail) {
  //   const updatedArray = []

  //   for (const email of props.emails) {
  //     if (email.title === targetEmail) {
  //       console.log(email)
  //       return updatedArray.push(email)
  //     }
  //     updatedArray.push(email)
  //   }
  //   return (filteredEmails = updatedArray)
  // }

  return (
    <header className="header">
      <div className="left-menu">
        <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="gmail logo"
        />
      </div>

      <form
        className="search"
        // onSubmit={e => {
        //   e.preventDefault()
        //   if (emailFilterInput.length > 0) {
        //     const filteredEmails = props.emails.filter(
        //       email => email.title === emailFilterInput
        //     )
        //     props.setEmails(filteredEmails)
        //     setFilterInput('')
        //   } else {
        //     props.setEmails(props.initialEmails)
        //   }
        //   setFilterInput('')
        // }}
      >
        <input
          className="search-bar"
          placeholder="Search mail"
          value={props.emailFilterInput}
          onChange={e => props.setFilterInput(e.target.value)}
        />
      </form>
    </header>
  )
}

export default Header
