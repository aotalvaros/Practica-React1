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
    if (calcularGanador(cuadrados) || cuadrados[i]) {
      return;
    }
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
    const ganador = calcularGanador(this.state.cuadrados);
    let status;
    if (ganador) {
      status = `Ganador: ${ganador}`; 
    }
    else{
      status = 'Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    

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

function calcularGanador(cuadrados){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const[a,b,c] = lines[i];
    if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] == cuadrados[c]) {
      return cuadrados[a];
    }
  }
  return null;
}