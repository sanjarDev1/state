import React from 'react';

class Student extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1,
    };
  }
  render(){
   let count =0;
     const increment = () =>{
       this.setState({count: this.state.count + 1})
      console.log('increment',count);
    }
    
    const decrement = () =>{
      this.setState({count: this.state.count - 1})
      console.log('decrement',count);
    }
   
   
    return (
      <div>
        <h1> Hi State {this.state.count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

export default Student;
