import React, { Component } from 'react';

import './Modal.css';

export class Modal extends Component {
  render() {
    const { name, image, description, alias, quantity } = this.props.content;

    return (
      <div
        style={{
          display: 'block',
          opacity: '1',
        }}
        className='modal fade modal-detail'
      >
        <div
          className='modal-dialog'
          style={{
            position: 'fixed',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Shoes Detail</h5>
              <button
                type='button'
                className='btn-close'
                onClick={this.props.onCloseModal}
              />
            </div>
            <div className='modal-body'>
              <div className='content-img'>
                <img src={image} width='100%' alt='' />
              </div>
              <div className='content-detail'>
                <h2>{name}</h2>
                <h5 className='text-secondary'>{alias}</h5>
                <p>{description}</p>
                <p>
                  Quantity: <span className='text-info'>{quantity}</span>
                </p>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                onClick={this.props.onCloseModal}
                type='button'
                className='btn btn-secondary'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
