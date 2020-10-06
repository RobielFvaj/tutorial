import React from "react"
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'
import Conditional from './Conditional'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
     
    }
  }



  render(){
    return (
      <div>
         <Header />
         <Conditional isLoading={this.state.isLoading} />
         <MainContent />
         <Footer />
      </div>
    )
  }
}

export default App