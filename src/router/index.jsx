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
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/redux' element={<CounterApp/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Routerr;