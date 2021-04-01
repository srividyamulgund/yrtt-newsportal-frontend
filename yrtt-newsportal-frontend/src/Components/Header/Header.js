import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <div className="Header">
            <header>
                <nav className="navbar navbar-expand-md fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Coeus News Portal</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{ float: 'left', paddingRight: '5px' }} ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Dashboard</a>
                                </li>
                                <li>
                                    <a className="nav-link" >Create New Articles</a>
                                </li>
                            </ul>
                            <button className="btn-dbpg btn-sm" type="submit">Logout</button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;