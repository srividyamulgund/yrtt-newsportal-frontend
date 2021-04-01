import './NewArticles.css';

function NewArticles() {
    return (
        <div className="NewArticles">
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Telegraph News Portal</a>
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
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>

                            <button className="btn-dbpg btn-sm btn-primary" type="submit"><a href="#"> </a>Logout</button>

                        </div>
                    </div>
                </nav>
            </header>
            <main className="article-main">
                <div className="container-fluid">
                    <form className="form-article">
                        <div className="container-newarticle">
                            <form action="action_page.php">
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label for="title">Article Title</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="text" id="title" name="articletitle" placeholder="Your title..">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label for="notes">Article Notes</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <textarea id="notes" name="notes" placeholder="Comments.."
                                            style="height:200px"></textarea>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label for="articlecategory">Article Category</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <select id="articlecategory" name="articlecategory">
                                            <option value="politics">Politics</option>
                                            <option value="education">Education</option>
                                            <option value="finance">Finance</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label for="tags">Article Tags</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="text" id="tags" name="articletags" placeholder="Your Tags..">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label for="notes">Article Text Content</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="file" className="form-file-txt">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="col-25-newarticle">
                                        <label for="notes">Article Media Content</label>
                                    </div>
                                    <div className="col-75-newarticle">
                                        <input type="file" className="form-file-txt">
                                        </input>
                                    </div>
                                </div>
                                <div className="row-newarticle">
                                    <div className="form-newarticle">
                                        <button className="btn-submit btn-sm btn-primary" type="submit"
                                            formaction="dashboard.html">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
            </main>
            <footer className="footer-newarticle bg-dark">
                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; 2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
                </p>
            </footer>
        </div>
    );
}

export default NewArticles;
