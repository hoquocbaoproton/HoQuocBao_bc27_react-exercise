import React, { Component } from 'react';

import glassDataJson from '../../store/dataGlasses.json';

import './GlassList.css';

export class GlassList extends Component {
  selectGlassHandler = (selectedItem) => {
    this.props.onShowGlassDetail(selectedItem);
  };

  render() {
    return (
      <div className='glass-list__section'>
        <ul className='glass-list'>
          {glassDataJson.map((item) => {
            return (
              <li
                onClick={() => this.selectGlassHandler(item)}
                key={item.id}
                className='glass-item'
              >
                <img src={item.url} alt={item.name} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GlassList;
