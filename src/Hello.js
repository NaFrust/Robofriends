import React from 'react';


class Hello extends React.Component {
  render() {
    return (
       <div className="tc f1" >
         <h1> Hola mundo :) </h1>
         <h3>{this.props.saludo} </h3>
       </div>
    )
  }
}

export default Hello;