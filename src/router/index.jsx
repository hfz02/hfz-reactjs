import '../App.css'
import Nav from "./Nav"
import Home from './Home'
import About from "./About"
import CounterApp from "./CounterApp"
import { HashRouter, Routes, Route } from 'react-router-dom'

const Routerr = () => {
    return ( 
        <div className='App'>
            <HashRouter>
                <Nav />
                <Routes>
                    <Route exact path='/hfz-reactjs/' element={<Home/>} />
                    <Route path='/hfz-reactjs/about' element={<About/>} />
                    <Route path='/hfz-reactjs/redux' element={<CounterApp/>} />
                </Routes>
            </HashRouter>
        </div>
    );
}
 
export default Routerr;