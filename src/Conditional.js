import React from 'react'

class Conditional extends React.Component{

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
    }, 150)
  }
  handleClick (){
    this.setState(prevState => ({isLogging : !prevState.isLogging}))
}

    render (props){
    return (
      <div>
         <h1>Is state important to know? {this.state.answer}</h1>
        {this.state.isLoading ? <h1>Loading ...</h1> : <h1>Temp</h1>}

        <button onClick ={this.handleClick}>
          {this.state.isLogging ? "Login" : "Logout"}
        </button>
        <h1>{this.state.isLogging ? "Logged out" : "Logged in"}</h1>
        
      </div>
    )
 }
}

export default Conditional