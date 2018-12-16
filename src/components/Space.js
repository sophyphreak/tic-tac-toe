import React from 'react';

class Space extends React.Component {

  handleClick() {
    this.props.setGame(this.props.player, this.props.row, this.props.col);
  }

  render() {
    return (
      <div className="button">
        <button className="btn btn-default" onClick={() => this.handleClick()}>{this.props.game[this.props.row][this.props.col]}</button>
      </div>
    );
  }
};

export default Space;