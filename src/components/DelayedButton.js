// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  constructor(props){
    super(props)
  }

  delayedAction = (e) => {
    e.persist()
    setTimeout( () => this.props.onDelayedClick(e)

    , this.props.delay)
  }

  render (){
    console.log(this.props.delay)
    return <button onClick={this.delayedAction}> Delayed Button</button>
  }
}

export default DelayedButton;
