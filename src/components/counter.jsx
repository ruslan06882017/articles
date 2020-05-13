import React, {Component} from 'react'
import { connect} from 'react-redux'
import {increment} from '../ac'

class Counter extends Component {

  render(){
    const {number, handlerIncrement} = this.props
    return(
      <div>
        <h3> {number} </h3>
        <button onClick={this.handlerIncrement}> increment </button>
      </div>
    )
  }
  
  handlerIncrement = () => {
    this.props.dispatch(increment);
  }
}

const mapStateToProps = (storeState) =>({
  number: storeState.counter
})


const mapDispatchToProps = (storeState) =>({
  handlerIncrement: increment
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)