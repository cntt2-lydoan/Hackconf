import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';



export default class Sidebar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{ marginLeft: '0' }} >
                {/* Sidebar - Brand */}
                <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin" >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fa fa-coffee" aria-hidden="true"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3"><sup>HACKCONF</sup></div>
                </NavLink>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/homepages">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Dashboard</span></NavLink>
                </li>

                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    ACTIVITIES
                    </div>
                {/* Nav Item - Pages Collapse Menu */}



                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/admin-about">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <span>Manage About</span></NavLink>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fa fa-linode" aria-hidden="true"></i>
                        <span>Manage Agenda</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className="collapse-item" to="/admin/admin-agenda/workshops">Manage workshop</NavLink>
                            <NavLink className="collapse-item" to="/admin/admin-agenda/day1">Manage Day 1</NavLink>
                            <NavLink className="collapse-item" to="/admin/admin-agenda/day2">Manage Day 2</NavLink>
                        </div>
                    </div>
                </li>



                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/admin-socials">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                        <span>Manage Socials</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/admin-talks">
                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                        <span>Manage Talk</span>
                    </NavLink>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>
        )
    }
}