import React from 'react'

// const Header = (props) => {
const Header = ({ title }) => {
  return (
    <header>
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Janushankan"
}
export default Header