import React, { Component } from 'react'

export default class ClassC extends Component {
    constructor(props){
            super(props)
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.random = this.random.bind(this);
    }
increment ()
{
    this.setState(state => ({
count: state.count + 1
    }));
}
    decrement ()
{
    this.setState(state => ({
count: state.count - 1
    }));
}
    reset ()
{
    this.setState( ({
count: 0
    }));
}
    random ()
{
 const min = 1;
 const max = 9999;
 const rand = min + (Math.random() * (max - min));
    this.setState(({
       count: Math.round(rand)
    }));
}
    

  render() {
    return (
      <div>
        <button onClick={this.increment}>VisHE</button>
        <button onClick={this.decrement}>mensHE</button>
        <button onClick={this.reset}>null</button>
        <button onClick={this.random}>random</button>
        <h1>NONONONONO : {this.state.count}</h1>
      </div>
    )
  }
}
