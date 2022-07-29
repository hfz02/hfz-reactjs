import { useSelector, useDispatch } from 'react-redux'
import { Increment } from './actions'
import { Decrement } from './actions'

const Redux = () => {

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return ( 
        <div>
            <h1>Redux</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={() => dispatch(Decrement())}>-</button>
            <button onClick={() => dispatch(Increment())}>+</button>

            { isLogged ? <h3>You can see this sentence if the value is TRUE</h3> : '' }
            
        </div>
    );
}
 
export default Redux;