import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firstPict from './images/gambar-1.png'
import secondPict from './images/gambar-2.png'
import thirdPict from './images/gambar-3.png'
import { Icon } from '@iconify/react';

const Projek = () => {
    const width = {
        width: "18rem"
    }

    return ( 
        <div>
            <div id="projek" className="row-3">
                <h2>Projek saya</h2>
                <Icon icon="mdi:home" style={{ color: '#D9F5F9' }} />
                <div className="projects">
                    <div className="card" style={ width }>
                        <img src={ firstPict } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Breakout</h5>
                            <a href="/#" className="btn btn-primary">Coba Main</a>
                        </div>
                    </div>
                    <div className="card" style={ width }>
                        <img src={ secondPict } className="card-img-top" alt="..." />
                        <div className="breakout card-body">
                            <h5 className="card-title">Rock-Scissors-Paper</h5>
                            <a href="/#" className="btn btn-primary">Coba Main</a>
                        </div>
                    </div>
                    <div className="card" style={ width }>
                        <img src={ thirdPict } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Memory Card</h5>
                            <a href="/#" className="btn btn-primary">Coba Main</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projek;