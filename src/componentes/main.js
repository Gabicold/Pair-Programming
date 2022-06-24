import React from "react"
import styled  from "styled-components"
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
//Flyer
const FlyerContainer = styled.div`
width:100%;
height:80vh;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`
//Flyer bolo
const FlyerBolo = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:50px;
width:20vw;
height:60vh;
background-color:white;
box-shadow: 0 0 1em black;
`

const FlyerBoloImg = styled.img`
width:20vw;
height:15vw;
`
const LinhaBolo = styled.div`
border-bottom:#373737 solid 6px;
width: 104px;
height: 0px;
position:relative;
    top:13vh;
`
const TextoBolo = styled.p`
position:relative;
    top:15vh;
font-size:1.5rem;
`
//Flyer Pizza
const FlyerPizza = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:50px;
width:20vw;
height:60vh;
background-color:white;
box-shadow: 0 0 1em black;
`
const FlyerPizzaImg = styled.img`
width:20vw;
height:15vw;
`
const LinhaPizza = styled.div`
border-bottom:#373737 solid 6px;
width: 104px;
height: 0px;
position:relative;
    top:13vh;
`
const TextoPizza = styled.p`
position:relative;
    top:15vh;
font-size:1.5rem;
`
//Flyer Milk
const FlyerMilk = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:50px;
width:20vw;
height:60vh;
background-color:white;
box-shadow: 0 0 1em black;
`
const FlyerMilkImg = styled.img`
width:20vw;
height:15vw;
`
const LinhaMilk = styled.div`
border-bottom:#373737 solid 6px;
width: 104px;
height: 0px;
position:relative;
    top:13vh;
`
const TextoMilk = styled.p`
position:relative;
    top:15vh;
font-size:1.5rem;
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
            <FlyerBolo>
                <FlyerBoloImg src={cake} alt="Cake flyer"/>
                <LinhaBolo></LinhaBolo>
                <TextoBolo>Red Velvet Cake</TextoBolo>
            </FlyerBolo>
            <FlyerPizza>
                <FlyerPizzaImg src={pizza} alt="Pizza flyer"/>
                <LinhaPizza></LinhaPizza>
                <TextoMilk>Margherita Pizza</TextoMilk>
            </FlyerPizza>
            <FlyerMilk>
                <FlyerMilkImg src={milk} alt="Milk flyer"/>
                <LinhaMilk></LinhaMilk>
                <TextoPizza>Peanut Smoothie</TextoPizza>
            </FlyerMilk>
        </FlyerContainer>
        </Background>
        
    )
}
}