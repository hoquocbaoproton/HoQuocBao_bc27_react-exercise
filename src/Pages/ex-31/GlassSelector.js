import React, { Component } from 'react';
import Model from './Model';

import './GlassSelector.css';
import GlassList from './GlassList';

class GlassSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
    };
  }

  showGlassDetailHandler = (itemDetail) => {
    this.setState({ item: itemDetail });
  };

  render() {
    return (
      <div className='background'>
        <header className='header'>
          <h1>try glasses app online</h1>
        </header>
        <main>
          <Model item={this.state.item} />
          <GlassList onShowGlassDetail={this.showGlassDetailHandler} />
        </main>
      </div>
    );
  }
}

export default GlassSelector;
