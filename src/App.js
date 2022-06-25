import React from "react"
import Header from "./componentes/header.js"
import Main from "./componentes/main.js"
import Footer from "./componentes/footer.js"
export default class App extends React.Component{

render(){
return(
  <>
  <Header/>
  <Main/>
  <Footer/>
  </>
)

}
}