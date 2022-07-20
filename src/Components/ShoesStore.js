import React, { Component } from 'react';

export class ShoesStore extends Component {
  render() {
    return <section className='container'>{this.props.children}</section>;
  }
}

export default ShoesStore;
