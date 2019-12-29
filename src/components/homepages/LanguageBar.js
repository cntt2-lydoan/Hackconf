import React, { Component } from 'react'

export default class LanguageBar extends Component {
    render() {
        return (
            <div className="language-bar">
                <div ref="bg">BG</div>
                <div ref="en">EN</div>
            </div>

        )
    }
}
