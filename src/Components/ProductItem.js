import React, { Component } from 'react';

import './ProductItem.css';

export class ProductItem extends Component {
  liftItemUp = (item) => {
    this.props.onLiftItemDetailUp(item);
  };

  render() {
    const { id, name, alias, price, shortDescription, image } = this.props.item;

    return (
      <div key={id} className='col-sm-3 mb-5'>
        <div
          className='card'
          style={{
            height: '100%',
          }}
        >
          <div className='card-header'>{name}</div>
          <div className='card-body'>
            <img src={image} className='w-100' alt='' />
            <h4 className='card-title'>{alias}</h4>
            <p className='card-text'>{price}</p>
          </div>
          <div className='card-footer text-muted'>
            <p className='card-text'>{shortDescription}</p>
            <button
              onClick={() => this.liftItemUp(this.props.item)}
              className='btn btn-dark'
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
