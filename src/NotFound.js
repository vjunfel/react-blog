import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found container">
            <div>
                <h2>Sorry</h2>
                <p>Page cannot be found</p>
                <Link to="/"> Return to Homepage</Link>
            </div>
        </div>
     );
}
 
export default NotFound;