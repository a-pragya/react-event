import React from "react"
import './index2.css'
import Conditional from './Conditional'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count : 0,
      isLoading : true
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({isLoading: false})
    },1500)
  }

  handleClick(){
    this.setState( prevState => {
      return{
        count : prevState.count + 1
      }
    })
  }

  handleClick2(){
    this.setState({count: 0})
  }

  render(){
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional 
          handleClick = {this.handleClick}
          handleClick2 = {this.handleClick2}
          count = {this.state.count}/>}
        
      </div>
    )
  }
}

export default App


//<h1>{this.state.count}</h1>
        //<button onClick = {this.handleClick}>Increment!</button>
        //<button onClick ={ this.handleClick2}>Reset!</button>
        

