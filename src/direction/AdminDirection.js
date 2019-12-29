import React, { Component, Fragment } from 'react'
import Sidebar from './../components/admin/Sidebar';
import Navbar from './../components/admin/Navbar';

import { Route} from 'react-router-dom';
import Home from './../components/admin/Home';
import AdminAbout from '../components/admin/adminabout/AdminAbout';
import AdminWorkshop from './../components/admin/adminagenda/AdminWorkshop';
import AdminDay1 from '../components/admin/adminagenda/AdminDay1';
import AdminDay2 from '../components/admin/adminagenda/AdminDay2';
import AdminTalk from './../components/admin/adminspeaker/AdminTalk';
import AdminSocial from './../components/admin/adminsocial/AdminSocial';
import NewWorkshop from './../components/admin/adminagenda/NewWorkshop';

export default class AdminDirection extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/admin" component={Sidebar} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Route path="/admin" component={Navbar} />
                        <div className="container-fluid" >
                            <Route exact path="/admin/" component={Home} />
                            <Route exact path="/admin/admin-about" component={AdminAbout} />

                            <Route exact path="/admin/admin-socials" component={AdminSocial} />
                            <Route exact path="/admin/admin-agenda/workshops" component={AdminWorkshop} />
                            <Route exact path="/admin/admin-agenda/day1" component={AdminDay1} />
                            <Route exact path="/admin/admin-agenda/day2" component={AdminDay2} />
                            <Route exact path="/admin/admin-talks" component={AdminTalk} />
                            <Route exact path="/admin/admin-agenda/workshops/new-workshop" component={NewWorkshop} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
 