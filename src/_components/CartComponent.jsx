import React from 'react';
import { Link } from 'react-router-dom';

import { icBasketImg, festivitiesImg, saintValentinImg } from '../_helpers';

import { opbasket } from '../_helpers/main';

class CartComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [
        {
          itemId: 0,
          itemName: 'Fêtes de fin d’années',
          itemImg: festivitiesImg,
          itemQuantity: 2
        },
        {
          itemId: 1,
          itemName: 'Saint Valentin',
          itemImg: saintValentinImg,
          itemQuantity: 1
        }
      ]
    };
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  handleChange(e) {
    console.log('handle change called')
  }

  decreaseQuantity(e) {
    if (this.state.cartItems[e.currentTarget.dataset.id].itemQuantity > 0)
      this.state.cartItems[e.currentTarget.dataset.id].itemQuantity--;

    this.forceUpdate();
  }

  increaseQuantity(e) {
    this.state.cartItems[e.currentTarget.dataset.id].itemQuantity++;

    this.forceUpdate();
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <li className="cart">
        <a href="javascript:void(0)" onClick={opbasket.bind(this)}>
          <div className="basket in">
            <img src={icBasketImg} alt="basket" className="img-responsive" />
            <span className="noof_item">{this.state.cartItems.length}</span>
          </div>
        </a>
        <div className="basket_wrap" id="basket">
          <p>{this.state.cartItems.length} articles ont été ajoutés à votre panier !</p>
          <ul className="cart_item">
            {
              this.state.cartItems.map((item, key) => {
                return (
                  <li key={key}>
                    <div className="imgwrap">
                      <img src={item.itemImg} alt="#" className="img-responsive" />
                    </div>
                    <div className="item_des">
                      <h6>{item.itemName}</h6>
                      <div className="quantity_count">
                        <button className="decrease btn-number" title="Decrease Quantity" onClick={this.decreaseQuantity.bind(this)} data-id={item.itemId} />
                        <input type="text" className="quantity-amount qty" value={item.itemQuantity} onChange={this.handleChange.bind(this)} />
                        <button className="increase btn-number" title="Increase Quantity" onClick={this.increaseQuantity.bind(this)} data-id={item.itemId} />
                      </div>
                    </div>
                  </li>);
              })
            }
          </ul>
          <Link to="/app/payment" className="btn-primary">PAIEMENT</Link>
        </div>
      </li>
    );
  }
}

export { CartComponent }; 