import React from 'react';
import { Link } from 'react-router-dom';

import { icBasketImg } from '../../_helpers';
import { opbasket } from '../../_helpers/main';
import { headerCartFakeData } from '../../_helpers/fake-data';

class CartComponent extends React.Component {
  constructor() {
    super();

    this.state = headerCartFakeData;
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
        <a href="javascript:void(0)" className="basket_wrap_menu" onClick={opbasket.bind(this)}>
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
          <Link to="/app/payment" onClick={opbasket.bind(this)} className="btn-primary">PAIEMENT</Link>
        </div>
      </li>
    );
  }
}

export { CartComponent }; 