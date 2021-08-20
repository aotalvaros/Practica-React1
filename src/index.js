import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cuadrado(props){
  return(
    <button className="cuadrados" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Tablero extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      cuadrados: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i){
    const cuadrados = this.state.cuadrados.slice();
    cuadrados[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      cuadrados:cuadrados,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return <Cuadrado value={this.state.cuadrados[i]}
    onClick={()=> this.handleClick(i)} />;
  }

  render() {
    const status = 'Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Juego extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Tablero />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Juego />, document.getElementById("root"));
