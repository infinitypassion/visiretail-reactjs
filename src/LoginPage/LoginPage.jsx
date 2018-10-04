import React from 'react';

import { logoImg, slide1Img, slide2Img, slide3Img } from '../_helpers';

let slideIndex = 1;

class LoginPage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    this.showSlides(slideIndex);
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  plusSlides(n) {
    this.showSlides(slideIndex += n);
  }

  currentSlide(e) {
    this.showSlides(slideIndex = e.currentTarget.dataset.id);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides && slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
    }

    if (dots && dots.length > 0) {
      dots[slideIndex - 1].className += " active";
    }
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="visiretail_registration section">
        <div className="row login">
          <div className="col-sm-5 col-xs-12 registration_main">
            <div className="registration_head">
              <span>Vous souhaitez tester notre plateforme ?</span>
              <a href="register.html" className="btn-primary login">Demander une démo</a>
            </div>
            <div className="registration_con">
              <span className="logo"><img src={logoImg} className="img-responsive" alt="visiretail" /> </span>
              <h1>Simplifiez le déploiement de votre marketing digital</h1>
              <div className="form_main">
                <form action="/home">
                  <div className="form_raw">
                    <label>Username</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form_raw">
                    <label> Mot de passe</label>
                    <input type="password" className="form-control" required />
                  </div>
                  <button className="btn-primary">connexion</button>
                  <a href="#" className="fogot">Mot de passe oublié ?</a>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-xs-12 registr_slider">
            <div className="slide_main">
              <div className="mySlides">
                <img className="img-responsive" src={slide1Img} style={{ width: '100%' }} />
                <h2>Mutualisez les créations et l’information à diffuser en local</h2>
              </div>
              <div className="mySlides">
                <img className="img-responsive" src={slide2Img} style={{ width: '100%' }} />
                <h2>Améliorez vos résultats grâce à toute l’expérience du réseau</h2>
              </div>
              <div className="mySlides">
                <img className="img-responsive" src={slide3Img} style={{ width: '100%' }} />
                <h2>Équipez vos points de vente d’un outil efficace et rentable</h2>
              </div>
              <div className="indicators">
                <span className="dot" onClick={this.currentSlide.bind(this)} data-id="1" />
                <span className="dot" onClick={this.currentSlide.bind(this)} data-id="2" />
                <span className="dot" onClick={this.currentSlide.bind(this)} data-id="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { LoginPage }; 