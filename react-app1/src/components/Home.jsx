import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <div>
        <ul>
            <li> <Link to ="/counter">Counter-app</Link>
            </li>
            <li><Link to ="/stopwatch">Stopwatch-app</Link></li>
            <li><Link to="/refx">Refex-example</Link></li>
        </ul>
        </div>
    )
}
export default Home;