import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/'} >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                  <a className="dropdown-item" href="/allMeals">
                    All Meals 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/BreakFast">
                    Breakfast
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Lunch">
                    
                    Lunch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Dinner">
                    Dinner
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
            <Link to="/shoppinglist" className="navbar-brand fs-5" > Shopping List  </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={'about'} >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={'contact'} >
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="faq">
                FAQ
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Rgister
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
