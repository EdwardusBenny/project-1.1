import React, { Component } from 'react';
import CarouselBro from './CarouselBro';
import image1 from '../images/brazil.jpg';
import { Link,Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import image2 from '../images/aaa.jpg';
import image2a from '../images/bbb.jpg';
import image3 from '../images/clothes.jpg';
import image3a from '../images/clothesban.jpg';
import image4 from '../images/kitchen.jpg';
import image4a from '../images/kitchenban.jpg';
import image4b from '../images/kitchenb.jpg';
import image5 from '../images/sports.jpg';
import image5a from '../images/sportsban.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'



class HomePage extends Component {


  
    render() {
      
        return (
            <div>
            <div className="hero">
            <div className="container">
              <div className="row"  >
                <div className="col-md-12">
                  {/* <a className="hero-brand" title="kikipipi"><img alt="Logo" src={image1} width="100%" height="100%"/></a> */}
                </div>
              </div>
        
              <div className="texthome">
                <h1>
                    Find your Style
                  </h1>
        <AnchorLink href="#carouse">
                <p className="tagline">
              
                {/* <Link to="/productpage">See Our Product</Link> */}
See Our Product
                </p>
                </AnchorLink>
              </div>
            </div>
          </div>





            <div className="portfolio" id="carouse">
            <div className="container">
              <h2>
              Category
                </h2>

                <CarouselBro></CarouselBro>
            </div>
            </div>





            <div className="portfolio" id="portfolio">
            <div className="container">
              <h2>
              Category
                </h2>
            </div>
          
          
            <div className="portfolio-grid">
              <div className="row">
              <Fade bottom>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src={image2} height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                           <img className="tile "src={image2a} width="80%"/>
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                </Fade>
        
                <Fade bottom>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src={image3} height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src={image3a} width="80%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>

                <Fade bottom>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src={image4} height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src={image4b} width="80%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>


                <Fade bottom>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src={image5}   height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src={image5a} width="80%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>
              </div>

        
              <div className="row">
              <Fade top>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src="img/Brand-Off-White.jpg" height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src="./img/offwhite.png" width="70%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>

                <Fade top>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src="img/bapecard.jpg" height="280px" width="100%" />
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src="./img/bape.png" width="70%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>


                <Fade top>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="undftd" className="card" src="img/undftdcard.png" height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src="./img/undftd.png" alt="undftd" width="80%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>

                <Fade top>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="card">
                    <a href="#"><img alt="" className="card" src="img/championcard.jpg" height="280px" width="100%"/>
                      <div className="portfolio-over">
                        <div>
                          <h3 className="card-title">
                            <img className="tile "src="./img/champion-logo.png" width="80%"/>
                          </h3>
                        </div>
                      </div></a>
                  </div>
                </div>
                </Fade>
              </div>
            </div>
          </div>









<div id="contact">
<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h2 className="div-title">Contact Us</h2>
    </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-lg-3 col-md-4">
      <div className="info">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>Bumi Cantik no 205<br/>Tangerang,Banten</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>edwardusbenny@gmail.com</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+62 819 9559 5777</p>
        </div>

      </div>
    </div>

    <div className="col-lg-5 col-md-8">
      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <div id="errormessage"></div>
        <form action="" method="post" role="form" className="contactForm">
          <div className="form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div className="validation"></div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>

  </div>
</div>
</div>




</div>



        );
    }
}

export default HomePage;