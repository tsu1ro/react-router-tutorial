import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <div>children is {this.props.children}</div>
      </div>
    )
  }
})
