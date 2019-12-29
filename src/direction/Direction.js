import React, { Component, Fragment } from 'react'
import AdminDirection from './AdminDirection';

import { Route} from 'react-router-dom';

class Direction extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/admin" component={AdminDirection} />
                {/* <Route  path="/homepages" component={HomepageDirection} /> */}

                {/* <Route exact path="/" render={() => (
                    loggedIn ? (
                        <Redirect to="/dashboard" />
                    ) : (
                            <PublicHomePage />
                        )
                )} /> */}
            </Fragment>
        )
    }
}
export default Direction;