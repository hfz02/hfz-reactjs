import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/#">Portofolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#biografi">Biografi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projek">Projek</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#kontak">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;