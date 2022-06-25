import React from "react"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import Instagram from "../midia/Instagram.png"
import Twitter from "../midia/Twitter.png"
import Facebook from "../midia/Facebook.png"
import Pinterest from "../midia/Pinterest.png"

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
const BoxTest = styled.section`
width:100%;
height:auto;
text-align: center;
`
const ContainerSubscribe = styled.div`
background-color:#DFE4DE;
width:100%;
height: 80vh;
padding-top: 20vh;
`
const Title = styled.h4`
font-size: 1.65rem;
margin-bottom: 2vh;
`
const Text = styled.p`
font-size: 1.4rem;
`
const Busca = styled.input`
background-color: #EFF1EE;
border: none;
height: 10vh;
width: 35vw;
padding-left: 2.5vw;
margin-top: 2vh;
`
const Botão = styled.button`
width: 10vw;
height: 7vh;
margin-top: 3vh;
border: solid 3px black;
font-size: 1rem;
`
const ContainerSociais = styled.section`
background-color: #F2F4F1;
height: 40vh;
width:100%;
display: flex;
align-items:center;
`
const Icons = styled.div` 
display: flex; 
justify-content: space-evenly;
width: 20vw;  
margin-left: 3vw;
`
const Images = styled.img`
width: 2.5vw;
`
const ContainerList = styled.ul`
display:flex;
width: 30vw;
align-items:center;
margin-left: 40vw;
justify-content:space-evenly;
`
const List = styled.li`
font-size:3vh;
font-weight: 300;
cursor:pointer;
text-transform: uppercase;
`
const Rodapé = styled.div`
background-color: #446061;
height: 8vh;
display: flex;
align-items: center;
`
const TextRod = styled.p`
font-size: 2vh;
width: 100vw;
`
export default class Footer extends React.Component {
  render() {
    return (
      <BoxTest>
        <GlobalStyle />
        <ContainerSubscribe>
          <Title>SUBSCRIBE</Title>
          <Text>Sign up for newsletter</Text>
          <Busca type="text" placeholder="Your Email" />
          <div>
            <Botão>SUBMIT</Botão>
          </div>
        </ContainerSubscribe>
        <ContainerSociais>
          <Icons>
            <Images src={Instagram} />
            <Images src={Twitter} />
            <Images src={Facebook} />
            <Images src={Pinterest} />
          </Icons>
          <ContainerList>
          <List>ABOUT</List>
          <List>RECIPIES</List>
          <List>SUBSCRIBE</List>
          </ContainerList>
        </ContainerSociais> 
        <Rodapé>
          <TextRod>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</TextRod>
        </Rodapé> 
      </BoxTest>
    )
  }
}
