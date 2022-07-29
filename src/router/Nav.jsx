import { Link } from 'react-router-dom'
import { MenuItem } from '@mui/material'

const Nav = () => {
    return ( 
        <nav>
            <h1>The RouterRedux Company</h1>
            <li className='nav-links'>
                <ul><Link to="/hfz-reactjs/"><MenuItem style={{textDecoration: 'none'}}> Home </MenuItem></Link></ul>
                <ul><Link to="/hfz-reactjs/about"><MenuItem style={{textDecoration: 'none'}}> About </MenuItem></Link></ul>
                <ul><Link to="/hfz-reactjs/redux"><MenuItem style={{textDecoration: 'none'}}> Counter App Redux </MenuItem></Link></ul>
            </li>
            
            
            
        </nav>
     );
}
 
export default Nav;