import React from 'react';

export default class Todo extends React.Component {
  handleRemoveClick = () => {
    this.props.removeTodo(this.props.id);
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        { text }
        <button onClick={ this.handleRemoveClick }>
          Remove
        </button>
      </div>
    );

  }
}
