import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
            <section id="location" className="section">
                <article className="container-map">
                    <div className="row placeholder-wrapper">
                    <div className="small-4 xlarge-offset-2 large-offset-1 columns">
                        <div className="map-placeholder">
                        <h2 className="headline">Location</h2>
                        <ul className="no-bullet" itemScope itemType="http://schema.org/PostalAddress">
                            <li itemProp="address"><i className="icon icon-map" />
                            <span property="streetAddress">
                                Sofia, National Palace of Culture
                            </span>
                            </li>
                            <li itemProp="email"><i className="icon icon-envelope" />team@hackconf.bg</li>
                            <li itemScope itemType="http://schema.org/Event"><i className="icon icon-clock" />
                            08:00-18:30
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div id="map" />
                </article>
                </section>

        )
    }
}
