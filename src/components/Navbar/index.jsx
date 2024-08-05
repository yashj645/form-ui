import React from 'react';
import Styled from './styles'

function Navbar() {
  return (
    <Styled.Navbar>
      <Styled.Link href="/">Form</Styled.Link>
      <Styled.Link href='/table'>Table</Styled.Link>
    </Styled.Navbar>
  )
}

export default Navbar