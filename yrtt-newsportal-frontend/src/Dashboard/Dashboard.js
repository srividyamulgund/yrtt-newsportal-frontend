import './Dashboard.css';

function Dashboard() {
    return (
        <div classNameName="Dashboard">
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Coeus News Portal</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="dashboard.html">Dashboard</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="newarticle.html">Create New Articles</a>
                                </li>
                            </ul>
                            <button className="btn-dbpg btn-sm" type="submit"><a href="#"></a>Logout</button>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="main-dbpg">
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <span data-feather="home"></span>
                                      Dashboard
                                  </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file"></span>
                                      My Articles
                                  </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                      Pending Articles
                                  </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart"></span>
                                      Approved Articles
                                  </a>
                                    </li>
                                </ul>
                                <h6
                                    className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Archived Articles</span>
                                    <a className="link-secondary" href="#" aria-label="Add a new report">
                                        <span data-feather="plus-circle"></span>
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-2">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text"></span>
                                      Current month
                                  </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text"></span>
                                      Last quarter
                                  </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>


                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Articles Dashboard</h1>
                            </div>
                            <h2>Current Articles</h2>
                            <div className="table-responsive table-condensed">
                                <table
                                    className="table table-responsive-sm table-outline table-striped table-responsive table-condensed">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Title</th>
                                            <th>Publishing Date</th>
                                            <th>Published Externally?</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Politics latest news: Queen pays tribute to 'grief and loss felt by so many' on
                                          anniversary of lockdown</td>
                                            <td>23-March-2021</td>
                                            <td>Yes</td>
                                            <td>
                                                <a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Angela Merkel backs EU threat of vaccine ban as Germany lockdown extended</td>
                                            <td>23-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Coronavirus lockdown one year on: Ten reasons why so many Britons have died</td>
                                            <td>23-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Key to how universe works may have been discovered</td>
                                            <td>23-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Travel news latest: Foreign holiday ban extended to July</td>
                                            <td>23-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2>Past Articles</h2>
                            <div className="table-responsive my-4 w-100">
                                <table className="table table-responsive-sm table-striped table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Publishing Date</th>
                                            <th>Published Externally?</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Politics latest news: Queen pays tribute to 'grief and loss felt by so many' on
                                          anniversary of lockdown</td>
                                            <td>21-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Angela Merkel backs EU threat of vaccine ban as Germany lockdown extended</td>
                                            <td>22-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Coronavirus lockdown one year on: Ten reasons why so many Britons have died</td>
                                            <td>20-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Key to how universe works may have been discovered</td>
                                            <td>18-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Travel news latest: Foreign holiday ban extended to July</td>
                                            <td>19-March-2021</td>
                                            <td>Yes</td>
                                            <td><a className="btn-sm" href="#"><i className="fa fa-edit"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-trash"></i></a>
                                                <a className="btn-sm" href="#"><i className="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                        <footer className="footer-dashboard container bg-dark">
                            <p className="float-end"><a href="#">Back to top</a></p>
                            <p>&copy; 2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
                            </p>
                        </footer>

                        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
