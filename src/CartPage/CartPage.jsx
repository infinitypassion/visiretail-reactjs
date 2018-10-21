import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Alert } from 'react-bootstrap';

import { laSemaineImg, festivitiesImg, saintValentinImg } from '../_helpers';

import { cartFakeData } from '../_helpers/fake-data';

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      showSuccessAlert: false,
      showDeletedAlert: false
    };

    this.cartFakeData = cartFakeData;
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  handleChange(e) {
    console.log('handle change called')
  }

  decreaseQuantity(e) {
    let orderId = e.currentTarget.dataset.orderId;
    let itemId = e.currentTarget.dataset.itemId;

    if (this.cartFakeData.orderData[orderId].items[itemId].quantity > 0) {
      this.cartFakeData.orderData[orderId].items[itemId].quantity--;
    }

    this.forceUpdate();
  }

  increaseQuantity(e) {
    let orderId = e.currentTarget.dataset.orderId;
    let itemId = e.currentTarget.dataset.itemId;

    this.cartFakeData.orderData[orderId].items[itemId].quantity++;

    this.forceUpdate();
  }

  add() {
    this.setState({ showSuccessAlert: true });
  }
  remove() {
    this.setState({ showDeletedAlert: true });
  }
  hideSuccess() {
    this.setState({ showSuccessAlert: false });
  }
  hideDeleted() {
    this.setState({ showDeletedAlert: false });
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main section">
          <div className="main_wraper">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="payment_top section">
                    <div className="payment_l">
                      <label>Total</label>
                      <span className="value">1 205,00€ HT</span>
                    </div>
                    <div className="payment_r pull-right">
                      <button className="btn-primary">CONTINUER</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12  payment_con">
                  <h1>Etape 1 - Validation du panier</h1>
                  <p>Vérifier la commande, son ou ses bénéficaires et les quantités</p>
                </div>
              </div>
              <div className="row validation_wrap">
                <div className="col-sm-8 col-xs-12">
                  <div className="cartwraper section">
                    {
                      this.cartFakeData.orderData.map((orderData, orderKey) => {
                        return (
                          <div className="basketwrap" key={orderKey}>
                            <div className="baskethead">
                              <span className="hidebasket" onClick={this.remove.bind(this)} />
                              <h5 className="name">{orderData.recipientName}</h5>
                              <a href={"mailto:" + orderData.recipientEmail} className="cart_emil">{orderData.recipientEmail}</a>
                            </div>
                            <div className="basketbody">
                              <div className="basketdata">
                                <Table>
                                  <thead>
                                    <tr>
                                      <td />
                                      <td />
                                      <td />
                                      <td>prix unitaire</td>
                                      <td>total</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      orderData.items.map((item, itemKey) => {
                                        return (
                                          <tr key={itemKey}>
                                            <td>
                                              <div className="cart_avtar">
                                                <img src={item.image} alt="La-semaine" className="img-responsive" />
                                              </div>
                                            </td>
                                            <td className="item_name">{item.name}<a href="#" className="item_info" /></td>
                                            <td>
                                              <div className="quantity_count">
                                                <button className="decrease btn-number" title="Decrease Quantity" onClick={this.decreaseQuantity.bind(this)} data-item-id={itemKey} data-order-id={orderKey} />
                                                <input type="text" className="quantity-amount qty" value={item.quantity} onChange={this.handleChange.bind(this)} />
                                                <button className="increase btn-number" title="Increase Quantity" onClick={this.increaseQuantity.bind(this)} data-item-id={itemKey} data-order-id={orderKey} />
                                              </div>
                                            </td>
                                            <td>{item.unitPrice}</td>
                                            <td>{item.total}</td>
                                          </tr>
                                        );
                                      })
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                    <Link to="/app/payment" className="btn-primary">continuer</Link>
                  </div>
                  <div className="cart_mobile section">
                    {
                      this.cartFakeData.orderData.map((orderData, orderKey) => {
                        return (

                          orderData.items.map((item, itemKey) => {
                            return (
                              <div className="cart_box" key={itemKey}>
                                <div className="cart_avtar">
                                  <img src={item.image} alt="La-semaine" className="img-responsive" />
                                </div>
                                <div className="item_name">
                                  <h5>{item.name}</h5>
                                  <span className="price">{item.total}</span>
                                </div>
                                <div className="cart_r pull-right">
                                  <span className="number">{item.quantity}</span>
                                  <a href="#" className="more_btn" />
                                </div>
                              </div>
                            );
                          })
                        );
                      })
                    }
                    <div className="summery_list section">
                      <ul>
                        <li><label>Sous-Total</label><p>1 205,00€</p></li>
                        <li><label>Total</label><p>1446,00€</p></li>
                      </ul>
                    </div>
                    <Link to="/app/payment" className="btn-primary">continuer</Link>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12 pull-right recipients">
                  <div className="recipients_box">
                    <div className="recipients_head">
                      <h6>Destinataires</h6>
                      <p>Ajoutez un nouveau destinaire à votre commande</p>
                    </div>
                    <div className="recipi_search">
                      <form>
                        <input type="search" className="form-control" placeholder="Rechercher un destinataire" />
                        <button type="reset" className="resrt_btn" />
                      </form>
                    </div>
                    <div className="search_list">
                      <ul>
                        {
                          this.cartFakeData.orderRecipients.map((r, key) => {
                            return (
                              <li key={key}>
                                <div className="recipi_det">
                                  <button className="recipi_add" onClick={this.add.bind(this)} />
                                  <h6>{r.name}</h6>
                                  <p>{r.email}</p>
                                </div>
                              </li>
                            );
                          })
                        }
                      </ul>
                    </div>

                    <Alert id="alert-success" bsStyle="success" className={"alertbox" + (this.state.showSuccessAlert ? " active" : "")}>
                      <p>Visiperf Voltaire ajouté !</p>
                      <span onClick={this.hideSuccess.bind(this)}>Annuler</span>
                    </Alert>
                    <Alert id="alert-delete" bsStyle="danger" className={"alertbox deleted" + (this.state.showDeletedAlert ? " active" : "")}>
                      <p>Visiperf Voltaire supprimé !</p>
                      <span onClick={this.hideDeleted.bind(this)}>Annuler</span>
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { CartPage }; 