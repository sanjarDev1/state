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
        
      </div>
    )
  }
}

export default Student;
