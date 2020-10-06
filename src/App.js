import React from "react"
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'
import Conditional from './Conditional'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      loading: false,
      character : {} 
      
    }
  }

componentDidMount(){
  this.setState ({loading: true})
  fetch("https://swapi.dev/api/people/69/")
  .then(response => response.json())
  .then(data => {
    this.setState({
      loading: false,
      character: data
    })
  })
}

  render(){
    const text = this.state.loading ? "loading...":this.state.character.name
    return (
      <div>
         <Header />
         <Conditional isLoading={this.state.isLoading} />
         <p>{text}</p>
         <MainContent />
         <Footer />
      </div>
    )
  }
}

export default App