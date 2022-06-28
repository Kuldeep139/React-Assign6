import { Link } from "react-router-dom";
import './style.css'

const NavigationBar = () => {
    return ( 
        <div className="Nav">
        <Link to ='/Home' className="ip">Home</Link>
        <Link to ='/Students' className="ip">Students</Link>
        <Link to ='/Contact' className="ip">Contact</Link>
        
    </div> 
    
    );
}
 
export default NavigationBar;