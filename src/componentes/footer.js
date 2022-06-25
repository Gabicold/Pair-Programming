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
export default class Footer extends React.Component {
    render() {
       return (
        <div>
          <GlobalStyle/>
          <h4>SUBSCRIBE</h4>
          <p>Sign up for newsletter</p>
          <input type="text" placeholder="Your Email"/>
          <button>SUBMITE</button>
        </div>
       )
    }
}
