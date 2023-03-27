import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/a">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page"  */}
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              {" "}
              <i className="ion-compose"></i>&nbsp;New Article{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              {" "}
              <i className="ion-gear-a"></i>&nbsp;Settings{" "}
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/login`}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/register`}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
