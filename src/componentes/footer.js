import React from "react"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;
  text-decoration:none;
  font-family: 'Roboto', sans-serif;
  color:#373737;
}`
const BoxTest = styled.div`
display:flex;
top:50vh;
left:50%;
flex-direction:column;
width:10vw;
`
export default class Footer extends React.Component {
    render() {
       return (
        <BoxTest>
          <GlobalStyle/>
          <h4>SUBSCRIBE</h4>
          <p>Sign up for newsletter</p>
          <input type="text" placeholder="Your Email"/>
          <button>SUBMITE</button>
        </BoxTest>
       )
    }
}
