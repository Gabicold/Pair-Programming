import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import fundo from "../midia/background.png"
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;
  text-decoration:none;
  font-family: 'Roboto', sans-serif;
  color:#373737;
}
`
const Container = styled.section`
width:100%;
height:140vh; 
background-image:url(${fundo});
background-repeat: no-repeat;
background-size:cover;

`
const ContainerHeader = styled.div`
width:90vw;
height:15vh;
display:flex;
align-items:center;
justify-content: space-between;

`
const ContainerList = styled.ul`
    display:flex;
    
`
const List = styled.li`
   display:flex;
   align-items:center;
   justify-content:center;
    margin-right:2vw;
   font-size:30px;
   font-weight: 300;
   width:10vw;
   height:6vh;
   cursor:pointer;
   text-transform: uppercase;
   &:hover{
    border:solid 3px #373737;
   }
`
const Subtitle = styled.h2`
font-size:48px;
margin-left:5vw;

`
const Title = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Titulo = styled.h1`
margin-top:60vh;
font-family: 'Roboto', sans-serif;
font-size:10rem;
color:#373737;
`

export default class Header extends React.Component{
    
    render(){
        return(
            <Container>
                <GlobalStyle/>
                <ContainerHeader>
                    <Subtitle>RC</Subtitle>
                <nav>
                <ContainerList>
                    <List>ABOUT</List>
                    <List>RECIPIES</List>
                    <List>SUBSCRIBE</List>
                </ContainerList>
            </nav>
                </ContainerHeader>
            <Title>
                <Titulo>Recipies</Titulo>
            </Title>
            </Container>
        )
    }
}