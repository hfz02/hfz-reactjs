import '../App.css'
import Nav from "./Nav"
import Home from './Home'
import About from "./About"
import CounterApp from "./CounterApp"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routerr = () => {
    return ( 
        <div className='App'>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route exact path='/hfz-reactjs/' element={<Home/>} />
                    <Route path='/hfz-reactjs/about' element={<About/>} />
                    <Route path='/hfz-reactjs/redux' element={<CounterApp/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Routerr;