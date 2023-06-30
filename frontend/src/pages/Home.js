import { Link, useNavigate } from "react-router-dom";




function HomePage(){

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('./events');
    }

    return (
        <>
        <h1>My Home Page</h1>
        <p>Go to <Link to="/events" >the Event Page </Link></p>
        <p>
            <button onClick={navigateHandler}>navigate</button>
        </p>
        </>
    );
}
export default HomePage;