import React from 'react';

class Student extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1,
      name: '',
    };
  }
  render(){
   let count =0;
     const increment = (cnt) =>{
       this.setState({count: this.state.count + cnt})
      console.log('increment',count);
    }
    
    const decrement = () =>{
      this.setState({count: this.state.count - 1})
      console.log('decrement',count);
    }

    const onChange = (e)=>{
      this.setState({name: e.target.value})
    }
    return (
      <div>
        <h1> Hi State {this.state.count}</h1>
        <h1>Title: {this.state.name}</h1>
        <button onClick={()=>increment(2)}>+</button>
        <button onClick={decrement}>-</button>
        <br />
        <input onChange={onChange} type="text" />
      </div>
    )
  }
}

export default Student;
