
import "bootstrap/dist/css/bootstrap.min.css"
// import cousef from "/assets/images/course-01.jpg"
// import couses from "/assets/images/course-02.jpg"
// import couset from "/assets/images/course-03.jpg"
// import cousefo from "/assets/images/course-04.jpg"
import Upcoming from "./components/Upcoming"
import Apply from "./components/Apply"
import Facts from "./components/Facts"
import Contact from "./components/Contact"

function App() {


  return (
    <>

      <div>
        {/* Sub Header */}
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-8">
                <div className="left-content">
                  <p>This is an educational <em>HTML CSS</em> template by TemplateMo website.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="right-icons">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Header Area Start ***** */}
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    BELTEI IU
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                    <li><a href="#meeting">Meetings</a></li>
                    <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                    <li className="has-sub">
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="meetings.html">Upcoming Meetings</a></li>
                        <li><a href="meeting-details.html">Meeting Details</a></li>
                      </ul>
                    </li>
                    {/* <li className="scroll-to-section"><a href="#courses">Courses</a></li>  */}
                    <li className="scroll-to-section"><a href="#contact">Contact Us</a></li> 
                  </ul>        
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
        {/* ***** Main Banner Area Start ***** */}
        <section className="section main-banner" id="top" data-section="section1">
          <video autoPlay muted loop id="bg-video">
            <source src="assets/images/course-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="caption">
                    <h6>Hello Students</h6>
                    <h2>Welcome to BELTEI</h2>
                    <p>This is an edu meeting HTML CSS template provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p>
                    <div className="main-button-red">
                      <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}
        {/* <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="owl-service-item owl-carousel">
                  <div className="item">
                    <div className="icon">
                      <img src="assets/images/service-icon-01.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Education</h4>
                      <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="assets/images/service-icon-02.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Teachers</h4>
                      <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="assets/images/service-icon-03.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Students</h4>
                      <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="assets/images/service-icon-02.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Online Meeting</h4>
                      <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="assets/images/service-icon-03.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Networking</h4>
                      <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Upcoming/>
        <Apply/>
        {/* <section className="our-courses" id="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Our Popular Courses</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="owl-courses-item owl-carousel">
                  <div className="item">
                    <img src={cousef} alt="Course One" />
                    <div className="down-content">
                      <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$160</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={couses} alt="Course Two" />
                    <div className="down-content">
                      <h4>Curabitur molestie dignissim purus vel</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$180</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={couset} alt="" />
                    <div className="down-content">
                      <h4>Nulla at ipsum a mauris egestas tempor</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$140</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={cousefo} alt="" />
                    <div className="down-content">
                      <h4>Aenean molestie quis libero gravida</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$120</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={cousef} alt="" />
                    <div className="down-content">
                      <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$250</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={couses} alt="" />
                    <div className="down-content">
                      <h4>TemplateMo is the best website for Free CSS</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$270</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={couset} alt="" />
                    <div className="down-content">
                      <h4>Web Design Templates at your finger tips</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$340</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={cousefo} alt="" />
                    <div className="down-content">
                      <h4>Please visit our website again</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$360</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={cousef} alt="" />
                    <div className="down-content">
                      <h4>Responsive HTML Templates for you</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$400</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={couses} alt="" />
                    <div className="down-content">
                      <h4>Download Free CSS Layouts for your business</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$430</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={couset} alt="" />
                    <div className="down-content">
                      <h4>Morbi in libero blandit lectus cursus</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$480</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img src={cousefo} alt="" />
                    <div className="down-content">
                      <h4>Curabitur molestie dignissim purus</h4>
                      <div className="info">
                        <div className="row">
                          <div className="col-8">
                            <ul>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <span>$560</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Facts/>
        <Contact/>
      </div>
    
    
    </>
  )
}

export default App
