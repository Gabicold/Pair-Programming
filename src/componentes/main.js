import React from "react"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import cake from "../midia/Cake.png"
import pizza from "../midia/Pizza.png"
import milk from "../midia/Milk.png"
import spoon from "../midia/Spoon.png"

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
const Background = styled.section`
display:flex;
flex-direction:column;
width:100%;
min-height:100vh;
height: auto;
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
font-size:30px;
`
const Underline = styled.div`
border-bottom:#373737 solid 3px;
width: 74px;
height: 0px;
margin-top: 3vh;
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
border-bottom:#373737 solid 3px;
width: 54px;
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
border-bottom:#373737 solid 3px;
width: 54px;
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
border-bottom:#373737 solid 3px;
width: 54px;
height: 0px;
position:relative;
top:13vh;
`
const TextoMilk = styled.p`
position:relative;
top:15vh;
font-size:1.5rem;
`
//FlyerSpoon
const FlyerSpoon = styled.div`
width: 100%;
height: 45vh;
display: flex;
margin-top: 9vh;
justify-content: space-evenly;


`
const FlyerSpoonImg = styled.img`
width:50vw;
height:40vw;
`
const TitleSpoon = styled.h4`
font-size: 4vh;
text-transform: uppercase;
`
const LinhaSpoon = styled.div`
border-bottom:#373737 solid 3px;
width: 25px;
height: 0px;
margin-top: 2vh;
margin-left: 14vw;
`
const TextoSpoon = styled.p`
width: 25vw;
margin-left: 2.5vw;
margin-top: 3vh;
align-items: center;
text-align: justify;
`
const ContentSpoon = styled.div`
width: 30vw; 
height: 60vh;
margin-top: 20vh;
text-align: center;
align-items: center;
justify-content: center;
`

export default class Main extends React.Component {
 render() {
    return (
        <section>
            <Background>
            <GlobalStyle/>
            <SubtitleContainer>
                <Subtitle>latest Recipies</Subtitle>
                <Underline></Underline>
            </SubtitleContainer>
            <FlyerContainer>
                <FlyerBolo>
                    <FlyerBoloImg src={cake} alt="Cake flyer" />
                    <LinhaBolo></LinhaBolo>
                    <TextoBolo>Red Velvet Cake</TextoBolo>
                </FlyerBolo>
                <FlyerPizza>
                    <FlyerPizzaImg src={pizza} alt="Pizza flyer" />
                    <LinhaPizza></LinhaPizza>
                    <TextoMilk>Margherita Pizza</TextoMilk>
                </FlyerPizza>
                <FlyerMilk>
                    <FlyerMilkImg src={milk} alt="Milk flyer" />
                    <LinhaMilk></LinhaMilk>
                    <TextoPizza>Peanut Smoothie</TextoPizza>
                </FlyerMilk>
                
            </FlyerContainer>
        </Background>
        <FlyerSpoon>
                    <FlyerSpoonImg src={spoon} alt="Spoon flyer" />
                <ContentSpoon>
                    <TitleSpoon>About</TitleSpoon>
                    <LinhaSpoon></LinhaSpoon>
                    <TextoSpoon>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</TextoSpoon>
                </ContentSpoon>
        </FlyerSpoon>
        </section>
        

        )
    }
}