import React from 'react';

import { icBasketImg, festivitiesImg, saintValentinImg } from '../_helpers';

import { opbasket, init } from '../_helpers/main';

class CartComponent extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    init();
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <li className="cart">
        <a href="javascript:void(0)" onClick={opbasket.bind(this)}>
          <div className="basket in">
            <img src={icBasketImg} alt="basket" className="img-responsive" />
            <span className="noof_item">2</span>
          </div>
        </a>
        <div className="basket_wrap" id="basket">
          <p>2 articles ont été ajoutés à votre panier !</p>
          <ul className="cart_item">
            <li>
              <div className="imgwrap">
                <img src={festivitiesImg} alt="#" className="img-responsive" />
              </div>
              <div className="item_des">
                <h6>Fêtes de fin d’années</h6>
                <div className="quantity_count">
                  <button className="decrease btn-number" title="Decrease Quantity" />
                  <input type="text" className="quantity-amount qty" defaultValue={1} />
                  <button className="increase btn-number" title="Increase Quantity" />
                </div>
              </div>
            </li>
            <li>
              <div className="imgwrap">
                <img src={saintValentinImg} alt="#" className="img-responsive" />
              </div>
              <div className="item_des">
                <h6>Saint Valentin</h6>
                <div className="quantity_count">
                  <button className="decrease btn-number" title="Decrease Quantity" />
                  <input type="text" className="quantity-amount qty" defaultValue={1} />
                  <button className="increase btn-number" title="Increase Quantity" />
                </div>
              </div>
            </li>
          </ul>
          <a href="payment.html" className="btn-primary">PAIEMENT</a>
        </div>
      </li>
    );
  }
}

export { CartComponent }; 