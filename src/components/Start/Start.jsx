import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div>
            <h1>Let the Game begin!</h1>
            <Link to="/EnterName">
                <button>START</button>
            </Link>
        </div>
    )
}

export default Start