import React, { Component } from 'react';
import { Data } from './data';
import '../src/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: '',
            active: null,
            title:'',
            data: {
                status: 'OK',
                dataList: Data,
            }
        };
    }

    render() 
    {   
       
            const onEdit = (id)=>{
                this.setState({active:id})
            }

            const onEditSave = ()=>{
            
            }
        const onDelete = (id) => {
            let res = this.state.data.dataList.filter(item => item.id !== id)
            this.setState({
                data: {
                    ...this.state.data,
                    dataList: res,
                }
            })
        };

        const onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            })


        };

        const onEditChange = (e) =>{
            this.setState({
            
              title:e.target.value,
            })
        }

        const onSave = () => {
            const newData = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status,
            };
            this.setState({
                data: {
                    ...this.state.data,
                    dataList: [...this.state.data.dataList, newData]
                },
                name: '',
                status: '',
            })
        }
        return (
            <div className='wrapper' >
                <div className='cont'>
                    <h1>{this.state.title}</h1>
                    <input onChange={onChange} placeholder='name' type="text" name='name' /> <br />
                    <input onChange={onChange} placeholder='status' type="text" name='status'  /> <br />
                    <button onClick={onSave}>save</button></div>
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.dataList.map(({id,name,status})=>(
                                   <tr key={id}>
                                       <td>{this.state.active === id ? <input value={id} /> : id}</td>
                                       <td>{this.state.active === id ? <input onChange={onEditChange}  /> : name} </td>
                                       <td>{this.state.active === id ? <input value={status} /> : status}</td>
                                       <td>
                                           <button onClick={()=>onDelete(id)}>delete</button>
                                           {this.state.active === id ?
                                           <button >
                                            save
                                           </button>
                                           : <button onClick={()=>onEdit(id)}>
                                           edit
                                          </button>
    }
                                       </td>
                                   </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default App;
