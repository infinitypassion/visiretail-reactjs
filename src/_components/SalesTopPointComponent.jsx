import React from 'react';

import { sellPostion1Img, sellPostion2Img, sellPostion3Img } from '../_helpers';

class SalesTopPointComponent extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="top_point section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="title">
                <h6>TOP POINTS DE VENTE</h6>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12 left_con">
              <p>LE TOP permet de révéler vos points de vente les plus performants sur la période séléctionnée. Cette performance est évaluée selon le nombre clics et le budget dépensé sur vos campagnes.</p>
            </div>
            <div className="col-sm-9 col-xs-12 selling_points">
              <div className="selling_list section">
                <label>Point de vente le plus performant</label>
                <ul>
                  <li>
                    <div className="sell_point_raw">
                      <div className="sell_left">
                        <span className="sell_no"><img src={sellPostion1Img} className="img-responsive" alt="#" /></span>
                        <div className="sell_des">
                          <h6>Visiperf Charles de Gaulle</h6>
                          <p>Tremblay-en-France</p>
                        </div>
                      </div>
                      <div className="sell_right">
                        <div className="sell_type">
                          <ul>
                            <li>
                              <h6>Impressions</h6>
                              <p>1 879 048</p>
                            </li>
                            <li>
                              <h6>Clics</h6>
                              <p>187 964</p>
                            </li>
                            <li>
                              <h6>Conversions</h6>
                              <p>1 568</p>
                            </li>
                            <li>
                              <h6>Budget</h6>
                              <p>35 187€</p>
                            </li>
                            <li>
                              <h6>Coût du lead</h6>
                              <p className="green">2,87€</p>
                            </li>
                          </ul>
                        </div>
                        <a href="#">détails du point de vente</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sell_point_raw">
                      <div className="sell_left">
                        <span className="sell_no"><img src={sellPostion2Img} className="img-responsive" alt="#" /></span>
                        <div className="sell_des">
                          <h6>Visiperf Charles de Gaulle</h6>
                          <p>Tremblay-en-France</p>
                        </div>
                      </div>
                      <div className="sell_right">
                        <div className="sell_type">
                          <ul>
                            <li>
                              <h6>Impressions</h6>
                              <p>1 879 048</p>
                            </li>
                            <li>
                              <h6>Clics</h6>
                              <p>187 964</p>
                            </li>
                            <li>
                              <h6>Conversions</h6>
                              <p>1 568</p>
                            </li>
                            <li>
                              <h6>Budget</h6>
                              <p>35 187€</p>
                            </li>
                            <li>
                              <h6>Coût du lead</h6>
                              <p>2,87€</p>
                            </li>
                          </ul>
                        </div>
                        <a href="#">détails du point de vente</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sell_point_raw">
                      <div className="sell_left">
                        <span className="sell_no"><img src={sellPostion3Img} className="img-responsive" alt="#" /></span>
                        <div className="sell_des">
                          <h6>Visiperf Marseille Prado</h6>
                          <p>Marseille 13008</p>
                        </div>
                      </div>
                      <div className="sell_right">
                        <div className="sell_type">
                          <ul>
                            <li>
                              <h6>Impressions</h6>
                              <p>1 879 048</p>
                            </li>
                            <li>
                              <h6>Clics</h6>
                              <p>187 964</p>
                            </li>
                            <li>
                              <h6>Conversions</h6>
                              <p className="green">2 487</p>
                            </li>
                            <li>
                              <h6>Budget</h6>
                              <p>35 187€</p>
                            </li>
                            <li>
                              <h6>Coût du lead</h6>
                              <p>2,87€</p>
                            </li>
                          </ul>
                        </div>
                        <a href="#">détails du point de vente</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sell_point_raw">
                      <div className="sell_left">
                        <span className="sell_no bg">4</span>
                        <div className="sell_des">
                          <h6>Visiperf Merignac</h6>
                          <p>Bordeaux 33700</p>
                        </div>
                      </div>
                      <div className="sell_right">
                        <div className="sell_type">
                          <ul>
                            <li>
                              <h6>Impressions</h6>
                              <p>1 879 048</p>
                            </li>
                            <li>
                              <h6>Clics</h6>
                              <p>187 964</p>
                            </li>
                            <li>
                              <h6>Conversions</h6>
                              <p>1 568</p>
                            </li>
                            <li>
                              <h6>Budget</h6>
                              <p className="green">68 785€</p>
                            </li>
                            <li>
                              <h6>Coût du lead</h6>
                              <p>2,87€</p>
                            </li>
                          </ul>
                        </div>
                        <a href="#">détails du point de vente</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sell_point_raw">
                      <div className="sell_left">
                        <span className="sell_no bg">5</span>
                        <div className="sell_des">
                          <h6>Visiperf Paris Menilmontant</h6>
                          <p>Paris 75020</p>
                        </div>
                      </div>
                      <div className="sell_right">
                        <div className="sell_type">
                          <ul>
                            <li>
                              <h6>Impressions</h6>
                              <p>1 879 048</p>
                            </li>
                            <li>
                              <h6>Clics</h6>
                              <p>187 964</p>
                            </li>
                            <li>
                              <h6>Conversions</h6>
                              <p>1 568</p>
                            </li>
                            <li>
                              <h6>Budget</h6>
                              <p>35 187€</p>
                            </li>
                            <li>
                              <h6>Coût du lead</h6>
                              <p>2,87€</p>
                            </li>
                          </ul>
                        </div>
                        <a href="#">détails du point de vente</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="#" className="more">Voir tous mes points de vente</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { SalesTopPointComponent }; 