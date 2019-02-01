// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {


  clickCoordinates = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render (){
    return <button onClick={this.clickCoordinates}>CoordinatesButton</button>
  }
}

export default CoordinatesButton;
