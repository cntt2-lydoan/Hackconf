import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import './Agenda.css';

export default class NewWorkshop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authorname: '',
            title: '',
            starttime: '',
            finishtime: '',
            address: '',
            imageURL: ''
        }
    }



    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });

    };
    // editTime(start, finish) {
    //     return start + ".00 - "+finish+".00"
    // }


    render() {

        return (
            <div className="row bg-white vy-border" style={{ margin: '0 100px', boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important' }}>

                <div className="col-6">
                    <form>
                        <div>
                            

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" name="title" onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Author Name</label>
                                <input type="text" className="form-control" name="authorname" onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Start time</label>
                                <input type="text" className="form-control" name="starttime" onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Finish time</label>
                                <input type="text" className="form-control" name="finishtime" onChange={(event) => this.isChange(event)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="title">Address</label>
                                <input type="text" className="form-control" name="address" onChange={(event) => this.isChange(event)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="imageURL">Image URL</label>
                                <input name="imageURL" type="imageURL" className="form-control" id="imageURL" onChange={(event) => this.isChange(event)} />

                            </div>
                            <NavLink className="btn btn-primary" to="/admin/admin-products" onClick={() => this.save()} >Create</NavLink>
                            <NavLink className="btn btn-basic" to="/admin/admin-products" /*onClick={() => this.save()}*/  >Cancel</NavLink>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <div>
                        <h1 className="card-title" style={{ color: '#000' }} >{this.state.title} </h1>
                    </div>
                    <div className="card" style={{ marginTop: '31px' }}>
                        <img src={this.state.imageURL} alt="" />
                        <div className="card-body">
                            <h4 className="card-title" style={{ color: '#000' }} >{this.state.authorname} </h4>
                            
                            <h6 className="card-title" style={{ color: '#000' }} >{this.state.starttime+".00 - "+this.state.finishtime+".00"}</h6>
                            <h5 className="card-title" style={{ color: '#000' }} >{this.state.address} </h5>

                        </div>
                    </div>
                    {/* {console.log(this.props.value)} */}
                </div>

            </div>

        )
    }
}
