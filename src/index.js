import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Cuadrado extends React.Component {
  render() {
    return (
      <button className="cuadrados" onClick={function(){alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

class Tablero extends React.Component {
  renderSquare(i) {
    return <Cuadrado value={i} />;
  }

  render() {
    const status = 'Next player: X';

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

ReactDOM.render(
  <Juego />,
  document.getElementById('root')
);