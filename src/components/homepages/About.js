import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
          <section id="about" className="section section-gray-bg">
          <article className="container">
            <div className="row">
              <div className="medium-12 medium-centered columns">
                <div className="container-annotation">
                  <div className="box box-info left">
                    <div className="rich-text"><p>HackConf is Bulgaria's premier software development conference, happening in Sofia.</p><p>Organized “by developers, for developers”, it covers a wide range of software development topics, regardless of the tech stack.</p><p>HackConf 2019 will include <b>a full day of workshops</b> on 11th of October, and <b>two parallel tracks</b> of talks during both conference days - 12th and 13th of October.<br /></p><p /></div>
                  </div>
                  <div className="box box-video right">
                    <div className="video-wrapper" style={{backgroundImage: 'url(https://hackconf-2019.s3.amazonaws.com/media/images/hackconf-bigphoto.width-600.jpg)'}} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>        
        )
    }
}
export default About;