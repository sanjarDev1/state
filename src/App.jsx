import React from 'react'


class App extends React.Component {
  render() {
    const {id,name}=this.props;
    return (
      <div>
        <h1>{id} {name}</h1>
      </div>
    )
  }
}


export default App;