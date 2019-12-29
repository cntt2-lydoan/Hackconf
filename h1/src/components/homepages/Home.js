import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
          <section className="section section-header">
          <article className="container">
            <div className="row">
              <div className="medium-6 medium-centered columns menu-centered">
                <ul className="menu menu-centered">
                  <li>
                    <a href="https://twitter.com/HackConf_" target="_blank"><i className="icon icon-twitter" /></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/HackConference" target="_blank"><i className="icon icon-fb" /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hackconf/" target="_blank"><img className="navigation-svg-icon" src="https://hackconf-2019.s3.amazonaws.com/static/images/icons/instagram.svg" /></a>
                  </li>
                  <li>
                    <a href="https://github.com/hackbulgaria/" target="_blank"><i className="icon icon-github" /></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/user/HackBulgaria" target="_blank"><i className="icon icon-youtube" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="medium-8 large-8 medium-centered columns">
                <div className="annotation">
                  <div className="row">
                    <div className="small-3 columns">
                      <span className="hr" />
                    </div>
                    <div className="small-6 columns">
                      <p className="info">11 - 13th of October</p>
                    </div>
                    <div className="small-3 columns">
                      <span className="hr"> </span>
                    </div>
                  </div>
                  <div className="logo-header">
                    <a href="/">
                      <img src="https://hackconf-2019.s3.amazonaws.com/media/images/HC19_logo_full.max-470x172.png" />
                    </a>
                  </div>
                  <h4 className="header-headline">A software development conference for developers, by developers</h4>
                </div>
              </div>
            </div>
          </article>
          <nav>
            <div data-sticky-container className="sticky-container" style={{height: '41px'}}>
              <div className="top-bar sticky is-anchored is-at-top" id="main-menu" data-sticky="ho6rdp-sticky" data-options="marginTop:0;" data-top-anchor="about" style={{width: '100%', maxWidth: '1349px', marginTop: '0px', top: '0px', bottom: 'auto'}} data-sticky-on="large" data-resize="main-menu" data-events="resize">
                <ul className="dropdown menu menu-main" data-dropdown-menu>
                  <li><a href="#about">About</a></li>
                  <li><a href="#program">Agenda</a></li>
                  <li><a href="#lecturers">Speakers</a></li>
                  <li><a href="#sponsors">Sponsors</a></li>
                  <li><a href="#past">Past events</a></li>
                  <li><a href="#tickets">Tickets</a></li>
                  <li><a href="#location">Location</a></li>
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </div>
              <div data-sticky="95qopo-sticky" data-options="marginTop:0;" data-top-anchor="about" style={{width: '100%', maxWidth: '1349px'}} data-sticky-on="large" className="sticky-button sticky" data-resize="ndo3m1-sticky" data-events="resize">
                <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="large" style={{display: 'none'}}>
                  <button className="menu-icon menu-button" type="button" data-toggle />
                </div>
              </div>
            </div>
          </nav>
        </section>
        
        )
    }
}

export default Home;