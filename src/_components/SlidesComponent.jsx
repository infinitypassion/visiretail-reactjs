import React from 'react';

import { slide1Img, slide2Img, slide3Img } from '../_helpers';

class SlidesComponent extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(e) {
    this.showSlides(this.slideIndex = e.currentTarget.dataset.id);
  }

  showSlides(n) {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides && slides.length > 0) {
      slides[this.slideIndex - 1].style.display = "block";
    }

    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += " active";
    }
  }
  // End -- Custom methods

  // Render
  render() {
    return (
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
    );
  }
}

export { SlidesComponent }; 