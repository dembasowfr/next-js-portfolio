import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";


const Header = ({ blog, projects }) => {
  
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog && !projects) {
      activeSection();
    }
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
            <a className="logo-text">DEMBA SOW</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <a className="nav-link" href="#home"> 
                <div className="img">
                  <img src="/static/img/personal/icon.png" title="Demba sow the 🐐" alt="Demba Sow Machine Learning Engineer" />
                </div>
              </a>
              <h5>DEMBA SOW</h5>
            </div>
          </div>

          {blog || projects ? (
            <>
              {blog ? <MenuWithBlog /> : null}
              {projects ? <MenuWithProjects /> : null}
            </>
          ) : (
            <MainMenu />
          )}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://github.com/dembasowfr">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.facebook.com/iamDembaAbdullaahiSow/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/dembasowfr">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/greatnessinconstruction/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/dembasowmr/">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://medium.com/@dembasow">
            <i className="fab fa-medium"/>
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MainMenu = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="work" className="projects">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {

  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work" className="projects">
          <Link href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};




const MenuWithProjects = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".projects").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work" className="projects active">
          <Link href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};