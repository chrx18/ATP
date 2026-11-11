import { Link, useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();

    return (
        <nav className="navbar bg-warning">
            <div className="container">
                <Link className="navbar-brand text-dark" to="/">ATP</Link>

                {location.pathname === '/doubles' ?
                    <Link className="btn btn-dark" to="/">
                        SINGLES
                    </Link>
                    :
                    <Link className="btn btn-dark" to="/doubles">
                        DOUBLES
                    </Link>
                }
            </div>
        </nav>
    );
}

export default Header;