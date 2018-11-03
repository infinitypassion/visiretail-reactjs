import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import { pointSalesFakeData } from '../_helpers/fake-data';
import { drawChart, drawRegionsMap } from '../_helpers/chart';
import { graphImg, icImpressionsImg, icClicsRedImg, icClicsImg, icConversionsImg, icEuroImg, rentreeScolaireImg, icClicsGreenImg, laSemaineImg, saintValentinImg } from '../_helpers';

import { StatsDetailedComponent } from '../HomePage/StatsDetailedComponent';
import { GraphSectionComponent } from '../HomePage/GraphSectionComponent';

const DRP_LOCALE = {
  "daysOfWeek": [
    "DI",
    "LU",
    "MA",
    "ME",
    "JE",
    "VE",
    "SA"
  ],
  "monthNames": [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  "firstDay": 0
};
class PointSaleDetailPage extends React.Component {
  constructor() {
    super();

    this.state = {
      from: moment().format('DD-MM-YYYY'),
      to: moment().format('DD-MM-YYYY')
    };
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    document.body.id = 'points-sale';

    window.addEventListener('mousewheel', this.mouseWheelEvent);
    window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);

    $(function () {
      $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage / 10 + '%'
        }, 1000);
      });
    });

    // TODO - Need to convert to react https://github.com/akiran/react-slick
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: '.slider-nav-thumbnails',
      focusOnSelect: false
    });

    $('.slider-nav-thumbnails').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: true,
      focusOnSelect: true,
      autoplay: false,
      swipeLeft: null,
      infinite: false,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    drawChart();
    drawRegionsMap();
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.mouseWheelEvent);
    window.removeEventListener('DOMMouseScroll', this.mouseWheelEvent);

    document.getElementById('points-sale').classList.remove('closed');
    document.body.id = '';
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  mouseWheelEvent(e) {
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

    if (delta > 0) document.getElementById('points-sale').classList.remove('closed');
    else document.getElementById('points-sale').classList.add('closed');
    return true; // this line is only added so the whole page won't scroll in the demo
  }

  handleDRPApplyEvent(event, picker) {
    this.setState({ from: picker.startDate.format('DD-MM-YYYY'), to: picker.endDate.format('DD-MM-YYYY') });
  }

  active() {
    var element = document.getElementById("campagne_wraper");
    element.classList.toggle("active");
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main single_sale section">
          <div className="pointserch_wrap section">
            <div className="container">
              <div className="sale_search">
                <input id="suggestonInput" placeholder="Rechercher un point de vente..." className="form-control serch_txt" type="search" />
              </div>
              <div className="pointsale_slider">
                {/* THUMBNAILS */}
                <div className="slider-nav-thumbnails">
                  {
                    pointSalesFakeData.franchisees.map((saleData, key) => {
                      return (
                        <div key={key}>
                          <div className="point_con">
                            {
                              saleData.sellPostionImg ?
                                (<span className="number nbg"><img src={saleData.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="number">{saleData.sellPostionNo}</span>)
                            }

                            <h5>{saleData.agencyName}</h5>
                            <h6>{saleData.custName}</h6>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            {/* MAIN SLIDES */}
            <div className="slider">
              {
                pointSalesFakeData.franchisees.map((saleData, key) => {
                  return (
                    <div key={key}>
                      <div className="campagnes_main bg_white section">
                        <div className="container">
                          <div className="row budget_main">
                            <div className="col-sm-6 col-xs-12">
                              <div className="budget_left">
                                {
                                  saleData.sellPostionImg ?
                                    (<span className="number nbg"><img src={saleData.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="number">{saleData.sellPostionNo}</span>)
                                }
                                <h1>Visiperf <span className="purple">Cadet</span></h1>
                                <p>102 rue de Chateaudun 75009, Paris</p>
                              </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="budget_spent section">
                                <p>Budget dépensé</p>
                                <span className="value">12 786,60€</span>
                                <span className="purple">1,84158€</span>
                              </div>
                            </div>
                          </div>
                          <div className="budget_main section">
                            <div className="performance_nav">
                              <ul>
                                <li><a href="#">l’an dernier</a></li>
                                <li><a href="#">les 6 derniers mois</a></li>
                                <li><a href="#">le mois dernier</a></li>
                                <li><a href="#">la semaine dernière</a></li>
                                <li>
                                  <DateRangePicker locale={DRP_LOCALE} onApply={this.handleDRPApplyEvent.bind(this)}>
                                    <a>personnalisé...</a>
                                  </DateRangePicker>
                                </li>
                              </ul>
                            </div>
                            <div className="daterange">
                              <input style={{ display: 'none' }} type="text" defaultValue="personnalisé..." className="daterangepicker2" />
                              <div className="for_date">
                                <h6>Début</h6>
                                <label className="from">{this.state.from}</label>
                              </div>
                              <div className="for_date">
                                <h6>Fin</h6>
                                <label className="to">{this.state.to}</label>
                              </div>
                            </div>
                          </div>
                          <h6>Activité <span>Les 6 derniers mois</span></h6>
                        </div>
                      </div>

                      <div className="graph section bg_white" onClick={this.active.bind(this)}>
                        <img src={graphImg} alt="#" className="img-responsive" />
                      </div>

                      <div className="campagnes_main bg_white section">
                        <div className="container">
                          <h6>Détails des campagnes <span>Les 6 derniers mois</span></h6>
                          <div className="campagnes_wrap section">
                            <div className="franchi_campaign">
                              <ul>
                                <li>
                                  <div className="imgwrap">
                                    <img src={rentreeScolaireImg} alt="Rentrée scolaire" className="img-responsive" />
                                    <div className="progress_main blue">
                                      <ProgressBar now={84} />
                                      <span>84%</span>
                                    </div>
                                  </div>
                                  <div className="textwrap">
                                    <h6>Rentrée scolaire</h6>
                                    <span className="date">18/01/18 - 16/02/18</span>
                                  </div>
                                  <div className="overlay_list">
                                    <ul>
                                      <li>
                                        <span className="ico"><img src={icImpressionsImg} alt="impressions" className="img-responsive" /></span>
                                        <span className="value">187 987</span>
                                        <h6>impressions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icClicsGreenImg} alt="clics" className="img-responsive" /></span>
                                        <span className="value green">13 504</span>
                                        <h6 className="green">clics</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                        <span className="value">89</span>
                                        <h6>conversions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                        <span className="value">294,00€</span>
                                        <h6>budget dépensé</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                        <span className="value">1,2974€</span>
                                        <h6>coût du clic</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="imgwrap">
                                    <img src={laSemaineImg} alt="La-semaine" className="img-responsive" />
                                    <div className="progress_main orange">
                                      <ProgressBar now={48} />
                                      <span>48%</span>
                                    </div>
                                  </div>
                                  <div className="textwrap">
                                    <h6>La semaine du goût</h6>
                                    <span className="date">18/01/18 - 16/02/18</span>
                                  </div>
                                  <div className="overlay_list">
                                    <ul>
                                      <li>
                                        <span className="ico"><img src={icImpressionsImg} alt="impressions" className="img-responsive" /></span>
                                        <span className="value">21 879</span>
                                        <h6>impressions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icClicsRedImg} alt="clics" className="img-responsive" /></span>
                                        <span className="value red">219</span>
                                        <h6 className="red">clics</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                        <span className="value">32</span>
                                        <h6>conversions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                        <span className="value">87,00€</span>
                                        <h6>budget dépensé</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                        <span className="value">0,3901€</span>
                                        <h6>coût du clic</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="imgwrap">
                                    <img src={saintValentinImg} alt="Saint-Valentin" className="img-responsive" />
                                    <div className="progress_main terminate">
                                      <ProgressBar now={100} />
                                      <span>Terminé</span>
                                    </div>
                                  </div>
                                  <div className="textwrap">
                                    <h6>Saint-Valentin</h6>
                                    <span className="date">18/01/18 - 16/02/18</span>
                                  </div>
                                  <div className="overlay_list">
                                    <ul>
                                      <li>
                                        <span className="ico"><img src={icImpressionsImg} alt="impressions" className="img-responsive" /></span>
                                        <span className="value">347 920</span>
                                        <h6>impressions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                                        <span className="value">10 971</span>
                                        <h6>clics</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                        <span className="value">318</span>
                                        <h6>conversions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                        <span className="value">429,00€</span>
                                        <h6>budget dépensé</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                        <span className="value">0,0312€</span>
                                        <h6>coût du clic</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                              <a href="#" className="activity_btn">
                                <span> Voir toute l’activité de mes points de vente </span>
                              </a>
                            </div>
                          </div>
                          <h6>Détails du budget dépensé <span>Les 6 derniers mois</span></h6>
                        </div>
                      </div>
                      <div className="statistiques bg_white section">
                        <div className="container">
                          <StatsDetailedComponent></StatsDetailedComponent>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>

        <GraphSectionComponent></GraphSectionComponent>
      </section>
    );
  }
}

export { PointSaleDetailPage }; 