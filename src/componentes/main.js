import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import cake from "../midia/Cake.png"
import pizza from "../midia/Pizza.png"
import milk from "../midia/Milk.png"
const Background = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100vh;
margin-top:10vh;
background-color:#F2F4F1;
`
const SubtitleContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Subtitle = styled.h2`
text-transform: uppercase;
font-size:40px;
`
const Underline = styled.div`
border-bottom:#373737 solid 6px;
width: 104px;
height: 0px;
`
const FlyerContainer = styled.div`
width:100%;
height:80vh;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`
const FlyerBolo = styled.div`
display:flex;
justify-content:center;
margin:50px;
width:20vw;
height:60vh;
background-color:white;
box-shadow: 0 0 1em black;
`
const FlyerBoloImg = styled.img`
width:20vw;
height:30vh;
`
const FlyerPizza = styled.div`
margin:50px;
width:20vw;
height:60vh;
background-color:white;
box-shadow: 0 0 1em black;
`
const FlyerPizzaImg = styled.img`
width:20vw;
`
const FlyerMilk = styled.div`
margin:50px;
width:20vw;
height:60vh;
background-color:white;
box-shadow: 0 0 1em black;
`
const FlyerMilkImg = styled.img`
width:20vw;
`
export default class Main extends React.Component{
render(){
    return(
        <Background>
            <SubtitleContainer>
            <Subtitle>latest Recipies</Subtitle>
            <Underline></Underline>
        </SubtitleContainer>
        <FlyerContainer>
            <FlyerBolo><FlyerBoloImg src={cake} alt="Cake flyer"/></FlyerBolo>
            <FlyerPizza><FlyerPizzaImg src={pizza} alt="Pizza flyer"/></FlyerPizza>
            <FlyerMilk><FlyerMilkImg src={milk} alt="Milk flyer"/></FlyerMilk>
        </FlyerContainer>
        </Background>
        
    )
}
}