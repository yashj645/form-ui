import React from 'react';
import Styled from './styles'

function Navbar() {
  return (
    <Styled.Navbar>
      <Styled.Link href="/">Add Vehicle</Styled.Link>
      <Styled.Link href='/table'>Vehicle List</Styled.Link>
    </Styled.Navbar>
  )
}

export default Navbar