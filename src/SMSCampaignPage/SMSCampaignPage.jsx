﻿import React from 'react';
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime';
import ReactBootstrapSlider from 'react-bootstrap-slider';

import { icMsgImg } from '../_helpers';

class SMSCampaignPage extends React.Component {
  constructor() {
    super();
    this.sexRange = {
      min: 18,
      max: 100,
      current: 48
    };

    this.kmRange = {
      min: 0,
      max: 500,
      current: 15
    };
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    document.body.id = 'campaign';

    window.addEventListener('mousewheel', this.mouseWheelEvent);
    window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.mouseWheelEvent);
    window.removeEventListener('DOMMouseScroll', this.mouseWheelEvent);
    document.getElementById('campaign').classList.remove('closed');
    document.body.id = '';
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  mouseWheelEvent(e) {
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

    if (delta > 0) document.getElementById('campaign').classList.remove('closed');
    else document.getElementById('campaign').classList.add('closed');
    return true; // this line is only added so the whole page won't scroll in the demo
  }

  sexCurrentValue(e) {
    this.sexRange.current = e.target.value;
    this.forceUpdate();
  }

  kmCurrentValue(e) {
    this.kmRange.current = e.target.value;
    this.forceUpdate();
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main smswraper section">
          <div className="sms_head section">
            <div className="container">
              <div className="row smshead_title">
                <div className="col-sm-2 col-xs-12"><img src={icMsgImg} alt="#" className="img-responsive" /></div>
                <div className="col-sm-8 col-xs-12 text-center">
                  <p>Contacts disponibles en prospection SMS </p>
                  <span className="value">17 593 894</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main_wraper">
            <div className="container">
              <div className="row">
                <div className="col-sm-9 col-xs-12">
                  <h1>Programmez votre campagne SMS  1/2</h1>
                </div>
                <div className="col-sm-3 col-xs-12">
                  <div className="sms_credit">
                    <span>Crédit</span>
                    <span className="credit">4985 <sup>SMS</sup></span>
                  </div>
                </div>
              </div>
              <div className="smswrap">
                <div className="schedule_raw">
                  <div className="schedule_main">
                    <div className="schedule_l">
                      <label>Nom de la campagne</label>
                    </div>
                    <div className="schedule_r">
                      <input type="text" placeholder="Indiquez le nom de votre camapgne et/ou de l’utilisateur" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main">
                    <div className="schedule_l">
                      <label>Sexe</label>
                    </div>
                    <div className="schedule_r">
                      <div className="radiowrap">
                        <ul>
                          <li>
                            <label><input type="radio" name="sex" defaultChecked />
                              <span className="ckeckname">Hommes</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label><input type="radio" name="sex" />
                              <span className="ckeckname">Femmes</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label><input type="radio" name="sex" />
                              <span className="ckeckname">Hommes et femmes</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main">
                    <div className="schedule_l">
                      <label>Âge</label>
                    </div>
                    <div className="schedule_r">
                      <div className="range-slider">
                        <span>{this.sexRange.min}</span>
                        <ReactBootstrapSlider
                          value={this.sexRange.current}
                          change={this.sexCurrentValue.bind(this)}
                          step={1}
                          max={this.sexRange.max}
                          min={this.sexRange.min}
                          orientation="horizontal"
                          tooltip="show" />
                        <span>{this.sexRange.current}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main">
                    <div className="schedule_l">
                      <label>Localisation(s)</label>
                    </div>
                    <div className="schedule_r location">
                      <div className="radiowrap">
                        <ul>
                          <li>
                            <label><input type="radio" name="location" defaultChecked />
                              <span className="ckeckname">Autour de moi par géolocalisation</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label><input type="radio" name="location" />
                              <span className="ckeckname">Code postal ou département</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label><input type="radio" name="location" />
                              <span className="ckeckname">Import d’une liste de codes postaux</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                      <input type="text" placeholder="79 boulevard Richard Lenoir, 75011 Paris" className="form-control loc_txt" />
                    </div>
                  </div>
                  <div className="schedule_main proximi">
                    <div className="schedule_l">
                      <label>Proximité</label>
                    </div>
                    <div className="schedule_r">
                      <div className="range-slider km_range">
                        <ReactBootstrapSlider
                          value={this.kmRange.current}
                          change={this.kmCurrentValue.bind(this)}
                          step={1}
                          max={this.kmRange.max}
                          min={this.kmRange.min}
                          orientation="horizontal"
                          tooltip="show" />
                        <div className="rangekm"><span>{this.kmRange.current}</span>km</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main">
                    <div className="schedule_l">
                      <label>Programmez la date de l’envoi</label>
                    </div>
                    <div className="schedule_r progrm_date">
                      <div className="radiowrap">
                        <ul>
                          <li>
                            <label><input type="radio" name="planned" defaultChecked />
                              <span className="ckeckname">Envoi immédiat</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label><input type="radio" name="planned" />
                              <span className="ckeckname">Envoi planifié</span>
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <div className="input-group date">
                              {/* TODO - Need to fix CSS as it is not inheriting bootstrape */}
                              <DateTimePicker dateFormat="MM/DD/YYYY" timeFormat={false} inputProps={{ placeholder: 'MM/DD/YYYY' }} />
                            </div>
                          </li>
                          <li>
                            <div className="input-group timepicker">
                              {/* TODO - Need to fix CSS as it is not inheriting bootstrape */}
                              <DateTimePicker viewMode="time" dateFormat={false} inputProps={{ id: 'timepicker1' }} />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main coman">
                    <div className="schedule_l">
                      <label>Rédigez votre message</label>
                    </div>
                    <div className="schedule_r">
                      <span className="info">0/149 caractères = SMS Simple</span>
                      <textarea className="form-control" placeholder="Saisissez-ici le message que vous souhaitez envoyer." defaultValue={""} />
                      <a href="#" className="info">Cliquez-ici pour comprendre le compteur d’unité et les caractères spéciaux</a>
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main coman">
                    <div className="schedule_l">
                      <label>Presonnalisez l’expéditeur</label>
                    </div>
                    <div className="schedule_r">
                      <span>0/11 caractères</span>
                      <input type="text" placeholder="Saisissez ici le nom de l’expéditeur" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="schedule_raw bg">
                  <div className="schedule_main coman">
                    <div className="schedule_l">
                      <label>Choix du volume</label>
                    </div>
                    <div className="schedule_r">
                      <span>Saisissez ci-dessous le nombre de personnes à qui vous souhaitez envoyer votre message</span>
                      <input type="text" placeholder="Volume" className="form-control small" />
                      <a href="#" className="info">contacts souhaités</a>
                    </div>
                  </div>
                </div>
                <div className="schedule_raw">
                  <div className="schedule_main coman">
                    <div className="schedule_l">
                      <label>Ajouter votre numéro à l’envoi</label>
                    </div>
                    <div className="schedule_r">
                      <span>Recevez un SMS témoin de votre campagne en même temps que vos contacts</span>
                      <input type="text" placeholder="Volume" className="form-control small" />
                    </div>
                  </div>
                </div>
                <div className="schedule_action">
                  <a href="#" className="btn-primary">Mettre ma campagne en brouillon</a>
                  <Link to="/app/smsCampaignCredit" className="btn-primary green pull-right">Valider ma campagne de prospection</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { SMSCampaignPage };