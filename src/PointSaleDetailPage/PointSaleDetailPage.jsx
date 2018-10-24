import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane, ProgressBar } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import { pointSalesFakeData } from '../_helpers/fake-data';
import { drawChart, drawRegionsMap } from '../_helpers/chart';

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

    // TODO - need to convert into react
    $(function () {
      $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage / 10 + '%'
        }, 1000);
      });
    });

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
                    // <div key={key}>
                    //   <div className="point_con">
                    //     {
                    //       saleData.sellPostionImg ?
                    //         (<span className="number nbg"><img src={saleData.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="number">{saleData.sellPostionNo}</span>)
                    //     }

                    //     <h5>{saleData.agencyName}</h5>
                    //     <h6>{saleData.custName}</h6>
                    //   </div>
                    // </div>

                    <div key={key}>
                      <div className="campagnes_main bg_white section">
                        <div className="container">
                          <div className="row budget_main">
                            <div className="col-sm-6 col-xs-12">
                              <div className="budget_left">
                                <span className="number nbg"><img src="images/sell-postion-1.svg" className="img-responsive" alt="#" /></span>
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
                      <GraphSectionComponent></GraphSectionComponent>
                      {
                        /* 
                        <div className="graph section bg_white" onclick="active()">
                          <img src="images/graph.jpg" alt="#" className="img-responsive" />
                        </div> 
                        */
                      }
                      <div className="campagnes_main bg_white section">
                        <div className="container">
                          <h6>Détails des campagnes <span>Les 6 derniers mois</span></h6>
                          <div className="campagnes_wrap section">
                            <div className="franchi_campaign">
                              <ul>
                                <li>
                                  <div className="imgwrap">
                                    <img src="images/Rentrée-scolaire.jpg" alt="Rentrée scolaire" className="img-responsive" />
                                    <div className="progress_main blue">
                                      <div className="progress">
                                        <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '84%' }}>
                                        </div>
                                      </div>
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
                                        <span className="ico"><img src="images/ic-impressions.svg" alt="impressions" className="img-responsive" /></span>
                                        <span className="value">187 987</span>
                                        <h6>impressions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-clics-green.svg" alt="clics" className="img-responsive" /></span>
                                        <span className="value green">13 504</span>
                                        <h6 className="green">clics</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-conversions.svg" alt="conversions" className="img-responsive" /></span>
                                        <span className="value">89</span>
                                        <h6>conversions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-euro.svg" alt="euro" className="img-responsive" /></span>
                                        <span className="value">294,00€</span>
                                        <h6>budget dépensé</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-euro.svg" alt="euro" className="img-responsive" /></span>
                                        <span className="value">1,2974€</span>
                                        <h6>coût du clic</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="imgwrap">
                                    <img src="images/La-semaine.jpg" alt="La-semaine" className="img-responsive" />
                                    <div className="progress_main orange">
                                      <div className="progress">
                                        <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '48%' }}>
                                        </div>
                                      </div>
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
                                        <span className="ico"><img src="images/ic-impressions.svg" alt="impressions" className="img-responsive" /></span>
                                        <span className="value">21 879</span>
                                        <h6>impressions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-clics-red.svg" alt="clics" className="img-responsive" /></span>
                                        <span className="value red">219</span>
                                        <h6 className="red">clics</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-conversions.svg" alt="conversions" className="img-responsive" /></span>
                                        <span className="value">32</span>
                                        <h6>conversions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-euro.svg" alt="euro" className="img-responsive" /></span>
                                        <span className="value">87,00€</span>
                                        <h6>budget dépensé</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-euro.svg" alt="euro" className="img-responsive" /></span>
                                        <span className="value">0,3901€</span>
                                        <h6>coût du clic</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="imgwrap">
                                    <img src="images/Saint-Valentin.jpg" alt="Saint-Valentin" className="img-responsive" />
                                    <div className="progress_main terminate">
                                      <div className="progress">
                                        <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                                        </div>
                                      </div>
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
                                        <span className="ico"><img src="images/ic-impressions.svg" alt="impressions" className="img-responsive" /></span>
                                        <span className="value">347 920</span>
                                        <h6>impressions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-clics.svg" alt="clics" className="img-responsive" /></span>
                                        <span className="value">10 971</span>
                                        <h6>clics</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-conversions.svg" alt="conversions" className="img-responsive" /></span>
                                        <span className="value">318</span>
                                        <h6>conversions</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-euro.svg" alt="euro" className="img-responsive" /></span>
                                        <span className="value">429,00€</span>
                                        <h6>budget dépensé</h6>
                                      </li>
                                      <li>
                                        <span className="ico"><img src="images/ic-euro.svg" alt="euro" className="img-responsive" /></span>
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
                          <div className="statistiques_main">
                            <div className="statistiques_tab">
                              <ul className="nav-tabs">
                                <li className="active google"><a data-toggle="tab" href="#google">GOOGLE<span>
                                  <img src="images/ic-google.svg" className="img-responsive" alt="google" /></span></a></li>
                                <li className="facebook"><a data-toggle="tab" href="#facebook">FACEBOOK<span>
                                  <img src="images/ic-facebook.svg" className="img-responsive" alt="google" /></span></a></li>
                              </ul>
                              <div className="tab-content">
                                <div id="google" className="tab-pane fade in active">
                                  <div className="statistiques_con">
                                    <p>Le budget dépensé sur Google les 6 derniers mois</p>
                                    <h2>786,00€</h2>
                                    <div className="progress">
                                      <div className="progress-bar" role="progressbar" style={{ width: '63%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>63%</div>
                                      <span className="budeget_data">1 787,59€</span>
                                    </div>
                                    <div className="row google_budgtes">
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">1</span>
                                            <h3>Référencement local</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">2</span>
                                            <h3>Transformation digitale</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">3</span>
                                            <h3>Campagnes marketing</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">4</span>
                                            <h3>Store Locator</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">5</span>
                                            <h3>Display Local</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">6</span>
                                            <h3>Seo Local</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">7</span>
                                            <h3>Remarketing</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">8</span>
                                            <h3>Campagnes Locales</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="budgtes_box">
                                          <div className="budget_title">
                                            <span className="number">9</span>
                                            <h3>Drive To Store</h3>
                                            <label className="mclick">10 971</label>
                                          </div>
                                          <div className="budget_type">
                                            <span className="impressions">179 971</span>
                                            <span className="clics">10 971</span>
                                            <span className="conversions">25</span>
                                          </div>
                                          <div className="budeget_des">
                                            <ul>
                                              <li><span>impressions</span><strong>179 971</strong>
                                              </li>
                                              <li><span>clics</span><strong>10 971</strong>
                                              </li>
                                              <li><span>conversions</span><strong>25</strong>
                                              </li>
                                              <li><span>Budget dépensé</span><strong>299,00€</strong></li>
                                              <li><span>Coût du lead</span><strong>1,084€</strong></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div id="facebook" className="tab-pane fade">
                                  <div className="statistiques_con">
                                    <p>Le budget dépensé sur Facebook les 6 derniers mois</p>
                                    <h2>12 879,00€</h2>
                                    <div className="progress">
                                      <div className="progress-bar" role="progressbar" style={{ width: '43%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>43%</div>
                                      <span className="budeget_data">26 786,00€</span>
                                    </div>
                                    <div className="socialchar_tab">
                                      <ul className="nav-tabs">
                                        <li className="active">
                                          <a data-toggle="tab" href="#country">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12.573px" height="11.317px" viewBox="0.174 0.353 12.573 11.317" enableBackground="new 0.174 0.353 12.573 11.317" xmlSpace="preserve">
                                              <path d="M3.317,6.64H0.174v5.029h3.143V6.64z" />
                                              <path d="M12.747,0.353H9.604v11.316h3.144V0.353z" />
                                              <path d="M8.032,3.496H4.889v8.174h3.144V3.496z" />
                                            </svg>
                                          </a>
                                        </li>
                                        <li>
                                          <a data-toggle="tab" href="#regions">
                                            <svg version="1.1" width="14.259px" height="14.259px" viewBox="0.737 0.882 14.259 14.259" enableBackground="new 0.737 0.882 14.259 14.259" xmlSpace="preserve">
                                              <path d="M12.908,13.053c1.346-1.348,2.088-3.138,2.088-5.042s-0.742-3.694-2.088-5.041
                                              c-1.348-1.347-3.138-2.088-5.042-2.088S4.171,1.623,2.825,2.97C1.479,4.316,0.737,6.106,0.737,8.011s0.742,3.694,2.088,5.042
                                              c1.347,1.346,3.137,2.088,5.042,2.088S11.561,14.398,12.908,13.053z M12.277,3.6c0.878,0.878,1.462,1.972,1.703,3.162
                                              c-0.188-0.276-0.367-0.379-0.479,0.239c-0.115,1.008-1.041,0.364-1.623,0.722c-0.612-0.413-1.99,0.803-1.756-0.568
                                              c0.361-0.619,1.949,0.828,1.158-0.481C10.775,5.76,9.434,3.737,9.609,2.688C9.631,1.16,8.047,2.369,7.502,2.876
                                              c-0.367,1.016-0.125,2.79-1.085,3.288c-1.042,0.045-1.936,0.14-2.339,1.304C3.835,8.301,4.336,9.541,5.229,9.732
                                              c1.307,0.821,1.774-0.961,3-0.994c0.381,0.398,1.418,0.524,1.504,0.971c-0.805,0.143,1.02,0.676-0.077,0.98
                                              c-0.605-0.071-0.995-0.628-0.674-1.1c-1.173-0.273-1.21,1.697-2.338,1.076c-0.029-0.983-1.841-0.319-0.627-0.12
                                              c0.417,0.183-0.68,0.71-0.087,0.614c0.292,0.016,1.272,0.359,1.007,0.591c0.546,0.339,1.004-0.812,1.539,0.026
                                              c0.386,0.645-0.162,0.764-0.646,0.437c-0.272,0.306,0.481,0.964,1.146,1.249c0.222,0.096,0.433,0.146,0.595,0.133
                                              c0.336-0.387,0.955-0.454,0.987,0.047c-0.829,0.396-1.744,0.606-2.691,0.606c-1.359,0-2.652-0.432-3.722-1.23
                                              c0.288-0.132,0.451-0.296,0.174-0.506c-0.215-0.642-1.088-1.502-1.855-1.38c-0.398-0.687-0.66-1.443-0.772-2.235
                                              c0.642-0.212,0.79-0.633,0.652-0.773c-0.327-0.286-0.528-0.69-0.632-1.132C1.92,5.713,2.521,4.534,3.455,3.6
                                              C4.633,2.421,6.2,1.772,7.866,1.772C9.533,1.772,11.1,2.421,12.277,3.6z" />
                                            </svg>
                                          </a>
                                        </li>
                                      </ul>
                                      <div className="tab-content">
                                        <div id="country" className="tab-pane fade in active">
                                          <img src="images/country-graph.svg" className="img-responsive" alt="country" />
                                        </div>
                                        <div id="regions" className="tab-pane fade">
                                          <div id="regions_div" style={{ width: 900, height: 500 }} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="facebook_budget">
                                      <ul>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <span className="icon"><img src="images/clics.svg" alt="Clics" className="img-responsive" /></span>
                                              <h3>987</h3>
                                            </div>
                                            <div className="spent_des">
                                              <h5>Clics</h5>
                                              <p>Think of reach as the number of unique people who see your content. In a perfect world. </p>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <span className="icon"><img src="images/impressions.svg" alt="impressions" className="img-responsive" /></span>
                                              <h3>19 785</h3>
                                            </div>
                                            <div className="spent_des">
                                              <h5>Impressions</h5>
                                              <p>There is also a 2:1 ratio of male to all other age groups combined.</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <h3>0,78%</h3>
                                            </div>
                                            <div className="spent_des">
                                              <h5>CTR</h5>
                                              <p>30-40 age people are the most visitors of your campaign.</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <span className="icon"><img src="images/portée.svg" alt="portée" className="img-responsive" /></span>
                                              <h3>359 589</h3>
                                            </div>
                                            <div className="spent_des">
                                              <h5>Portée</h5>
                                              <p>Think of reach as the number of unique people who see your content. In a perfect world.</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <div id="piechart" />
                                            </div>
                                            <div className="spent_des">
                                              <h5>Clics cumulés par genre</h5>
                                              <p>There is also a 2:1 ratio of male to all other age groups combined.</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <div id="chart">
                                                <ul id="bars">
                                                  <li>
                                                    <div data-percentage={242} className="bar" /><span>18-24</span></li>
                                                  <li>
                                                    <div data-percentage={398} className="bar" /><span>25-34</span></li>
                                                  <li>
                                                    <div data-percentage={487} className="bar" /><span>35-44</span></li>
                                                  <li className="high">
                                                    <div data-percentage={741} className="bar" /><span>45-54</span></li>
                                                  <li>
                                                    <div data-percentage={512} className="bar" /><span>55-64</span></li>
                                                  <li>
                                                    <div data-percentage={385} className="bar" /><span>65+</span></li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="spent_des">
                                              <h5>Clics cumulés par âge</h5>
                                              <p>30-40 age people are the most visitors of your campaign.</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="spent_box">
                                            <div className="spent_top">
                                              <span className="icon"><img src="images/coût-moyen.svg" alt="coût-moyen" className="img-responsive" /></span>
                                              <h3>0,24€</h3>
                                            </div>
                                            <div className="spent_des">
                                              <h5>Coût moyen du clic</h5>
                                              <p>Think of reach as the number of unique people who see your content. In a perfect world.</p>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { PointSaleDetailPage }; 