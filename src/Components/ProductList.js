import React, { Component } from 'react';
import ProductItem from './ProductItem';

import productsData from '../store/data.json';

export class ProductList extends Component {
  showDetailHandler = (item) => {
    this.props.onShowDetail(item);
  };

  render() {
    return (
      <div className='row mt-5'>
        {productsData.map((item) => {
          return (
            <ProductItem
              onLiftItemDetailUp={this.showDetailHandler}
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
