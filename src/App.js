import React, { Component } from 'react';
import './App.css';

// onClick will be called on App parent component
function Butts(props){
  return(
    <button onClick={() => props.onClick()} className={`buttons ${props.className}`}>{props.value}</button>
  );
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      operator: null,
      firstN: null,
      secondN: null,
      result: 0.00
    }
  }

  renderSquare(name, cName){
    return <Butts value={name} className={cName} onClick={() => this.buttonClick(name)}></Butts>
  }

  buttonClick(name){
    if(name === "*" || name === "+" || name === "-" || name === "/" || name === "%"){
      this.setState({
        operator: name,
        result: name
      });
    }else if(name === "="){
      this.doMath();
    }else if(name === "AC"){
      this.clearCalc();
    }else if(!name.isNaN){
      if(this.state.firstN === null){
        this.setState({
          firstN: name,
          result: name
        });
      }else if (this.state.secondN === null){
        this.setState({
          secondN: name,
          result: name
        });
      }
    }
  }

  clearCalc(){
    this.setState({
      firstN: null,
      secondN: null,
      operator: null,
    });
  }

  doMath(){
    let res;
    let f = parseFloat(this.state.firstN);
    let s = parseFloat(this.state.secondN);

    switch(this.state.operator){
      case "+":
        res = f + s;
        break;
      case "-":
        res = f - s;
        break;
      case "*":
        res = f * s;
        break;
      case "/":
        res = f / s;
        break;
      case "%":
        res = f % s;
        break;
      default:
        // theoretically, will never reach here
    }

    this.setState({result: res});
    // make sure to reset calculator for next equation
    this.clearCalc();
  }

  render() {
    return (
      <div className="container">
        <div className="output">
          <p className="output-text">{this.state.result}</p>
        </div>

        <div className="row item">
          {this.renderSquare("AC", "blue")}
          {this.renderSquare("+/-", "blue")}
          {this.renderSquare("%", "blue")}
          {this.renderSquare("/", "green")}
        </div>

        <div className="row item">
          {this.renderSquare("7", "blue")}
          {this.renderSquare("8", "blue")}
          {this.renderSquare("9", "blue")}
          {this.renderSquare("*", "green")}
        </div>

        <div className="row item">
          {this.renderSquare("4", "blue")}
          {this.renderSquare("5", "blue")}
          {this.renderSquare("6", "blue")}
          {this.renderSquare("-", "green")}
        </div>

        <div className="row item">
          {this.renderSquare("1", "blue")}
          {this.renderSquare("2", "blue")}
          {this.renderSquare("3", "blue")}
          {this.renderSquare("+", "green")}
        </div>

        <div className="row item">
          {this.renderSquare("0", "blue")}
          {this.renderSquare(".", "blue")}
          {this.renderSquare("=", "green")}
        </div>
      </div>
    );
  }
}

export default App;
