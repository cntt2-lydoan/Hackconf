import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class AdminDay1 extends Component {
    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Manage Agenda</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div>
                                </div>
                                <div className=" col-sm-12 col-md-6">
                                    <div id="dataTable_filter" className="row dataTables_filter">
                                    <NavLink className="btn btn-primary col-lg-3 btn" to="/admin/admin-agenda/day1" style={{margin: '0 10px'}}>New day 1</NavLink>
                                        <input className="form-control col-lg-6" type="text" placeholder="Search" aria-label="Search" onChange={(event) => this.isChange(event)} name="searchText"/></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '195px' }}>Title</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '150px' }}>Price</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '142px' }}>Category</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '66px' }}>Image</th>

                                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: '132px' }}></th></tr>
                                        </thead>
                                        <tbody>
                                            {/* {datas} */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div>

                                <div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                    <ul className="pagination">
                                        <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>

                                        <li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>

                                        <li className="paginate_button page-item ">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>

                                        <li className="paginate_button page-item ">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>

                                        <li className="paginate_button page-item ">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>

                                        <li className="paginate_button page-item ">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>

                                        <li className="paginate_button page-item ">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li>

                                        <li className="paginate_button page-item next" id="dataTable_next">
                                            <a  href="https://www.facebook.com/"  aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
