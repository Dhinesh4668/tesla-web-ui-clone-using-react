/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
const Headder = () => {
  return (
    <Container>
        <h3>Tesla</h3>
      <Menu>
        <p><a href='#'>Modal 3</a></p>
        <p><a href='#'>Modal S</a></p>
        <p><a href='#'>Modal y</a></p>
        <p><a href='#'>Modal x</a></p>
        <p><a href='#'>Solar roof</a></p>
        <p><a href='#'>Solar Panel</a></p>
        <p><a href='#'>accesseries</a></p>
      </Menu>

      <RightMenu>
        <p><a href='#'>Shop</a></p>
        <p><a href='#'>Accound</a></p>
        <p><a href='#'>Menu</a></p>
      </RightMenu>
    </Container>
  )
}


export default Headder

const Container = styled.div`
      min-height: 60px;
      padding: 0px 20px;
      position: fixed;
      display: flex;
      cursor: pointer;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
`


const Menu = styled.div`
  display: flex;
  padding-left: 100px;
  align-items: center;
  flex: 1;
  justify-content: center;

  p {
    font-weight: 600;
    flex-wrap: nowrap;
    text-transform: capitalize;
    padding: 0px 10px;
  }
`


const RightMenu = styled.div `
  display: flex;

  p {
    font-weight: 600;
    flex-wrap: nowrap;
    text-transform: uppercase;
    padding: 0px 10px;
  }
`