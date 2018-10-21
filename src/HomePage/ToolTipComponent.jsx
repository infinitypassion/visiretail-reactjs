import React from 'react';

import { Modal, ModalBody } from 'react-bootstrap';

import { icTimeMarkerImg, customPeriodImg, icStartImg, icEndImg, icRepresentedImg } from '../_helpers';

class ToolTipComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      modal1Show: true,
      modal2Show: false,
      modal3Show: false
    };

    document.getElementsByTagName('html')[0].classList.add('Home');
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  modalHandleHide() {
    this.setState({
      modal1Show: false,
      modal2Show: false,
      modal3Show: false
    });
  }

  model1NextHandleClick(e) {
    this.setState({
      modal1Show: false,
      modal2Show: true,
      modal3Show: false
    });

    document.getElementsByTagName('html')[0].classList.add('Home');
  }

  model1CloseHandleClick() {
    this.modalHandleHide();

    document.getElementsByTagName('html')[0].classList.remove('Home');
  }


  model2NextHandleClick(e) {
    this.setState({
      modal1Show: false,
      modal2Show: false,
      modal3Show: true
    });

    document.getElementsByTagName('html')[0].classList.add('Home');
  }

  model2CloseHandleClick() {
    this.modalHandleHide();

    document.getElementsByTagName('html')[0].classList.remove('Home');
  }

  model3NextHandleClick() {
    this.setState({
      modal1Show: false,
      modal2Show: false,
      modal3Show: false
    });

    document.getElementsByTagName('html')[0].classList.add('Home');
  }

  model3CloseHandleClick() {
    this.modalHandleHide();

    document.getElementsByTagName('html')[0].classList.remove('Home');
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="instru_model">
        {/* Modal  Popup 1 */}
        <Modal id="myModal1" role="dialog" show={this.state.modal1Show} container={this} onHide={this.modalHandleHide.bind(this)}>
          <ModalBody>
            <div className="cirlce"> </div>
            <div className="tooltip_wrap">
              <div className="tooltip_con">
                <span className="ico"><img src={icTimeMarkerImg} alt="marqueurs" className="img-responsive" /></span>
                <h6 className="purple">Les marqueurs temps</h6>
                <p>Séléctionnez un marqueur temps pour analyser votre reporting...</p>
              </div>
              <div className="tip_action">
                <a className="purple btn-next modal-1-next" onClick={this.model1NextHandleClick.bind(this)}>Suivant</a>
                <a className="modal-1-close" data-dismiss="modal" onClick={this.model1CloseHandleClick.bind(this)}>PASSER</a>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* Modal  Popup 2 */}
        <Modal id="myModal2" role="dialog" show={this.state.modal2Show} container={this} onHide={this.modalHandleHide.bind(this)}>
          <ModalBody>
            <div className="tooltip_wrap">
              <div className="tooltip_con">
                <span className="ico"><img src={customPeriodImg} alt="custom-period" className="img-responsive" /></span>
                <h6 className="orange">Période personnalisée</h6>
                <p>...ou personnalisez la période que vous souhaitez analyser.</p>
              </div>
              <div className="tip_action">
                <a className="orange btn-next modal-2-next" onClick={this.model2NextHandleClick.bind(this)}>Suivant</a>
                <a className="modal-2-close" data-dismiss="modal" onClick={this.model2CloseHandleClick.bind(this)}>PASSER</a>
              </div>
            </div>
          </ModalBody>
        </Modal>
        {/* Modal  Popup 3 */}
        <Modal id="myModal3" role="dialog" show={this.state.modal3Show} container={this} onHide={this.modalHandleHide.bind(this)}>
          <ModalBody>
            <div className="tooltip_wrap">
              <div className="tooltip_con">
                <span className="ico"><img src={icStartImg} alt="Début d’une campagne" className="img-responsive" /></span>
                <h6>Les indicateurs de campagnes</h6>
                <p>Les indicateurs vous permettent de vous repérer sur la timeline. Les symboles indiquent le début ou la fin d’une campagne. Les couleurs correspondent à une capagne</p>
                <ul>
                  <li><span className="ico"><img src={icStartImg} alt="Début d’une campagne" className="img-responsive" /></span>Début d’une campagne</li>
                  <li><span className="ico"><img src={icEndImg} alt="Début d’une campagne" className="img-responsive" /></span>Fin d’une campagne</li>
                  <li><span className="ico"><img src={icRepresentedImg} alt="campagne represented" className="img-responsive" /></span>Campagne représentée par une couleur</li>
                </ul>
              </div>
              <div className="tip_action">
                <a className="purple btn-next modal-3-next" data-dismiss="modal" onClick={this.model3NextHandleClick.bind(this)}>Suivant</a>
                <a className="modal-3-close" data-dismiss="modal" onClick={this.model3CloseHandleClick.bind(this)}>PASSER</a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export { ToolTipComponent }; 