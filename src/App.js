import React from "react"
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'


class App extends React.Component{
  render(){
    return (
      <div>
         <Header />
         <MainContent />
         <Footer />
      </div>
    )
  }
}

export default App