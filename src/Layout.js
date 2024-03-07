import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <div className="appContainer">
      <header>
        <Navbar className="menuColor" expand="lg">
          <Navbar.Brand className="titlePage">
            AKZ - Meble wykonane z pasją
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto">
              <Link className="nav-item nav-link btnMenu" to={"/"}>
                Strona główna
              </Link>
              <Link className="nav-item nav-link btnMenu" to={"/offer"}>
                Oferta
              </Link>
              <Link className="nav-item nav-link btnMenu" to={"/gallery"}>
                Galeria
              </Link>
              <Link className="nav-item nav-link btnMenu" to={"/contact"}>
                Konatkt
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Outlet />
      <footer>
        <div id="boxFooterInfo">
          <i>
            <b>Adam Kijewski</b>
          </i>
          <span>
            <b>Telefon </b>
            <a className="btnLink" href="tel:+48 535279758">
              +48 535279758
            </a>
          </span>
          <span>
            <b>E-mail</b>
            <a className="btnLink" href="mailto:akz.meble.kijewski@o2.pl">
              akz.meble.kijewski@o2.pl
            </a>
          </span>
        </div>
        <div className="positionCenter">
          <span id="author">
            Autor strony: <br />
            Julia Bydłosz
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
