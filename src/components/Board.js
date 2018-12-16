import React from 'react';
import Space from './Space';

class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <div className="row">
          <Space row={0} col={0} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
          <Space row={0} col={1} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
          <Space row={0} col={2} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
        </div>
        <div className="row">
          <Space row={1} col={0} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
          <Space row={1} col={1} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
          <Space row={1} col={2} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
        </div>
        <div className="row">
          <Space row={2} col={0} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
          <Space row={2} col={1} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
          <Space row={2} col={2} setGame={this.props.setGame} game={this.props.game} player={this.props.player}/>
        </div>
      </div>
    );
  }
};

export default Board;