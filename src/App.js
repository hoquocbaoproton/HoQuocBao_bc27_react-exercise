import React, { Component } from 'react';

import ShoesStore from './Components/ShoesStore';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      detailItem: null,
    };
  }

  modalHandler = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  showDetailHandler = (item) => {
    this.modalHandler();
    this.setState({ detailItem: item });
  };

  render() {
    console.log(this.state);
    return (
      <ShoesStore>
        <ProductList onShowDetail={this.showDetailHandler} />
        {this.state.isModalOpen && (
          <Modal
            onCloseModal={this.modalHandler}
            content={this.state.detailItem}
          />
        )}
      </ShoesStore>
    );
  }
}

export default App;
