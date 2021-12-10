import React, { Component } from 'react'
import  { Data } from './toDoList.js/data'

 class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                status: 'OK',
                dataList: Data,
            }
        };
    }
    
    render() {
        
        const onDelete = (id)=>{
           let res =  this.state.data.dataList.filter(item=> item.id !== id)
           this.setState({
            data:{
                ...this.state.data,
                dataList: res,
            }
           })
        // console.log(res);
        };
        return (
            <div>
                {this.state.data.dataList.map((value)=>(
                    <h1>
                        {value.id} {value.name} {' '}
                        <button onClick={()=>onDelete(value.id)}>delete</button>
                    </h1>
                ))}
            </div>
        )
    }
}

export default App;
