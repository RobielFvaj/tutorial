import React from "react"
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'
import Conditional from './Conditional'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      answer : 'Yes',
      isLoading: true,
      isLogging: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }
  handleClick (){
    this.setState(prevState => ({isLogging : !prevState.isLogging}))
}

  render(){
    return (
      <div>
         <Header />
        <h1>Is state important to know? {this.state.answer}</h1>
        {this.state.isLoading ? <h1>Loading ...</h1> :
        <Conditional isLoading={this.state.isLoading} />}

        <button onClick ={this.handleClick}>
          {this.state.isLogging ? "Login" : "Logout"}
        </button>
        <h1>{this.state.isLogging ? "Logged out" : "Logged in"}</h1>
         <MainContent />
         <Footer />
      </div>
    )
  }
}

export default App