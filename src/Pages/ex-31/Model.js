import React, { Component } from 'react';

import './Model.css';

export class Model extends Component {
  render() {
    const { image, price, name, desc } = this.props.item;

    return (
      <section className='model-section'>
        <div className='model-image'>
          <img src='/glassesImage/model.jpg' alt='' />
          {image && <img src={image} alt='' className='glass-image' />}

          {desc && name && price && (
            <div className='glass-detail'>
              <div>
                <h4>{name}</h4>
                <p>{desc}</p>
                <span>$ {price}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Model;
